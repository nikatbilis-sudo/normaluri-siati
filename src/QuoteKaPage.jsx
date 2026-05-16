import { useEffect, useId, useState } from "react";
import { Link } from "react-router-dom";
import bgCafe from "./assets/bg-cafe.jpg";
import bgBar from "./assets/bg-bar.jpg";
import bgClothing from "./assets/bg-clothing.jpg";
import bgHomeTwo from "./assets/bg-home-2.jpg";
import bgGym from "./assets/bg-gym.jpg";
import bgHomeOne from "./assets/bg-home-1.jpg";
import defaultLogo from "./assets/neon-tbilisi-logo.svg";
import designPhoto from "./assets/design-photo.jpg";
import resultPhoto from "./assets/result-photo.jpg";

const pageStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, rgba(255, 54, 122, 0.18), transparent 28%), linear-gradient(180deg, #050505 0%, #0a0a0f 48%, #050505 100%)",
  color: "#ffffff",
  fontFamily: "Arial, sans-serif",
};

const containerStyle = {
  width: "min(1180px, calc(100% - 24px))",
  margin: "0 auto",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  color: "#ffffff",
  padding: "14px 16px",
  fontSize: "16px",
};

const labelStyle = {
  display: "grid",
  gap: "8px",
  fontSize: "14px",
  color: "#edf0ff",
};

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

const backgroundPresets = [
  { id: "home-dark", label: "სახლი", image: bgHomeOne },
  { id: "cafe", label: "კაფე", image: bgCafe },
  { id: "clothing", label: "ტანსაცმელი", image: bgClothing },
  { id: "salon", label: "სალონი", image: bgHomeTwo },
  { id: "bar", label: "ბარი", image: bgBar },
  { id: "gym", label: "დარბაზი", image: bgGym },
];

