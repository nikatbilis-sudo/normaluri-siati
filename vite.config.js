import { defineConfig, loadEnv } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

function json(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(payload));
}

async function readJsonBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
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

function createOpenAiRoute(apiKey) {
  return async function handleOpenAiRoute(request, response, next) {
    const pathname = request.url ? request.url.split("?")[0] : "";

    if (pathname !== "/api/generate-neon") {
      next();
      return;
    }

    if (request.method !== "POST") {
      json(response, 405, { error: "Method not allowed." });
      return;
    }

    if (!apiKey) {
      json(response, 500, {
        error: "OPENAI_API_KEY is missing. Add it to your local .env file and restart Vite.",
      });
      return;
    }

    try {
      const payload = await readJsonBody(request);
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
        json(response, 400, { error: "A space image is required." });
        return;
      }

      if (mode === "logo" && !designImage) {
        json(response, 400, { error: "A logo image is required for logo mode." });
        return;
      }

      const prompt = buildImagePrompt({
        mode,
        brandText,
        instructions,
        color,
        selectedFont,
      });

      const inputContent = [
        { type: "input_text", text: prompt },
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
        json(response, openAiResponse.status, {
          error: responseBody.error?.message || "OpenAI request failed.",
        });
        return;
      }

      const imageCall = responseBody.output?.find((item) => item.type === "image_generation_call");

      if (!imageCall?.result) {
        json(response, 502, { error: "OpenAI did not return an image." });
        return;
      }

      json(response, 200, {
        image: `data:image/png;base64,${imageCall.result}`,
      });
    } catch (error) {
      json(response, 500, {
        error: error instanceof Error ? error.message : "Unexpected generation error.",
      });
    }
  };
}

function openAiImagePlugin(apiKey) {
  const handler = createOpenAiRoute(apiKey);

  return {
    name: "openai-image-route",
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      openAiImagePlugin(env.OPENAI_API_KEY),
    ],
  };
});
