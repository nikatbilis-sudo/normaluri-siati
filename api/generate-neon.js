function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(payload));
}

function getBody(request) {
  if (request.body && typeof request.body === "object") {
    return request.body;
  }

  if (typeof request.body === "string") {
    return JSON.parse(request.body);
  }

  return {};
}

function buildImagePrompt({ mode, brandText, instructions, color, selectedFont }) {
  const lines = [
    "Create one photorealistic image of a neon sign installed inside the provided real interior or wall photo.",
    "Preserve the room perspective and materials realistically.",
    "The result must look like a real finished installation, not concept art.",
    "Add believable neon glow, reflections, depth, mounting details, and electrical wiring only where natural.",
    `The neon light color should closely match ${color}.`,
    "Return one final polished image.",
  ];

  if (mode === "logo") {
    lines.push("Use the uploaded logo as the exact basis for the neon sign and preserve its recognizable shape and brand details as closely as possible.");
  } else {
    lines.push(`Turn this exact text into the neon sign: "${brandText}".`);
    if (selectedFont) {
      lines.push(`Use a style inspired by the "${selectedFont}" font preset.`);
    }
  }

  if (instructions?.trim()) {
    lines.push(`Follow these extra instructions: ${instructions.trim()}`);
  }

  return lines.join("\n");
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    sendJson(response, 500, {
      error: "OPENAI_API_KEY is missing. Add it in your hosting provider environment variables.",
    });
    return;
  }

  try {
    const payload = getBody(request);
    const {
      mode,
      brandText,
      instructions,
      color,
      selectedFont,
      designImage,
      spaceImage,
    } = payload;

    if (!spaceImage) {
      sendJson(response, 400, { error: "A space image is required." });
      return;
    }

    if (mode === "logo" && !designImage) {
      sendJson(response, 400, { error: "A logo image is required for logo mode." });
      return;
    }

    const inputContent = [
      {
        type: "input_text",
        text: buildImagePrompt({
          mode,
          brandText,
          instructions,
          color,
          selectedFont,
        }),
      },
      { type: "input_image", image_url: spaceImage },
    ];

    if (mode === "logo" && designImage) {
      inputContent.push({ type: "input_image", image_url: designImage });
    }

    const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        input: [
          {
            role: "user",
            content: inputContent,
          },
        ],
        tools: [
          {
            type: "image_generation",
            quality: "medium",
            size: "1536x1024",
            input_fidelity: "high",
          },
        ],
      }),
    });

    const responseBody = await openAiResponse.json();

    if (!openAiResponse.ok) {
      sendJson(response, openAiResponse.status, {
        error: responseBody.error?.message || "OpenAI request failed.",
      });
      return;
    }

    const imageCall = responseBody.output?.find((item) => item.type === "image_generation_call");

    if (!imageCall?.result) {
      sendJson(response, 502, { error: "OpenAI did not return an image." });
      return;
    }

    sendJson(response, 200, {
      image: `data:image/png;base64,${imageCall.result}`,
    });
  } catch (error) {
    sendJson(response, 500, {
      error: error instanceof Error ? error.message : "Unexpected generation error.",
    });
  }
}