const fontPresets = [
  { id: "austin", label: "Austin", fontFamily: '"Brush Script MT", "Segoe Script", cursive', fontWeight: 400, letterSpacing: "0.01em" },
  { id: "portland", label: "Portland", fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 700, letterSpacing: "0.05em" },
  { id: "columbus", label: "Columbus", fontFamily: "Georgia, serif", fontWeight: 700, letterSpacing: "0.02em" },
  { id: "houston", label: "Houston", fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', fontWeight: 700, letterSpacing: "0.03em" },
  { id: "philadelphia", label: "Philadelphia", fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif', fontWeight: 700, letterSpacing: "0.01em" },
  { id: "charlotte", label: "Charlotte", fontFamily: '"Gill Sans", "Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: "0.04em" },
  { id: "chicago", label: "Chicago", fontFamily: '"Arial Black", Gadget, sans-serif', fontWeight: 700, letterSpacing: "0.04em" },
  { id: "new-york", label: "New York", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, letterSpacing: "0.015em" },
  { id: "seattle", label: "Seattle", fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontWeight: 600, letterSpacing: "0.02em" },
  { id: "atlanta", label: "Atlanta", fontFamily: '"Lucida Handwriting", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: "0.015em" },
  { id: "miami", label: "Miami", fontFamily: '"Comic Sans MS", "Marker Felt", cursive', fontWeight: 700, letterSpacing: "0.03em" },
  { id: "aurora", label: "Aurora", fontFamily: '"Copperplate", "Papyrus", fantasy', fontWeight: 700, letterSpacing: "0.05em" },
  { id: "irvine", label: "Irvine", fontFamily: "Verdana, Geneva, sans-serif", fontWeight: 700, letterSpacing: "0.025em" },
  { id: "madison", label: "Madison", fontFamily: "Cambria, Georgia, serif", fontWeight: 700, letterSpacing: "0.015em" },
  { id: "toledo", label: "Toledo", fontFamily: '"Courier New", Courier, monospace', fontWeight: 700, letterSpacing: "0.04em" },
  { id: "lubbock", label: "Lubbock", fontFamily: "Tahoma, Geneva, sans-serif", fontWeight: 700, letterSpacing: "0.03em" },
  { id: "irving", label: "Irving", fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif', fontWeight: 700, letterSpacing: "0.035em" },
  { id: "scottsdale", label: "Scottsdale", fontFamily: '"Didot", "Times New Roman", serif', fontWeight: 700, letterSpacing: "0.02em" },
  { id: "fremont", label: "Fremont", fontFamily: '"Century Gothic", Futura, sans-serif', fontWeight: 700, letterSpacing: "0.03em" },
  { id: "yonkers", label: "Yonkers", fontFamily: '"Rockwell", "Courier New", serif', fontWeight: 700, letterSpacing: "0.025em" },
  { id: "vegas", label: "Vegas", fontFamily: '"Copperplate", Impact, fantasy', fontWeight: 700, letterSpacing: "0.06em" },
];

function UploadField({ label, helper, onChange }) {
  const inputId = useId();
  const [fileName, setFileName] = useState("");

  async function handleChange(event) {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "");
    await onChange(event);
  }

  return (
    <div style={labelStyle}>
      <span>{label}</span>
      <input id={inputId} type="file" accept="image/*" onChange={handleChange} style={{ display: "none" }} />
      <label
        htmlFor={inputId}
        style={{
          ...inputStyle,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
        }}
      >
        <span style={{ color: fileName ? "#ffffff" : "#9ea3b8" }}>{fileName || "აირჩიე ფაილი"}</span>
        <span
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #ff2d7a, #8d5bff, #22a8ff)",
            color: "#ffffff",
            fontSize: "13px",
            whiteSpace: "nowrap",
          }}
        >
          ატვირთვა
        </span>
      </label>
      <span style={{ fontSize: "12px", color: "#9ea3b8" }}>{helper}</span>
    </div>
  );
}

function FontPicker({ selectedFont, onSelect }) {
  return (
    <div style={{ display: "grid", gap: "10px", maxHeight: "280px", overflowY: "auto", paddingRight: "4px" }}>
      {fontPresets.map((font) => {
        const active = selectedFont === font.id;
        return (
          <button
            key={font.id}
            type="button"
            onClick={() => onSelect(font.id)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "14px 16px",
              borderRadius: "16px",
              border: active ? "1px solid rgba(255,79,163,0.5)" : "1px solid rgba(255,255,255,0.1)",
              background: active ? "linear-gradient(135deg, rgba(255,79,163,0.18), rgba(93,214,255,0.1))" : "rgba(255,255,255,0.05)",
              color: "#ffffff",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "12px", color: "#b6bbcd", marginBottom: "4px" }}>{font.label}</div>
            <div
              style={{
                fontFamily: font.fontFamily,
                fontWeight: font.fontWeight,
                letterSpacing: font.letterSpacing,
                fontSize: "28px",
                lineHeight: 1,
              }}
            >
              Neon Tbilisi
            </div>
          </button>
        );
      })}
    </div>
  );
}

function BackgroundPicker({ selectedPreset, onSelect }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
        gap: "10px",
      }}
    >
      {backgroundPresets.map((preset) => {
        const active = preset.id === selectedPreset;
        return (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelect(preset.id)}
            style={{
              padding: 0,
              borderRadius: "16px",
              overflow: "hidden",
              border: active ? "2px solid #ff4fa3" : "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{ height: "78px", background: `url(${preset.image}) center/cover` }} />
            <div style={{ padding: "10px", fontSize: "13px", color: "#ffffff", fontWeight: active ? 700 : 500 }}>
              {preset.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("File reading failed."));
    reader.readAsDataURL(file);
  });
}

async function readImageFromEvent(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return null;
  }

  const dataUrl = await fileToDataUrl(file);

  return {
    name: file.name,
    dataUrl,
    previewUrl: dataUrl,
  };
}

function buildPrompt({ mode, brandText, instructions, color, selectedFont }) {
  const activeFont = fontPresets.find((font) => font.id === selectedFont);
  const lines = [
    "შექმენი ერთი ფოტორეალისტური მარკეტინგული ვიზუალი, სადაც ნეონის აბრა მოთავსებულია ატვირთულ რეალურ სივრცეში.",
    "Keep the room architecture, perspective, and materials realistic.",
    "Add believable neon glow, light spill, reflections, mounting details, and wiring when natural.",
    `The neon color should closely match ${color}.`,
    "Do not make a collage, split view, or poster. Return one final realistic image.",
  ];

  if (mode === "logo") {
    lines.push("Use the uploaded logo as the sign design and preserve the brand shape and details as closely as possible.");
  } else {
    lines.push(`Render this exact text as the neon sign: "${brandText}".`);
    if (activeFont) {
      lines.push(`Use a style inspired by the "${activeFont.label}" font family.`);
    }
  }

  if (instructions.trim()) {
    lines.push(`Extra instructions: ${instructions.trim()}`);
  }

  return lines.join("\n");
}

export default function QuoteKaPage() {
  const isPhone = useMediaQuery("(max-width: 760px)");
  const [mode, setMode] = useState("logo");
  const [brandText, setBrandText] = useState("neontbilisi");
  const [instructions, setInstructions] = useState(
    "დაამატე ჩემი ლოგო ან ტექსტი კედელზე, გააკეთე რეალისტური ნეონის განათება და აჩვენე როგორ გამოჩნდება რეალურ სივრცეში."
  );
  const [designImage, setDesignImage] = useState(null);
  const [spaceImage, setSpaceImage] = useState(null);
  const [color, setColor] = useState("#6cf7ff");
  const [selectedFont, setSelectedFont] = useState("austin");
  const [selectedPreset, setSelectedPreset] = useState("cafe");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState("");
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [lastPrompt, setLastPrompt] = useState(""); // eslint-disable-line no-unused-vars

  const activeLogo = designImage?.previewUrl || defaultLogo;
  const presetImage = backgroundPresets.find((preset) => preset.id === selectedPreset)?.image || bgCafe;
  const previewImage = generatedImageUrl || spaceImage?.previewUrl || presetImage;
  const activeFont = fontPresets.find((font) => font.id === selectedFont) || fontPresets[0];

  async function handleDesignUpload(event) {
    const image = await readImageFromEvent(event);
    if (!image) {
      return;
    }
    setDesignImage(image);
    setGeneratedImageUrl("");
    setGenerationError("");
  }

  async function handleSpaceUpload(event) {
    const image = await readImageFromEvent(event);
    if (!image) {
      return;
    }
    setSpaceImage(image);
    setGeneratedImageUrl("");
    setGenerationError("");
  }

  async function handleGenerate() {
    if (!spaceImage?.dataUrl) {
      setGenerationError("ატვირთე სივრცის ფოტო, რომ AI-მ რეალურ გარემოზე იმუშაოს.");
      return;
    }

    if (mode === "logo" && !designImage?.dataUrl) {
      setGenerationError("ატვირთე ლოგო, რომ AI-მ ის ნეონად გადააკეთოს.");
      return;
    }

    const prompt = buildPrompt({
      mode,
      brandText,
      instructions,
      color,
      selectedFont,
    });

    setIsGenerating(true);
    setGenerationError("");
    setLastPrompt(prompt);

    try {
      const response = await fetch("/api/generate-neon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode,
          brandText,
          instructions,
          color,
          selectedFont,
          designImage: designImage?.dataUrl || null,
          spaceImage: spaceImage.dataUrl,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "სურათის გენერაცია ვერ შესრულდა.");
      }

      setGeneratedImageUrl(payload.image);
    } catch (error) {
      setGenerationError(error.message || "AI გენერაცია ვერ შესრულდა.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <div style={pageStyle}>
      <div style={{ ...containerStyle, padding: "28px 0 72px" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: isPhone ? "stretch" : "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "grid", gap: "6px" }}>
            <Link to="/" style={{ color: "#9fd1ff", textDecoration: "none", fontSize: "14px" }}>
              მთავარ გვერდზე დაბრუნება
            </Link>
            <div style={{ fontSize: "30px", fontWeight: 900, letterSpacing: "1px" }}>ნეონ თბილისი</div>
          </div>

          <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap", width: isPhone ? "100%" : "auto" }}>
            <Link
              to="/custom"
              style={{
                textDecoration: "none",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.14)",
                flex: isPhone ? "1 1 140px" : "0 0 auto",
                textAlign: "center",
              }}
            >
              კონფიგურატორი
            </Link>
            <Link
              to="/quote-ka"
              style={{
                textDecoration: "none",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #ff2d7a, #8d5bff, #22a8ff)",
                fontWeight: 700,
                flex: isPhone ? "1 1 140px" : "0 0 auto",
                textAlign: "center",
              }}
            >
              AI ვიზუალი
            </Link>
          </nav>
        </header>

        <p style={{ margin: "0 0 18px", color: "#edf0ff", fontSize: isPhone ? "18px" : "24px", fontWeight: 700 }}>
          ატვირთე ორი ფოტო, დაწერე ინსტრუქცია და OpenAI შექმნის რეალისტურ ნეონის ვიზუალს
        </p>

        <section
          style={{
            marginBottom: "22px",
            padding: isPhone ? "12px" : "22px",
            borderRadius: isPhone ? "20px" : "28px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isPhone ? "repeat(3, minmax(0, 1fr))" : "repeat(auto-fit, minmax(220px, 1fr))",
              gap: isPhone ? "8px" : "20px",
              alignItems: "center",
            }}
          >
            {[
              { title: "შენი დიზაინი", stage: "logo" },
              { title: "AI დამუშავება", stage: "design" },
              { title: "შედეგი", stage: "result" },
            ].map((item) => (
              <div key={item.title} style={{ display: "grid", gap: "12px", justifyItems: "center" }}>
                <div
                  style={{
                    fontSize: isPhone ? "13px" : "clamp(22px, 3vw, 34px)",
                    fontWeight: 900,
                    letterSpacing: "1px",
                    textAlign: "center",
                    color: "#ffffff",
                    textShadow: "0 0 10px rgba(255,255,255,0.35)",
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    width: "100%",
                    maxWidth: "330px",
                    aspectRatio: "1 / 1",
                    borderRadius: isPhone ? "14px" : "22px",
                    overflow: "hidden",
                    background: item.stage === "logo" ? "#ffffff" : "#0a0b14",
                    border: isPhone ? "2px solid rgba(255,255,255,0.85)" : "4px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 0 22px rgba(255,255,255,0.18)",
                    position: "relative",
                  }}
                >
                  {item.stage === "logo" ? (
                    mode === "logo" ? (
                      <img
                        src={activeLogo}
                        alt="ატვირთული ლოგო"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "grid",
                          placeItems: "center",
                          padding: "22px",
                          textAlign: "center",
                          color,
                          fontFamily: activeFont.fontFamily,
                          fontWeight: activeFont.fontWeight,
                          letterSpacing: activeFont.letterSpacing,
                          fontSize: "clamp(30px, 5vw, 48px)",
                          lineHeight: 1.1,
                          textShadow: `0 0 10px ${color}, 0 0 18px ${color}`,
                        }}
                      >
                        {brandText}
                      </div>
                    )
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `url(${item.stage === "design" ? designPhoto : resultPhoto}) center/cover`,
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isPhone ? "1fr" : "minmax(320px, 1.2fr) minmax(280px, 0.8fr)",
            gap: isPhone ? "14px" : "22px",
            alignItems: "start",
          }}
        >
          <section
            style={{
              background: "linear-gradient(180deg, rgba(9,10,20,0.96), rgba(6,7,14,0.94))",
              color: "#ffffff",
              borderRadius: isPhone ? "20px" : "28px",
              padding: isPhone ? "16px" : "22px",
              boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ display: "flex", gap: "24px", marginBottom: "22px", flexWrap: "wrap" }}>
              <span style={{ color: "#ff3e93", fontWeight: 700 }}>1. შენი არჩევანი</span>
              <span style={{ color: "#9fa5bb", fontWeight: 700 }}>2. AI გენერაცია</span>
            </div>

            <div
              style={{
                marginBottom: "18px",
                padding: "16px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#e2e6f8",
                lineHeight: 1.7,
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: "8px" }}>როგორ გამოიყენო</div>
              <div>1. ატვირთე სივრცის ფოტო, სადაც ნეონი უნდა გამოჩნდეს.</div>
              <div>2. ატვირთე ლოგო ან აირჩიე ტექსტის რეჟიმი.</div>
              <div>3. მიუთითე ინსტრუქცია, ფერი და სტილი.</div>
              <div>4. დააჭირე ღილაკს და AI დააბრუნებს ერთ რეალისტურ მაკეტს.</div>
            </div>

            <div style={{ display: "grid", gap: "12px", marginBottom: "18px" }}>
              <span style={{ fontSize: "16px", fontWeight: 700 }}>რა გინდა რომ ნეონად გადაიქცეს</span>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {[
                  { id: "logo", label: "ლოგო" },
                  { id: "text", label: "ტექსტი" },
                ].map((item) => {
                  const active = item.id === mode;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setMode(item.id);
                        setGenerationError("");
                        setGeneratedImageUrl("");
                      }}
                      style={{
                        minWidth: isPhone ? "0" : "138px",
                        flex: isPhone ? "1 1 120px" : "0 0 auto",
                        padding: "14px 18px",
                        borderRadius: "14px",
                        border: active ? "none" : "1px solid #1a1a1a",
                        background: active ? "linear-gradient(90deg, #e83c8d, #9b33ff)" : "#111111",
                        color: "#ffffff",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "grid", gap: "16px" }}>
              {mode === "text" ? (
                <>
                  <label style={labelStyle}>
                    <span>ჩაწერე ტექსტი</span>
                    <input
                      value={brandText}
                      onChange={(e) => {
                        setBrandText(e.target.value);
                        setGeneratedImageUrl("");
                      }}
                      style={inputStyle}
                      placeholder="მაგ: სილამაზის ოთახი"
                    />
                  </label>

                  <div style={labelStyle}>
                    <span>ფონტი</span>
                    <FontPicker
                      selectedFont={selectedFont}
                      onSelect={(fontId) => {
                        setSelectedFont(fontId);
                        setGeneratedImageUrl("");
                      }}
                    />
                  </div>
                </>
              ) : (
                <UploadField
                  label="ატვირთე ლოგო"
                  onChange={handleDesignUpload}
                  helper="PNG ან JPG. გამჭვირვალე ფონიანი ლოგო უკეთეს შედეგს იძლევა."
                />
              )}

              <UploadField
                label="ატვირთე სივრცის ფოტო"
                onChange={handleSpaceUpload}
                helper="ატვირთე კედლის, ინტერიერის ან ვიტრინის რეალური ფოტო."
              />

              <div style={labelStyle}>
                <span>აირჩიე ფონური სივრცე</span>
                <BackgroundPicker
                  selectedPreset={selectedPreset}
                  onSelect={(presetId) => {
                    setSelectedPreset(presetId);
                    if (!spaceImage) {
                      setGeneratedImageUrl("");
                    }
                  }}
                />
              </div>

              <label style={labelStyle}>
                <span>ინსტრუქცია AI-სთვის</span>
                <textarea
                  value={instructions}
                  onChange={(e) => {
                    setInstructions(e.target.value);
                    setGeneratedImageUrl("");
                  }}
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }}
                  placeholder="მაგ: განათავსე მარცხენა მხარეს, გააკეთე თბილი ვარდისფერი ნეონი და დაამატე კედელზე სინათლის რბილი ანარეკლი."
                />
              </label>

              <label style={labelStyle}>
                <span>ნეონის ფერი</span>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                    setGeneratedImageUrl("");
                  }}
                  style={{ ...inputStyle, height: "52px", padding: "8px" }}
                />
              </label>
            </div>

            <button
              type="button"
              onClick={handleGenerate}
              disabled={isGenerating}
              style={{
                marginTop: "22px",
                width: "100%",
                border: "none",
                borderRadius: "18px",
                padding: "20px 26px",
                background: isGenerating ? "linear-gradient(90deg, #5f6078, #4c4d60)" : "linear-gradient(90deg, #ff2d7a, #3434d9)",
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: 800,
                cursor: isGenerating ? "progress" : "pointer",
                boxShadow: "0 14px 35px rgba(82, 58, 255, 0.28)",
                opacity: isGenerating ? 0.86 : 1,
              }}
            >
              {isGenerating ? "AI ქმნის ვიზუალს..." : "AI ვიზუალის შექმნა"}
            </button>

            {generationError ? (
              <div
                style={{
                  marginTop: "14px",
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "rgba(255, 92, 92, 0.14)",
                  border: "1px solid rgba(255, 92, 92, 0.32)",
                  color: "#ffd1d1",
                }}
              >
                {generationError}
              </div>
            ) : null}
          </section>

          <aside
            style={{
              position: "relative",
              minHeight: isPhone ? "420px" : "520px",
              borderRadius: isPhone ? "20px" : "28px",
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.78)",
              boxShadow: "0 0 40px rgba(255,255,255,0.18)",
              background: "#0a0b14",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `url(${previewImage}) center/cover`,
                filter: generatedImageUrl ? "none" : "brightness(0.82)",
              }}
            />

            {!generatedImageUrl ? (
              <>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 42%)",
                  }}
                />

                {mode === "logo" && designImage?.previewUrl ? (
                  <img
                    src={designImage.previewUrl}
                    alt="ლოგოს გადახედვა"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "36%",
                      transform: "translate(-50%, -50%)",
                      width: "58%",
                      objectFit: "contain",
                      filter: `drop-shadow(0 0 12px ${color}) drop-shadow(0 0 28px ${color})`,
                    }}
                  />
                ) : mode === "text" ? (
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "36%",
                      transform: "translate(-50%, -50%)",
                      maxWidth: "78%",
                      textAlign: "center",
                      color,
                      fontSize: "clamp(36px, 6vw, 72px)",
                      lineHeight: 1.08,
                      fontFamily: activeFont.fontFamily,
                      fontWeight: activeFont.fontWeight,
                      letterSpacing: activeFont.letterSpacing,
                      textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`,
                    }}
                  >
                    {brandText}
                  </div>
                ) : null}
              </>
            ) : null}

            <div
              style={{
                position: "absolute",
                top: "18px",
                left: "18px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: generatedImageUrl ? "rgba(33, 214, 128, 0.22)" : isGenerating ? "rgba(255, 176, 32, 0.22)" : "rgba(0,0,0,0.42)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              {generatedImageUrl ? "AI მაკეტი მზად არის" : isGenerating ? "OpenAI მუშაობს..." : "AI მაკეტის გადახედვა"}
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}
