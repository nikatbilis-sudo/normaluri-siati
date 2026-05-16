import { useEffect, useId, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CompaniesPage from "./CompaniesPage";
import QuoteKaPage from "./QuoteKaPage";
import NeonCreationPage from "./NeonCreationPage";
import { LanguageSwitcher, useLanguage } from "./i18n";
import bgCafe from "./assets/bg-cafe.jpg";
import bgBar from "./assets/bg-bar.jpg";
import bgClothing from "./assets/bg-clothing.jpg";
import bgHomeTwo from "./assets/bg-home-2.jpg";
import bgGym from "./assets/bg-gym.jpg";
import bgHomeOne from "./assets/bg-home-1.jpg";
import onlineDesignPhoto from "./assets/unnamed-18.jpg";
import homeShowcaseLeft from "./assets/home-showcase-left.jpg";
import neonTbilisiLogo from "./assets/9.jpg";
import underSectionPhoto from "./assets/under-section-photo.jpg";

const pageStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, rgba(255, 54, 122, 0.18), transparent 28%), linear-gradient(180deg, #050505 0%, #0a0a0f 48%, #050505 100%)",
  color: "#ffffff",
  fontFamily: '"Noto Sans Georgian", "DejaVu Sans", "Segoe UI", Arial, sans-serif',
};

const containerStyle = {
  width: "min(1180px, calc(100% - 24px))",
  margin: "0 auto",
};

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  backdropFilter: "blur(12px)",
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

const selectStyle = {
  ...inputStyle,
  appearance: "none",
  background:
    "linear-gradient(180deg, rgba(18,18,26,0.96) 0%, rgba(10,10,14,0.96) 100%)",
  border: "1px solid rgba(255,255,255,0.16)",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04), 0 10px 24px rgba(0,0,0,0.24)",
};

const labelStyle = {
  display: "grid",
  gap: "8px",
  fontSize: "14px",
  color: "#d3d3de",
};

const socialLinks = [
  { label: "Facebook", short: "f", href: "https://www.facebook.com/neontbilisi" },
  { label: "Instagram", short: "IG", href: "https://www.instagram.com/neontbilisi/" },
  { label: "WhatsApp", short: "WA", href: "https://wa.me/995591175805" },
];

const contactLinks = [
  { label: "Email", value: "neontbilisi@gmail.com", href: "mailto:neontbilisi@gmail.com" },
  { label: "Phone", value: "+995 591 17 58 05", href: "tel:+995591175805" },
];

const features = [ // eslint-disable-line no-unused-vars
  {
    title: "ინდივიდუალური დიზაინი",
    text: "ტექსტი, ლოგო, ფერები და განლაგება სრულად შენს იდეაზეა მორგებული.",
  },
  {
    title: "რეალისტური ვიზუალი",
    text: "ფოტოზე, მზა გარემოზე და სხვადასხვა სამონტაჟო სტილზე ნეონის ცოცხალი წინასწარი ნახვა.",
  },
  {
    title: "მრავალი ფერი",
    text: "ნათელი ფერების სწრაფი არჩევა, ძლიერი glow ეფექტი და რეალისტური სინათლის გაბნევა.",
  },
  {
    title: "მობილურზე კომფორტული",
    text: "ინსტრუმენტი მარტივად გამოსაყენებელია ტელეფონზე, ტაბლეტზე და კომპიუტერზე.",
  },
];

const steps = [ // eslint-disable-line no-unused-vars
  "წერ ტექსტს ან ტვირთავ ლოგოს",
  "ირჩევ ფონს ან ატვირთავ საკუთარ ფოტოს",
  "ასწორებ ფერს, glow-ს და პოზიციას",
  "ხედავ რეალისტურ ნეონს რეალურ სივრცეში",
];

const gallery = [ // eslint-disable-line no-unused-vars
  "კაფეებისა და ბარებისთვის",
  "სალონებისა და სტუდიებისთვის",
  "რესტორნებისა და მაღაზიებისთვის",
  "სახლის ინტერიერისთვის",
];

const backgroundPresets = [
  {
    id: "concrete",
    label: "Дом",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "dark-cafe",
    label: "Кафе",
    image: bgCafe,
  },
  {
    id: "boutique",
    label: "Одежда",
    image: bgClothing,
  },
  {
    id: "salon",
    label: "Салон",
    image: bgHomeOne,
  },
  {
    id: "bar-wall",
    label: "Бар",
    image: bgBar,
  },
  {
    id: "studio-wall",
    label: "Зал",
    image: bgGym,
  },
  {
    id: "minimal-home",
    label: "Дом",
    image: bgHomeTwo,
  },
];

const neonPalettes = [
  { name: "Розовый", color: "#ff4fa3" },
  { name: "Голубой", color: "#5fd6ff" },
  { name: "Фиолетовый", color: "#a45bff" },
  { name: "Лайм", color: "#baff4d" },
  { name: "Янтарный", color: "#ffb347" },
  { name: "Красный", color: "#ff5c5c" },
  { name: "Белый", color: "#f8f6ff" },
  { name: "Мятный", color: "#78ffd6" },
  { name: "Оранжевый", color: "#ff8c42" },
  { name: "Синий", color: "#4d7dff" },
];

const fontPresets = [
  { id: "austin", label: "Austin", fontFamily: '"Brush Script MT", "Segoe Script", cursive', fontWeight: 400, letterSpacing: "0.01em" },
  { id: "portland", label: "Portland", fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 700, letterSpacing: "0.05em" },
  { id: "columbus", label: "Columbus", fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: "0.02em" },
  { id: "houston", label: "Houston", fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif', fontWeight: 700, letterSpacing: "0.03em" },
  { id: "philadelphia", label: "Philadelphia", fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif', fontWeight: 700, letterSpacing: "0.01em" },
  { id: "charlotte", label: "Charlotte", fontFamily: '"Gill Sans", "Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: "0.04em" },
  { id: "chicago", label: "Chicago", fontFamily: '"Arial Black", Gadget, sans-serif', fontWeight: 700, letterSpacing: "0.04em" },
  { id: "new-york", label: "New York", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, letterSpacing: "0.015em" },
  { id: "seattle", label: "Seattle", fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontWeight: 600, letterSpacing: "0.02em" },
  { id: "atlanta", label: "Atlanta", fontFamily: '"Lucida Handwriting", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: "0.015em" },
  { id: "miami", label: "Miami", fontFamily: '"Comic Sans MS", "Marker Felt", cursive', fontWeight: 700, letterSpacing: "0.03em" },
  { id: "aurora", label: "Aurora", fontFamily: '"Copperplate", "Papyrus", fantasy', fontWeight: 700, letterSpacing: "0.05em" },
  { id: "irvine", label: "Irvine", fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: 700, letterSpacing: "0.025em" },
  { id: "madison", label: "Madison", fontFamily: 'Cambria, Georgia, serif', fontWeight: 700, letterSpacing: "0.015em" },
  { id: "toledo", label: "Toledo", fontFamily: '"Courier New", Courier, monospace', fontWeight: 700, letterSpacing: "0.04em" },
  { id: "lubbock", label: "Lubbock", fontFamily: 'Tahoma, Geneva, sans-serif', fontWeight: 700, letterSpacing: "0.03em" },
  { id: "irving", label: "Irving", fontFamily: '"Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif', fontWeight: 700, letterSpacing: "0.035em" },
  { id: "scottsdale", label: "Scottsdale", fontFamily: '"Didot", "Times New Roman", serif', fontWeight: 700, letterSpacing: "0.02em" },
  { id: "fremont", label: "Fremont", fontFamily: '"Century Gothic", Futura, sans-serif', fontWeight: 700, letterSpacing: "0.03em" },
  { id: "yonkers", label: "Yonkers", fontFamily: '"Rockwell", "Courier New", serif', fontWeight: 700, letterSpacing: "0.025em" },
  { id: "peoria", label: "Peoria", fontFamily: '"Bookman Old Style", Georgia, serif', fontWeight: 700, letterSpacing: "0.02em" },
  { id: "vancouver", label: "Vancouver", fontFamily: 'Optima, "Segoe UI", sans-serif', fontWeight: 600, letterSpacing: "0.03em" },
  { id: "laredo", label: "Laredo", fontFamily: '"Lucida Sans Typewriter", monospace', fontWeight: 700, letterSpacing: "0.035em" },
  { id: "hollywood", label: "Hollywood", fontFamily: 'Impact, "Arial Black", sans-serif', fontWeight: 700, letterSpacing: "0.06em" },
  { id: "texas", label: "Texas", fontFamily: '"Rockwell Extra Bold", Rockwell, serif', fontWeight: 700, letterSpacing: "0.04em" },
  { id: "savannah", label: "Savannah", fontFamily: '"Monotype Corsiva", "Brush Script MT", cursive', fontWeight: 400, letterSpacing: "0.015em" },
  { id: "brooklyn", label: "Brooklyn", fontFamily: '"Arial Black", "Trebuchet MS", sans-serif', fontWeight: 700, letterSpacing: "0.035em" },
  { id: "vegas", label: "Vegas", fontFamily: '"Copperplate", Impact, fantasy', fontWeight: 700, letterSpacing: "0.06em" },
];

const mountingStyles = [
  {
    id: "none",
    label: {
      ka: "თავისუფალი ნეონი",
      en: "Free neon",
      ru: "Свободный неон",
    },
  },
  {
    id: "acrylic",
    label: {
      ka: "გამჭვირვალე აკრილი",
      en: "Clear acrylic",
      ru: "Прозрачный акрил",
    },
  },
  {
    id: "box",
    label: {
      ka: "ნათების ყუთი",
      en: "Light box",
      ru: "Световой короб",
    },
  },
];

function localizedLabel(label, language) {
  return typeof label === "string" ? label : label[language] || label.ka;
}

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

function UploadField({ label, onChange, helper }) {
  const inputId = useId();
  const [fileName, setFileName] = useState("");

  function handleChange(event) {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : "");
    onChange(event);
  }

  return (
    <div style={labelStyle}>
      <span>{label}</span>
      <input
        id={inputId}
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />
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
        <span style={{ color: fileName ? "#ffffff" : "#b7b7c4" }}>
          {fileName || "Выбрать файл"}
        </span>
        <span
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #ff2d7a, #8d5bff, #22a8ff)",
            fontSize: "13px",
            whiteSpace: "nowrap",
          }}
        >
          Загрузить
        </span>
      </label>
      {helper ? <span style={{ fontSize: "12px", color: "#9a9aac" }}>{helper}</span> : null}
    </div>
  );
}

function RangeField({ label, min, max, value, onChange }) {
  return (
    <label style={labelStyle}>
      <span>
        {label}: {value}
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

function BackgroundPicker({ selectedPreset, onSelect }) {
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <span style={{ fontSize: "14px", color: "#d3d3de" }}>Фон</span>
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
                border: active ? "2px solid #ffffff" : "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
                cursor: "pointer",
                textAlign: "left",
                boxShadow: active ? "0 0 0 2px rgba(255,79,163,0.35)" : "none",
              }}
            >
              <div
                style={{
                  height: "74px",
                  background: `linear-gradient(rgba(0,0,0,0.14), rgba(0,0,0,0.36)), url(${preset.image}) center/cover`,
                }}
              />
              <div
                style={{
                  padding: "10px 10px 12px",
                  fontSize: "13px",
                  color: active ? "#ffffff" : "#d7d7e2",
                  fontWeight: active ? 700 : 500,
                }}
              >
                {preset.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function NeonTbilisiLogo({ size = 150 }) {
  return (
    <img
      src={neonTbilisiLogo}
      alt="Neon Tbilisi"
      width={size}
      height={size}
      data-i18n-skip
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "contain",
        borderRadius: "50%",
        filter: "drop-shadow(0 0 14px rgba(255,94,214,0.42))",
      }}
    />
  );
}

function FontPicker({ selectedFont, onSelect }) {
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      <span style={{ fontSize: "14px", color: "#d3d3de" }}>Шрифты</span>
      <div
        style={{
          display: "grid",
          gap: "10px",
          maxHeight: "320px",
          overflowY: "auto",
          paddingRight: "4px",
        }}
      >
        {fontPresets.map((font) => {
          const active = font.id === selectedFont;

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
                border: active
                  ? "1px solid rgba(255,255,255,0.4)"
                  : "1px solid rgba(255,255,255,0.12)",
                background: active
                  ? "linear-gradient(135deg, rgba(255,79,163,0.22), rgba(93,214,255,0.14), rgba(141,91,255,0.22))"
                  : "linear-gradient(180deg, rgba(16,17,24,0.96) 0%, rgba(10,10,14,0.96) 100%)",
                color: "#ffffff",
                cursor: "pointer",
                boxShadow: active ? "0 0 20px rgba(255,79,163,0.18)" : "none",
              }}
            >
              <div style={{ display: "grid", gap: "4px" }}>
                <span style={{ fontSize: "12px", color: active ? "#ffffff" : "#b9bdcb" }}>
                  <span translate="no" lang="en">
                    {font.label}
                  </span>
                </span>
                <span
                  style={{
                    fontSize: "28px",
                    lineHeight: 1,
                    fontFamily: font.fontFamily,
                    fontWeight: font.fontWeight,
                    letterSpacing: font.letterSpacing,
                    color: active ? "#ffffff" : "#eef0f7",
                  }}
                >
                  Неон Тбилиси
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SelectedOptions({ selectedPreset, mountStyle, color, selectedFont, textAlign }) {
  const { language } = useLanguage();
  const currentBackground =
    backgroundPresets.find((preset) => preset.id === selectedPreset)?.label || "";
  const currentMount =
    localizedLabel(mountingStyles.find((style) => style.id === mountStyle)?.label || "", language);
  const currentFont = fontPresets.find((font) => font.id === selectedFont)?.label || "";
  const currentAlignment =
    textAlign === "left" ? "Слева" : textAlign === "right" ? "Справа" : "По центру";

  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        padding: "14px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <span style={{ fontSize: "14px", color: "#d3d3de" }}>Выбранные параметры</span>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <span
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            fontSize: "13px",
          }}
        >
          Фон: {currentBackground}
        </span>
        <span
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            fontSize: "13px",
          }}
        >
          Тип: {currentMount}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            fontSize: "13px",
          }}
        >
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              background: color,
              boxShadow: `0 0 10px ${color}`,
            }}
          />
          Цвет
        </span>
        <span
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            fontSize: "13px",
          }}
        >
          Шрифт: <span translate="no" lang="en">{currentFont}</span>
        </span>
        <span
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.08)",
            fontSize: "13px",
          }}
        >
          Выравнивание: {currentAlignment}
        </span>
      </div>
    </div>
  );
}

function FeatureIcon({ children }) {
  return (
    <div
      style={{
        width: "52px",
        height: "52px",
        borderRadius: "16px",
        border: "1px solid rgba(255,79,163,0.28)",
        background: "rgba(255,255,255,0.03)",
        display: "grid",
        placeItems: "center",
        color: "#ff4fa3",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

function DesignIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M6 18V7a2 2 0 0 1 2-2h3" />
      <path d="M10 14l8.5-8.5a1.4 1.4 0 0 1 2 2L12 16l-4 1 1-4Z" />
      <path d="M13 4l7 7" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="13" rx="3" />
      <path d="m7 13 3-3 3 3 2-2 3 3" />
      <path d="M15 21v-6" />
      <path d="m12.5 17.5 2.5-2.5 2.5 2.5" />
      <circle cx="9" cy="8.5" r="1.2" />
    </svg>
  );
}

function CompanyIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V9l7-4v16" />
      <path d="M12 21v-9l7-3v12" />
      <path d="M8 11h1" />
      <path d="M8 14h1" />
      <path d="M15 13h1" />
      <path d="M15 16h1" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16v12H7l-3 3V5Z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.8 2.8 0 0 1 5.1 1.6c0 1.9-2.6 2.2-2.6 4" />
      <path d="M12 17.5h.01" />
    </svg>
  );
}

function SocialLogo({ label }) {
  if (label === "Facebook") {
    return (
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#1877F2" />
        <path
          fill="#fff"
          d="M20.7 17.1h-3.1V28h-4.5V17.1h-2.2v-3.8h2.2v-2.5c0-1.8.9-4.7 4.7-4.7h3.5v3.9h-2.5c-.4 0-1.1.2-1.1 1.2v2.1h3.7l-.7 3.8Z"
        />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="instagramLogoGradient" x1="5" y1="29" x2="27" y2="3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffd600" />
            <stop offset="0.42" stopColor="#ff0069" />
            <stop offset="0.72" stopColor="#d300c5" />
            <stop offset="1" stopColor="#7638fa" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="8" fill="url(#instagramLogoGradient)" />
        <rect x="8.2" y="8.2" width="15.6" height="15.6" rx="5" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle cx="16" cy="16" r="4" fill="none" stroke="#fff" strokeWidth="2.4" />
        <circle cx="21.2" cy="10.9" r="1.4" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#25D366" />
      <path
        fill="#fff"
        d="M8.1 24.4 9.4 20A8.4 8.4 0 1 1 16.7 24a8.6 8.6 0 0 1-4-.98l-4.6 1.38Zm4.8-3.2.28.16a6.5 6.5 0 1 0-1.9-1.82l.18.3-.74 2.4 2.18-1.04Zm7.5-3.5c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.12-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}

const customerReviews = [
  {
    name: {
      ka: "ნიკა უმურშადიანი",
      en: "Nika Umurshadiani",
      ru: "Ника Умуршадиани",
    },
    text: "მშვენიერი განათება, კაი ხარისხიანი გამიკეთეს. ძალიან კმაყოფილი ვარ!",
  },
  {
    name: {
      ka: "გიორგი ბერიძე",
      en: "Giorgi Beridze",
      ru: "Гиорги Беридзе",
    },
    text: "სუპერ სერვისი! ზუსტად ისეთი ნეონი მივიღე, როგორიც მინდოდა. სწრაფადაც გააკეთეს.",
  },
  {
    name: {
      ka: "ანა კაპანაძე",
      en: "Ana Kapanadze",
      ru: "Ана Капанадзе",
    },
    text: "ძალიან ლამაზი გამოვიდა ჩემი ოთახისთვის. განათება ძლიერი და ხარისხიანია. რეკომენდაციას ვუწევ!",
  },
  {
    name: {
      ka: "ლუკა მაისურაძე",
      en: "Luka Maisuradze",
      ru: "Лука Маисурадзе",
    },
    text: "ძალიან კარგი ხარისხი და სუფთა შესრულება. ზუსტად ისეთი გამოვიდა, როგორიც დიზაინში შევათანხმეთ.",
  },
  {
    name: {
      ka: "მარიამ ჩიქოვანი",
      en: "Mariam Chikovani",
      ru: "Мариам Чиковани",
    },
    text: "ბიზნესისთვის შევუკვეთე ნეონ ლოგო და შედეგი იდეალურია. ძალიან ეფექტურად გამოიყურება!",
  },
  {
    name: {
      ka: "საბა გელაშვილი",
      en: "Saba Gelashvili",
      ru: "Саба Гелашвили",
    },
    text: "პროფესიონალური გუნდი და სწრაფი მომსახურება. ნამდვილად ღირს!",
  },
  {
    name: {
      ka: "დატო ჯაფარიძე",
      en: "Dato Japaridze",
      ru: "Дато Джапаридзе",
    },
    text: "ფასი და ხარისხი იდეალურად ემთხვევა ერთმანეთს. მომავალშიც აქ შევუკვეთავ.",
  },
  {
    name: {
      ka: "თაკო მჭედლიშვილი",
      en: "Tako Mchedlishvili",
      ru: "Тако Мчедлишвили",
    },
    text: "ძალიან კრეატიული დიზაინი შემომთავაზეს. საბოლოო შედეგმა მოლოდინს გადააჭარბა!",
  },
];

const comparisonRows = [
  {
    label: { ka: "Google მიმოხილვები", en: "Google reviews", ru: "Отзывы Google" },
    us: { ka: "5.0 ★★★★★", en: "5.0 ★★★★★", ru: "5.0 ★★★★★" },
    other: { ka: "3.0 ★★★☆☆", en: "3.0 ★★★☆☆", ru: "3.0 ★★★☆☆" },
  },
  {
    label: { ka: "სინათლის სიძლიერე", en: "Brightness", ru: "Яркость" },
    us: { ka: "3000K - 6500K\nიდეალური ფერის დიაპაზონი", en: "3000K - 6500K\nIdeal color range", ru: "3000K - 6500K\nИдеальный диапазон цвета" },
    other: { ka: "400K - 600K\nშეზღუდული და ნაკლებად ნათელი", en: "400K - 600K\nLimited and dimmer", ru: "400K - 600K\nОграниченная яркость" },
  },
  {
    label: { ka: "მუშაობის ვადა", en: "Lifetime", ru: "Срок службы" },
    us: { ka: "სამუდამო\n50 000+ საათი", en: "Forever\n50,000+ hours", ru: "Вечно\n50 000+ часов" },
    other: { ka: "მაქსიმუმ 50 000 საათი\nუფრო მოკლე დრო", en: "Up to 50,000 hours\nShorter lifetime", ru: "До 50 000 часов\nМеньше срок службы" },
  },
  {
    label: { ka: "გამოცდილება", en: "Experience", ru: "Опыт" },
    us: { ka: "20 წელზე მეტი\nმრავალი წლის გამოცდილება", en: "More than 20 years\nYears of experience", ru: "Более 20 лет\nДесятилетия опыта" },
    other: { ka: "1 - 3 თვე\nთითქმის არ აქვთ გამოცდილება", en: "1 - 3 months\nAlmost no experience", ru: "1 - 3 месяца\nПочти нет опыта" },
  },
  {
    label: { ka: "გარანტია", en: "Warranty", ru: "Гарантия" },
    us: { ka: "24 - 36 თვე\nსრული გარანტია", en: "24 - 36 months\nFull warranty", ru: "24 - 36 месяцев\nПолная гарантия" },
    other: { ka: "მაქსიმუმ 12 თვე\nშეზღუდული გარანტია", en: "Up to 12 months\nLimited warranty", ru: "До 12 месяцев\nОграниченная гарантия" },
  },
  {
    label: { ka: "წარმოების ხარისხი", en: "Production quality", ru: "Качество производства" },
    us: { ka: "ხელით დამზადებული\nპრემიუმ მასალები", en: "Handmade\nPremium materials", ru: "Ручная работа\nПремиальные материалы" },
    other: { ka: "ჩვეულებრივი ნეონი\nდაბალი ხარისხი", en: "Basic neon tubes\nBasic quality", ru: "Обычные трубки\nБазовое качество" },
  },
  {
    label: { ka: "რეგულირება", en: "Dimming", ru: "Регулировка" },
    us: { ka: "✓ კი\nსრულად კონტროლირებადი", en: "✓ Yes\nFully controllable", ru: "✓ Да\nПолностью регулируется" },
    other: { ka: "✕ ყოველთვის არა\nშეზღუდული ფუნქცია", en: "✕ Not always\nLimited function", ru: "✕ Не всегда\nОграничено" },
  },
  {
    label: { ka: "უსაფრთხოება", en: "Safety", ru: "Безопасность" },
    us: { ka: "✓ კი\nარ ცხელდება", en: "✓ Yes\nDoes not overheat", ru: "✓ Да\nНе нагревается" },
    other: { ka: "✕ არა\nშეიძლება გაცხელდეს", en: "✕ No\nMay heat up", ru: "✕ Нет\nМожет нагреваться" },
  },
  {
    label: { ka: "ლოკალური ბიზნესი", en: "Local business", ru: "Локальный бизнес" },
    us: { ka: "✓ კი\nჩვენ ადგილობრივები ვართ", en: "✓ Yes\nWe are local", ru: "✓ Да\nМы местные" },
    other: { ka: "✕ არა\nარ არიან ლოკალურები", en: "✕ No\nNot local", ru: "✕ Нет\nНе локальные" },
  },
];

const compactComparisonItems = [
  {
    value: "5.0",
    title: { ka: "Google შეფასება", en: "Google rating", ru: "Рейтинг Google" },
    text: { ka: "რეალური კლიენტების მაღალი შეფასება", en: "Strong feedback from real customers", ru: "Высокая оценка от реальных клиентов" },
  },
  {
    value: "50K+",
    title: { ka: "საათი მუშაობა", en: "hours of light", ru: "часов работы" },
    text: { ka: "ნეონი მზადდება გრძელვადიანი გამოყენებისთვის", en: "Built for long-term daily use", ru: "Сделано для долгой ежедневной работы" },
  },
  {
    value: "24-36",
    title: { ka: "თვე გარანტია", en: "months warranty", ru: "месяцев гарантии" },
    text: { ka: "დაცული შეკვეთა და მშვიდი შედეგი", en: "Protected order and confident result", ru: "Защищенный заказ и уверенный результат" },
  },
  {
    value: "✓",
    title: { ka: "ხელით დამზადებული", en: "Handmade", ru: "Ручная работа" },
    text: { ka: "სუფთა მონტაჟი, პრემიუმ მასალები და ლოკალური გუნდი", en: "Clean mounting, premium materials, local team", ru: "Аккуратный монтаж, премиум материалы, местная команда" },
  },
];

function ComparisonSection() {
  const { language } = useLanguage();
  const isPhone = useMediaQuery("(max-width: 760px)");

  return (
    <div
      style={{
        marginBottom: isPhone ? "34px" : "48px",
        borderRadius: isPhone ? "22px" : "28px",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top left, rgba(255,79,163,0.18), transparent 32%), radial-gradient(circle at bottom right, rgba(33,184,255,0.12), transparent 34%), linear-gradient(180deg, rgba(11,12,18,0.98), rgba(5,6,10,0.98))",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.36), 0 0 38px rgba(255,79,163,0.14)",
        padding: isPhone ? "22px" : "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: isPhone ? "start" : "end",
          justifyContent: "space-between",
          gap: "18px",
          flexWrap: "wrap",
          marginBottom: "22px",
        }}
      >
        <div>
          <div
            style={{
              color: "#ff70b7",
              fontSize: "13px",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "8px",
            }}
          >
            {localizedLabel({ ka: "რატომ ჩვენ", en: "Why us", ru: "Почему мы" }, language)}
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 4vw, 46px)",
              lineHeight: 1.08,
            }}
          >
            {localizedLabel(
              {
                ka: "მოკლედ: ხარისხი, გარანტია და ძლიერი ნათება",
                en: "In short: quality, warranty, and strong glow",
                ru: "Коротко: качество, гарантия и яркое свечение",
              },
              language,
            )}
          </h2>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isPhone ? "1fr" : "repeat(4, minmax(0, 1fr))",
          gap: "14px",
        }}
      >
        {compactComparisonItems.map((item) => (
          <article
            key={item.title.en}
            style={{
              minHeight: isPhone ? "auto" : "180px",
              padding: "20px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.055)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                color: item.value === "✓" ? "#62ff9b" : "#ff4fa3",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 950,
                lineHeight: 1,
                marginBottom: "14px",
              }}
            >
              {item.value}
            </div>
            <h3 style={{ margin: "0 0 8px", fontSize: "18px", lineHeight: 1.25 }}>
              {localizedLabel(item.title, language)}
            </h3>
            <p style={{ margin: 0, color: "rgba(235,238,255,0.74)", lineHeight: 1.55, fontSize: "14px" }}>
              {localizedLabel(item.text, language)}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const { language } = useLanguage();
  const isPhone = useMediaQuery("(max-width: 760px)");
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroCarouselIndex, setHeroCarouselIndex] = useState(1);
  const localizedMenuLinks = [
    { label: "Создать свой дизайн", to: "/custom" },
    { label: "Магазин", to: "/custom" },
    { label: "О нас", to: "/about" },
    { label: "Сервисы", to: "/quote-ka" },
    { label: "Для компаний", to: "/companies" },
  ];
  const menuLinks = [ // eslint-disable-line no-unused-vars
    { label: "Создать свой дизайн", to: "/custom" },
    { label: "Загрузить логотип", to: "/quote-ka" },
    { label: "Для компаний", to: "/companies" },
    { label: "Вопросы и ответы", to: "/faq" },
    { label: "Контакты", to: "/contact" },
  ];
  const homeActionLinks = [
    {
      icon: <DesignIcon />,
      to: "/custom",
      title: { ka: "შექმენი შენი ნეონი", en: "Create your neon", ru: "Создать свой неон" },
      text: {
        ka: "აირჩიე ტექსტი, ფერი, ზომა და ნახე შედეგი სწრაფად.",
        en: "Choose text, color, size, and preview the result quickly.",
        ru: "Выберите текст, цвет, размер и быстро посмотрите результат.",
      },
      accent: "#ff4fa3",
    },
    {
      icon: <UploadIcon />,
      to: "/quote-ka",
      title: { ka: "ატვირთე ლოგო", en: "Upload your logo", ru: "Загрузить логотип" },
      text: {
        ka: "გამოგვიგზავნე ლოგო და მივამზადებთ ნეონის ვიზუალს.",
        en: "Send your logo and we will prepare a neon visual.",
        ru: "Отправьте логотип, и мы подготовим неоновый визуал.",
      },
      accent: "#22a8ff",
    },
    {
      icon: <CompanyIcon />,
      to: "/companies",
      title: { ka: "კომპანიებისთვის", en: "For companies", ru: "Для компаний" },
      text: {
        ka: "სწრაფი შეთავაზება ბიზნესისთვის, რეკლამისთვის და სივრცეებისთვის.",
        en: "Fast proposals for businesses, advertising, and spaces.",
        ru: "Быстрое предложение для бизнеса, рекламы и пространств.",
      },
      accent: "#8d5bff",
    },
    {
      icon: <InfoIcon />,
      to: "/about",
      title: { ka: "ჩვენ შესახებ", en: "About us", ru: "О нас" },
      text: {
        ka: "გაიგე როგორ ვმუშაობთ კლასიკურ შუშის ნეონზე.",
        en: "See how we work with classic glass neon.",
        ru: "Узнайте, как мы работаем с классическим стеклянным неоном.",
      },
      accent: "#62ff9b",
    },
    {
      icon: <QuestionIcon />,
      to: "/faq",
      title: { ka: "კითხვები პასუხები", en: "Questions & answers", ru: "Вопросы и ответы" },
      text: {
        ka: "ნახე ფასი, დრო, მონტაჟი, გარანტია და შეკვეთის დეტალები.",
        en: "Check price, timing, installation, warranty, and order details.",
        ru: "Посмотрите цену, сроки, монтаж, гарантию и детали заказа.",
      },
      accent: "#ff8a3d",
    },
    {
      icon: <ContactIcon />,
      to: "/contact",
      title: { ka: "კონტაქტი", en: "Contact", ru: "Контакты" },
      text: {
        ka: "მოგვწერე იდეა, კითხვა ან შეკვეთის დეტალები.",
        en: "Send an idea, question, or order details.",
        ru: "Напишите идею, вопрос или детали заказа.",
      },
      accent: "#ffd166",
    },
  ];
  const homeStats = [
    {
      value: "5.0",
      label: { ka: "Google მიმოხილვები", en: "Google reviews", ru: "Отзывы Google" },
    },
    {
      value: "50K+",
      label: { ka: "საათი", en: "hours", ru: "часов" },
    },
    {
      value: "24-36",
      label: { ka: "თვე გარანტია", en: "months warranty", ru: "месяцев гарантии" },
    },
  ];
  const heroCarouselItems = [
    {
      image: "/gallery/1.jpg",
      fallback: homeShowcaseLeft,
      titleKey: "storefront",
    },
    {
      image: "/gallery/3.jpg",
      fallback: bgBar,
      titleKey: "white-wall",
    },
    {
      image: "/gallery/4.jpg",
      fallback: homeShowcaseLeft,
      titleKey: "brick-wall",
    },
  ];
  const heroCarouselTitles = {
    storefront: { ka: "წითელი ნეონი ვიტრინაზე", en: "Red neon on a storefront", ru: "Красный неон на витрине" },
    "green-wall": { ka: "ნეონი მწვანე კედელზე", en: "Neon on a green wall", ru: "Неон на зеленой стене" },
    "white-wall": { ka: "თეთრი ნეონი კედელზე", en: "White neon on a wall", ru: "Белый неон на стене" },
    "brick-wall": { ka: "ნეონი აგურის კედელზე", en: "Neon on a brick wall", ru: "Неон на кирпичной стене" },
  };
  const visibleHeroItems = [
    {
      ...heroCarouselItems[
        (heroCarouselIndex - 1 + heroCarouselItems.length) % heroCarouselItems.length
      ],
      position: "left",
    },
    { ...heroCarouselItems[heroCarouselIndex], position: "center" },
    {
      ...heroCarouselItems[(heroCarouselIndex + 1) % heroCarouselItems.length],
      position: "right",
    },
  ];

  function showPreviousHeroImage() {
    setHeroCarouselIndex(
      (current) => (current - 1 + heroCarouselItems.length) % heroCarouselItems.length,
    );
  }

  function showNextHeroImage() {
    setHeroCarouselIndex((current) => (current + 1) % heroCarouselItems.length);
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, [menuOpen]);

  return (
    <div style={pageStyle}>
      <div
        style={{
          padding: isPhone ? "10px 14px" : "12px 16px",
          textAlign: "center",
          background: "linear-gradient(90deg, #f12d76, #7a4dff, #00b8ff)",
          color: "#fff5ef",
          fontWeight: 800,
          fontSize: "14px",
          boxShadow: "0 14px 34px rgba(241,45,118,0.18)",
        }}
      >
        {localizedLabel(
          {
            ka: "25% ფასდაკლება ახალ შეკვეთებზე • აირჩიე ფონი ან ატვირთე ფოტო და ნახე ნეონი რეალურ სივრცეში",
            en: "25% off new orders • choose a ready background or upload a photo and see neon in a real space",
            ru: "Скидка 25% на новые заказы • выберите готовый фон или загрузите фото и посмотрите неон в реальном пространстве",
          },
          language,
        )}
      </div>

      <header
        style={{
          ...containerStyle,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          padding: isPhone ? "18px 0" : "24px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gridColumn: "2" }}>
          <NeonTbilisiLogo size={isPhone ? 124 : 158} />
        </div>

        <nav style={{ display: "none", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
          <a href="#services" style={{ color: "#fff", textDecoration: "none" }}>
            {localizedLabel({ ka: "სერვისები", en: "Services", ru: "Сервисы" }, language)}
          </a>
          <a href="#works" style={{ color: "#fff", textDecoration: "none" }}>
            {localizedLabel({ ka: "როგორ მუშაობს", en: "How it works", ru: "Как это работает" }, language)}
          </a>
          <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
            {localizedLabel({ ka: "ჩვენ შესახებ", en: "About us", ru: "О нас" }, language)}
          </Link>
          <Link
            to="/quote-ka"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.16)",
              fontWeight: 700,
            }}
          >
            {localizedLabel({ ka: "ბრიფი", en: "Brief", ru: "Бриф" }, language)}
          </Link>
          <Link
            to="/custom"
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "12px 18px",
              borderRadius: "999px",
              background: "linear-gradient(90deg, #ff2d7a, #8d5bff, #22a8ff)",
              fontWeight: 700,
            }}
          >
            {localizedLabel({ ka: "შექმენი შენი ნეონი", en: "Create your neon", ru: "Создать свой неон" }, language)}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          style={{
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.02)",
            fontWeight: 700,
            display: "inline-flex",
            gap: "10px",
            alignItems: "center",
            cursor: "pointer",
            gridColumn: "3",
            justifySelf: "end",
          }}
        >
          <span>
            {menuOpen
              ? localizedLabel({ ka: "დახურვა", en: "Close", ru: "Закрыть" }, language)
              : localizedLabel({ ka: "მენიუ", en: "Menu", ru: "Меню" }, language)}
          </span>
          <span style={{ fontSize: "18px", lineHeight: 1 }}>{menuOpen ? "×" : "≡"}</span>
        </button>
      </header>

      {menuOpen ? (
        <section
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "linear-gradient(180deg, rgba(7,7,10,0.97) 0%, rgba(10,10,14,0.995) 100%)",
            overflowY: "auto",
            padding: "92px 0 24px",
          }}
        >
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.45)",
            }}
          />
          <div
            style={{
              ...containerStyle,
              position: "relative",
              zIndex: 1,
            }}
          >
          <div
            style={{
              padding: "22px 8px 10px",
            }}
          >
            <Link
              to="/quote-ka"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                textDecoration: "none",
                textAlign: "center",
                padding: "18px 20px",
                borderRadius: "18px",
                background: "linear-gradient(90deg, #f12d76, #2148d8)",
                color: "#ffffff",
                fontWeight: 800,
                fontSize: "clamp(18px, 3vw, 24px)",
                marginBottom: "24px",
              }}
            >
              Получить расчет цены и создать дизайн
            </Link>

            <div style={{ marginBottom: "20px", fontSize: "28px", fontWeight: 800, lineHeight: 1.15 }}>
              Неоновые вывески
              <br />
              на заказ
            </div>

            <div style={{ display: "grid", gap: "16px", marginBottom: "28px" }}>
              {homeActionLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none",
                    color: "#ffffff",
                    padding: "12px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <FeatureIcon>{item.icon}</FeatureIcon>
                  <div>
                    <div style={{ fontSize: "22px", fontWeight: 800 }}>
                      {localizedLabel(item.title, language)}
                    </div>
                    <div style={{ marginTop: "4px", color: "#cfd3e6", fontSize: "14px", lineHeight: 1.35 }}>
                      {localizedLabel(item.text, language)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ display: "none", gap: "8px" }}>
              {localizedMenuLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  <span>{item.label}</span>
                  <span style={{ color: "#ff4fa3", fontSize: "26px" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
          </div>
        </section>
      ) : null}

      <section style={{ ...containerStyle, padding: isPhone ? "10px 0 34px" : "24px 0 56px" }}>
        <div
          style={{
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: isPhone ? "1fr" : "minmax(0, 0.95fr) minmax(360px, 1.05fr)",
            alignItems: "stretch",
            minHeight: isPhone ? "auto" : "680px",
            borderRadius: isPhone ? "26px" : "34px",
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "radial-gradient(circle at 18% 20%, rgba(255,79,163,0.26), transparent 30%), radial-gradient(circle at 88% 18%, rgba(0,184,255,0.18), transparent 28%), linear-gradient(135deg, rgba(18,18,27,0.98), rgba(7,7,12,0.98) 58%, rgba(20,6,16,0.98))",
            boxShadow: "0 34px 90px rgba(0,0,0,0.42)",
          }}
        >
          <div
            style={{
              padding: isPhone ? "28px 20px 10px" : "clamp(42px, 6vw, 76px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "fit-content",
                marginBottom: "18px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.13)",
                color: "#ffb7d7",
                fontWeight: 900,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Neon Tbilisi
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 7.2vw, 86px)",
                lineHeight: 0.98,
                margin: "0 0 22px",
                maxWidth: "760px",
                letterSpacing: 0,
              }}
            >
              Твое пространство,
              <br />
              твой стиль,
              <br />
              твой неон
            </h1>
            <p
              style={{
                maxWidth: "720px",
                color: "rgba(240,243,255,0.84)",
                fontSize: "clamp(16px, 1.7vw, 20px)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Изготавливаем индивидуальные неоновые вывески для бизнеса, дома и мероприятий.
              Выберите дизайн или создайте его с помощью искусственного интеллекта, а мы
              изготовим все аккуратно и качественно.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "30px" }}>
              <Link
                to="/quote-ka"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px 22px",
                  borderRadius: "16px",
                  background: "linear-gradient(90deg, #f12d76, #7b55ff, #21b9ff)",
                  fontWeight: 900,
                  width: isPhone ? "100%" : "auto",
                  textAlign: "center",
                  boxShadow: "0 18px 34px rgba(33,72,216,0.28)",
                }}
              >
                {localizedLabel(
                  { ka: "შექმენი დიზაინი AI-ით", en: "Create a design with AI", ru: "Создать дизайн с AI" },
                  language,
                )}
              </Link>
              <Link
                to="/custom"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px 22px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.06)",
                  fontWeight: 800,
                  width: isPhone ? "100%" : "auto",
                  textAlign: "center",
                }}
              >
                {localizedLabel(
                  { ka: "შექმენი დიზაინი შენით", en: "Create it yourself", ru: "Создать дизайн самому" },
                  language,
                )}
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isPhone ? "1fr" : "repeat(2, minmax(0, 1fr))",
                gap: "12px",
                marginTop: "22px",
                maxWidth: "720px",
              }}
            >
              {homeActionLinks.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "12px",
                    alignItems: "center",
                    minHeight: "92px",
                    padding: "14px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    color: "#ffffff",
                    background:
                      index === 0
                        ? "linear-gradient(135deg, rgba(255,79,163,0.22), rgba(34,168,255,0.12))"
                        : "rgba(255,255,255,0.055)",
                    border: `1px solid ${index === 0 ? "rgba(255,79,163,0.32)" : "rgba(255,255,255,0.10)"}`,
                    boxShadow: index === 0 ? "0 18px 38px rgba(255,79,163,0.18)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      display: "grid",
                      placeItems: "center",
                      color: item.accent,
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: "17px", lineHeight: 1.2 }}>
                      {localizedLabel(item.title, language)}
                    </div>
                    <div style={{ color: "#cfd3e6", fontSize: "13px", lineHeight: 1.4, marginTop: "5px" }}>
                      {localizedLabel(item.text, language)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isPhone ? "1fr" : "repeat(3, minmax(0, 1fr))",
                gap: "12px",
                marginTop: "34px",
                maxWidth: "640px",
              }}
            >
              {homeStats.map((stat) => (
                <div
                  key={stat.value}
                  style={{
                    padding: "16px",
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div style={{ fontSize: "26px", fontWeight: 900, color: "#ffffff" }}>{stat.value}</div>
                  <div style={{ color: "#cfd3e6", fontSize: "13px", fontWeight: 800 }}>
                    {localizedLabel(stat.label, language)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: isPhone ? "10px 10px 24px" : "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              className="hero-photo-carousel"
              aria-label={localizedLabel(
                { ka: "ნეონის ნამუშევრების გალერეა", en: "Neon work gallery", ru: "Галерея неоновых работ" },
                language,
              )}
            >
              {visibleHeroItems.map((item) => {
                const isCenter = item.position === "center";

                return (
                  <div
                    key={`${item.titleKey}-${item.position}`}
                    className={`hero-photo-card hero-photo-card-${item.position}`}
                  >
                    <img
                      src={item.image}
                      alt={localizedLabel(heroCarouselTitles[item.titleKey], language)}
                      onError={(event) => {
                        if (item.fallback) {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = item.fallback;
                        }
                      }}
                    />
                  </div>
                );
              })}

              <button
                type="button"
                aria-label={localizedLabel({ ka: "წინა ფოტო", en: "Previous photo", ru: "Предыдущее фото" }, language)}
                onClick={showPreviousHeroImage}
                className="hero-photo-arrow hero-photo-arrow-left"
              >
                ←
              </button>
              <button
                type="button"
                aria-label={localizedLabel({ ka: "შემდეგი ფოტო", en: "Next photo", ru: "Следующее фото" }, language)}
                onClick={showNextHeroImage}
                className="hero-photo-arrow hero-photo-arrow-right"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...containerStyle, padding: isPhone ? "0 0 42px" : "0 0 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isPhone ? "1fr" : "0.78fr 1.22fr",
            gap: isPhone ? "18px" : "28px",
            alignItems: "stretch",
            borderRadius: isPhone ? "24px" : "32px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025)), #07070b",
            boxShadow: "0 22px 70px rgba(255, 45, 122, 0.12)",
          }}
        >
          <div
            style={{
              padding: isPhone ? "24px 20px 0" : "44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                color: "#ff70b7",
                fontSize: "13px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              {localizedLabel({ ka: "პორტფოლიო", en: "Portfolio", ru: "Портфолио" }, language)}
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4.5vw, 56px)",
                lineHeight: 1.06,
                maxWidth: "520px",
              }}
            >
              {localizedLabel(
                {
                  ka: "რეალური ნამუშევრები კაფეებისთვის, მაღაზიებისთვის და ინტერიერებისთვის",
                  en: "Real work for cafes, shops, and interiors",
                  ru: "Реальные работы для кафе, магазинов и интерьеров",
                },
                language,
              )}
            </h2>
            <p
              style={{
                margin: "18px 0 0",
                color: "rgba(234,237,249,0.78)",
                fontSize: "17px",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              {localizedLabel(
                {
                  ka: "ვაჩვენებთ ნეონს ისე, როგორც ის რეალურ სივრცეში ჩანს: სინათლე, ფერი, მონტაჟი და საერთო ეფექტი ბრენდისთვის.",
                  en: "We show neon the way it looks in a real space: light, color, mounting, and the full brand effect.",
                  ru: "Показываем неон так, как он выглядит в пространстве: свет, цвет, монтаж и общий эффект для бренда.",
                },
                language,
              )}
            </p>
          </div>
          <div
            style={{
              minHeight: isPhone ? "520px" : "620px",
              backgroundImage: `linear-gradient(180deg, transparent 64%, rgba(5,5,8,0.72)), url(${underSectionPhoto})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              borderRadius: isPhone ? "22px 22px 0 0" : "28px 0 0 28px",
              margin: isPhone ? "0 12px 12px" : "18px 18px 18px 0",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          />
        </div>
      </section>

      <section id="services" style={{ ...containerStyle, paddingBottom: isPhone ? "56px" : "88px" }}>
        <div
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255, 62, 131, 0.15), transparent 30%), radial-gradient(circle at bottom right, rgba(29, 167, 255, 0.12), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
            color: "#ffffff",
            borderRadius: isPhone ? "24px" : "32px",
            padding: isPhone ? "24px 16px 28px" : "42px 34px 42px",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "clamp(30px, 4.8vw, 54px)",
                fontWeight: 800,
                letterSpacing: 0,
                color: "#ffffff",
              }}
            >
              Быстро, просто и доступно
            </h2>
            <p
              style={{
                margin: "0 auto 30px",
                maxWidth: "980px",
                fontSize: "clamp(17px, 2vw, 23px)",
                lineHeight: 1.55,
                fontWeight: 600,
                color: "rgba(238,240,247,0.82)",
              }}
            >
              Компания Neon Tbilisi предлагает одно из самых доступных решений
              для изготовления индивидуальных LED-неоновых вывесок.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isPhone ? "1fr" : "repeat(3, minmax(0, 1fr))",
              gap: isPhone ? "18px" : "22px",
            }}
          >
            <Link
              to="/custom"
              style={{ textDecoration: "none", color: "inherit", display: "grid", gap: "14px" }}
            >
              <div
                style={{
                  minHeight: isPhone ? "300px" : "430px",
                  borderRadius: "22px",
                  overflow: "hidden",
                  background: "#000000",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: `url(${onlineDesignPhoto}) center/contain no-repeat`,
                  }}
                />
              </div>
              <div
                style={{
                  margin: "0 26px",
                  marginTop: "-46px",
                  borderRadius: "18px",
                  padding: "18px 20px",
                  textAlign: "center",
                  background: "linear-gradient(90deg, #f12d76, #2148d8)",
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "0.01em",
                  boxShadow: "0 16px 30px rgba(33,72,216,0.22)",
                }}
              >
                Онлайн-дизайн
              </div>
            </Link>

            <Link
              to="/quote-ka"
              style={{ textDecoration: "none", color: "inherit", display: "grid", gap: "14px" }}
            >
              <div
                style={{
                  minHeight: isPhone ? "300px" : "430px",
                  borderRadius: "22px",
                  overflow: "hidden",
                  background: "#1e1e1e",
                  backgroundImage: "url(/gallery/5.jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              <div
                style={{
                  margin: "0 26px",
                  marginTop: "-46px",
                  borderRadius: "18px",
                  padding: "18px 20px",
                  textAlign: "center",
                  background: "linear-gradient(90deg, #f12d76, #2148d8)",
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "0.01em",
                  boxShadow: "0 16px 30px rgba(33,72,216,0.22)",
                }}
              >
                Загрузить логотип
              </div>
            </Link>

            <Link
              to="/faq"
              style={{ textDecoration: "none", color: "inherit", display: "grid", gap: "14px" }}
            >
              <div
                style={{
                  minHeight: isPhone ? "300px" : "430px",
                  borderRadius: "22px",
                  overflow: "hidden",
                  background: "#ffffff",
                  backgroundImage: "url(/gallery/8.jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
                aria-label="Questions"
              />
              <div
                style={{
                  margin: "0 26px",
                  marginTop: "-46px",
                  borderRadius: "18px",
                  padding: "18px 20px",
                  textAlign: "center",
                  background: "linear-gradient(90deg, #f12d76, #2148d8)",
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "0.01em",
                  boxShadow: "0 16px 30px rgba(33,72,216,0.22)",
                }}
              >
                Вопросы и ответы
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section style={{ ...containerStyle, paddingBottom: "120px" }}>
        <ComparisonSection />

        <div
          style={{
            marginBottom: "48px",
            background:
              "radial-gradient(circle at top left, rgba(255,79,163,0.18), transparent 28%), radial-gradient(circle at top right, rgba(42,91,255,0.16), transparent 30%), linear-gradient(180deg, rgba(18,18,26,0.98), rgba(9,9,14,0.98))",
            color: "#ffffff",
            borderRadius: "28px",
            padding: "clamp(22px, 4vw, 36px)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: "18px",
              flexWrap: "wrap",
              marginBottom: "24px",
            }}
          >
            <div>
              <div
                style={{
                  color: "#e72878",
                  fontWeight: 900,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                }}
              >
                  Отзывы
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(32px, 5vw, 54px)",
                  lineHeight: 1,
                  color: "#ffffff",
                }}
              >
                Neon Tbilisi
              </h2>
            </div>

            <div style={{ display: "grid", gap: "4px", justifyItems: "end" }}>
              <div
                aria-label="Оценка 5 звезд"
                style={{
                  color: "#f7b500",
                  fontSize: "24px",
                  letterSpacing: "1px",
                  lineHeight: 1,
                }}
              >
                ★★★★★
              </div>
              <div style={{ color: "#d7d9e7", fontSize: "14px", fontWeight: 700 }}>
                Отзывы клиентов
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {customerReviews.map((review) => {
              const reviewName = localizedLabel(review.name, language);

              return (
              <article
                key={reviewName}
                style={{
                  minHeight: "190px",
                  padding: "20px",
                  borderRadius: "18px",
                  background: "#ffffff",
                  border: "1px solid rgba(17,17,17,0.08)",
                  boxShadow: "0 12px 28px rgba(12,12,18,0.08)",
                  display: "grid",
                  gridTemplateRows: "auto auto 1fr",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      background: "linear-gradient(135deg, #e72878, #2548d8)",
                      color: "#ffffff",
                      fontWeight: 900,
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {reviewName.charAt(0)}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "17px",
                        lineHeight: 1.2,
                        color: "#15151a",
                      }}
                    >
                      {reviewName}
                    </h3>
                    <div style={{ color: "#7c7d86", fontSize: "13px" }}>Neon Tbilisi</div>
                  </div>
                </div>

                <div style={{ color: "#f7b500", fontSize: "18px", lineHeight: 1 }}>★★★★★</div>
                <p
                  style={{
                    margin: 0,
                    color: "#33343c",
                    fontSize: "15px",
                    lineHeight: 1.65,
                  }}
                >
                  {review.text}
                </p>
              </article>
              );
            })}
          </div>
        </div>

        <div
          style={{
            ...cardStyle,
            padding: "clamp(22px, 4vw, 40px)",
            background:
              "radial-gradient(circle at 10% 0%, rgba(241,45,118,0.26), transparent 34%), radial-gradient(circle at 90% 0%, rgba(33,72,216,0.3), transparent 36%), rgba(8,8,14,0.84)",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "clamp(26px, 3.6vw, 44px)",
              lineHeight: 1.18,
              fontWeight: 900,
              color: "#ffffff",
            }}
          >
            Производство индивидуальных LED-неоновых вывесок
          </h3>
          <p
            style={{
              margin: "18px 0 0",
              color: "rgba(235,238,255,0.9)",
              fontSize: "clamp(16px, 1.9vw, 20px)",
              lineHeight: 1.7,
              maxWidth: "1020px",
            }}
          >
            Более 10 лет опыта помогли Neon Tbilisi стать надежным производителем
            неоновых вывесок. Выбирайте долговечные, атмосферные и энергоэффективные
            вывески, которые наша команда делает вручную. Мы предлагаем качественный
            результат, точный дизайн и доступную цену. Персонализировать вывеску просто:
            запросите цену, создайте собственный дизайн или свяжитесь с нами для уточнения идеи.
          </p>

          <div style={{ marginTop: "28px", display: "flex", justifyContent: "center" }}>
            <Link
              to="/quote-ka"
              style={{
                textDecoration: "none",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "18px",
                padding: "14px 28px",
                borderRadius: "999px",
                letterSpacing: "0.02em",
                background: "linear-gradient(90deg, #f12d76, #2148d8)",
                boxShadow: "0 18px 34px rgba(33,72,216,0.34)",
              }}
            >
              Создать дизайн с AI
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}

function Custom() {
  const { language } = useLanguage();
  const isPhone = useMediaQuery("(max-width: 760px)");
  const [text, setText] = useState("neontbilisi");
  const [selectedFont, setSelectedFont] = useState("austin");
  const [textAlign, setTextAlign] = useState("center");
  const [color, setColor] = useState("#ff66b3");
  const [size, setSize] = useState(64);
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);
  const [logoScale, setLogoScale] = useState(34);
  const [glow, setGlow] = useState(85);
  const [tube, setTube] = useState(105);
  const [selectedPreset, setSelectedPreset] = useState("concrete");
  const [backgroundBrightness, setBackgroundBrightness] = useState(90);
  const [backgroundBlur, setBackgroundBlur] = useState(0);
  const [backgroundDim, setBackgroundDim] = useState(34);
  const [mountStyle, setMountStyle] = useState("acrylic");
  const [isDragging, setIsDragging] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  const presetBackground =
    backgroundPresets.find((preset) => preset.id === selectedPreset)?.image ??
    backgroundPresets[0].image;
  const activeBackground = photoUrl || presetBackground;
  const activeFont = fontPresets.find((font) => font.id === selectedFont) ?? fontPresets[0];
  const neonShadow = `0 0 ${Math.round(glow * 0.12)}px ${color},
    0 0 ${Math.round(glow * 0.28)}px ${color},
    0 0 ${Math.round(glow * 0.52)}px ${color},
    0 0 ${Math.round(glow * 0.85)}px ${color},
    0 0 ${Math.round(glow * 1.2)}px rgba(129, 143, 255, 0.58)`;

  const plateStyle =
    mountStyle === "acrylic"
      ? {
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow: "0 24px 50px rgba(0,0,0,0.28)",
          backdropFilter: "blur(4px)",
        }
      : mountStyle === "box"
        ? {
            background: "rgba(8,8,12,0.76)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 28px 70px rgba(0,0,0,0.42)",
          }
        : {
            background: "transparent",
            border: "none",
            boxShadow: "none",
          };

  useEffect(() => {
    return () => {
      if (photoUrl) {
        URL.revokeObjectURL(photoUrl);
      }
      if (logoUrl) {
        URL.revokeObjectURL(logoUrl);
      }
    };
  }, [logoUrl, photoUrl]);

  function updateFile(event, currentUrl, setter) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
    }
    setter(URL.createObjectURL(file));
  }

  function updatePositionFromPointer(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = ((event.clientX - rect.left) / rect.width) * 100;
    const nextY = ((event.clientY - rect.top) / rect.height) * 100;
    setX(Math.max(10, Math.min(90, Math.round(nextX))));
    setY(Math.max(10, Math.min(90, Math.round(nextY))));
  }

  return (
    <div style={pageStyle}>
      <div style={{ ...containerStyle, padding: "28px 0 64px" }}>
        <Link to="/" style={{ color: "#9fd1ff", textDecoration: "none" }}>
          Вернуться на главную
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isPhone ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
            gap: isPhone ? "14px" : "20px",
            marginTop: isPhone ? "14px" : "18px",
            alignItems: "start",
          }}
        >
          <section style={{ ...cardStyle, padding: isPhone ? "10px" : "18px", order: 1 }}>
            <div
              style={{
                minHeight: isPhone ? "min(56vh, 520px)" : "min(68vh, 760px)",
                borderRadius: isPhone ? "18px" : "24px",
                overflow: "hidden",
                position: "relative",
                background: "#0b0b0f",
                border: "1px solid rgba(255,255,255,0.08)",
                touchAction: "none",
                cursor: isDragging ? "grabbing" : "grab",
              }}
              onPointerDown={(event) => {
                setIsDragging(true);
                updatePositionFromPointer(event);
                event.currentTarget.setPointerCapture?.(event.pointerId);
              }}
              onPointerMove={(event) => {
                if (!isDragging) {
                  return;
                }
                updatePositionFromPointer(event);
              }}
              onPointerUp={() => setIsDragging(false)}
              onPointerCancel={() => setIsDragging(false)}
              onPointerLeave={() => setIsDragging(false)}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `url(${activeBackground}) center/cover`,
                  filter: `brightness(${backgroundBrightness}%) blur(${backgroundBlur}px)`,
                  transform: backgroundBlur > 0 ? "scale(1.03)" : "scale(1)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(rgba(7,8,12,${backgroundDim / 100}), rgba(7,8,12,${(backgroundDim + 12) / 100}))`,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.03), transparent 45%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  width: "min(78%, 760px)",
                  minHeight: `${Math.max(140, size * 2.3)}px`,
                  borderRadius: mountStyle === "none" ? "0" : "28px",
                  padding: mountStyle === "none" ? "0" : "34px 42px",
                  ...plateStyle,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  width: "min(74%, 720px)",
                  height: `${Math.max(80, size * 1.8)}px`,
                  borderRadius: "999px",
                  background: `radial-gradient(circle, ${color}55 0%, ${color}18 38%, transparent 72%)`,
                  filter: `blur(${Math.max(24, glow * 0.45)}px)`,
                  opacity: 0.8,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `calc(${y}% + 6%)`,
                  transform: "translate(-50%, -50%)",
                  width: "min(74%, 760px)",
                  height: `${Math.max(90, size * 1.9)}px`,
                  borderRadius: "999px",
                  background: `radial-gradient(circle, ${color}33 0%, ${color}10 45%, transparent 78%)`,
                  filter: `blur(${Math.max(40, glow * 0.62)}px)`,
                  opacity: 0.65,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  fontSize: isPhone ? `clamp(28px, ${size * 0.8}px, 78px)` : `${size}px`,
                  textAlign,
                  lineHeight: 1.1,
                  whiteSpace: "pre-wrap",
                  maxWidth: isPhone ? "90%" : "84%",
                  filter: "saturate(1.15) brightness(1.12)",
                  fontWeight: activeFont.fontWeight,
                  letterSpacing: activeFont.letterSpacing,
                  fontFamily: activeFont.fontFamily,
                }}
              >
                <span
                  translate="no"
                  lang="und"
                  style={{
                    position: "relative",
                    color,
                    textShadow: neonShadow,
                    WebkitTextStroke: `${Math.max(1, tube / 100)}px rgba(255,255,255,0.55)`,
                  }}
                >
                  {text}
                </span>
                <span
                  translate="no"
                  lang="und"
                  style={{
                    position: "absolute",
                    inset: 0,
                    color: "rgba(255,255,255,0.95)",
                    mixBlendMode: "screen",
                    textShadow: `0 0 ${Math.max(4, glow * 0.08)}px rgba(255,255,255,0.95)`,
                    pointerEvents: "none",
                  }}
                >
                  {text}
                </span>
              </div>

              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="Загруженный логотип"
                  style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `calc(${y}% + 18%)`,
                    transform: "translate(-50%, -50%)",
                    width: `${logoScale}%`,
                    maxWidth: "360px",
                    objectFit: "contain",
                    filter: `brightness(1.1) saturate(1.2) drop-shadow(0 0 8px ${color}) drop-shadow(0 0 18px ${color}) drop-shadow(0 0 34px ${color}) drop-shadow(0 0 ${Math.round(glow * 0.72)}px ${color})`,
                  }}
                />
              ) : null}

              <div
                style={{
                  position: "absolute",
                  left: isPhone ? "10px" : "16px",
                  right: isPhone ? "10px" : "16px",
                  bottom: isPhone ? "10px" : "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  flexWrap: "wrap",
                  padding: isPhone ? "10px 12px" : "14px 16px",
                  borderRadius: isPhone ? "12px" : "16px",
                  background: "rgba(5,5,8,0.58)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#dfe0e8",
                  fontSize: isPhone ? "12px" : "13px",
                }}
              >
                <span>Фон: {backgroundPresets.find((p) => p.id === selectedPreset)?.label}</span>
                <span>Хорошо выглядит и на телефоне</span>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  padding: "10px 12px",
                  borderRadius: "14px",
                  background: "rgba(5,5,8,0.56)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#eef0f6",
                  fontSize: "12px",
                }}
              >
                Перетащите неон пальцем
              </div>
            </div>
          </section>

          <aside style={{ ...cardStyle, padding: isPhone ? "16px" : "22px", order: 2 }}>
            <h1 style={{ fontSize: isPhone ? "28px" : "34px", marginTop: 0 }}>Создать свой неон</h1>
            <p style={{ color: "#d5d5df", lineHeight: 1.7 }}>
              Выберите фон, загрузите фото или логотип и настройте неон в реальном пространстве.
            </p>

            <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
              <BackgroundPicker
                selectedPreset={selectedPreset}
                onSelect={setSelectedPreset}
              />

              <SelectedOptions
                selectedPreset={selectedPreset}
                mountStyle={mountStyle}
                color={color}
                selectedFont={selectedFont}
                textAlign={textAlign}
              />

              <label style={labelStyle}>
                <span>Тип монтажа</span>
                <select
                  value={mountStyle}
                  onChange={(e) => setMountStyle(e.target.value)}
                  style={selectStyle}
                >
                  {mountingStyles.map((style) => (
                    <option
                      key={style.id}
                      value={style.id}
                      style={{ background: "#101118", color: "#f5f7ff" }}
                    >
                      {localizedLabel(style.label, language)}
                    </option>
                  ))}
                </select>
              </label>

              <label style={labelStyle}>
                <span>Текст неона</span>
                <input
                  translate="no"
                  lang="und"
                  autoComplete="off"
                  spellCheck="false"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  style={inputStyle}
                  placeholder="Например: My Brand"
                />
              </label>

              <label style={labelStyle}>
                <span>Шрифт</span>
                <select
                  translate="no"
                  lang="en"
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  style={{
                    ...selectStyle,
                    background:
                      "linear-gradient(135deg, rgba(255,79,163,0.18), rgba(93,214,255,0.16), rgba(141,91,255,0.18)), linear-gradient(180deg, rgba(18,18,26,0.96) 0%, rgba(10,10,14,0.96) 100%)",
                  }}
                >
                  {fontPresets.map((font) => (
                    <option
                      key={font.id}
                      value={font.id}
                      translate="no"
                      lang="en"
                      style={{ background: "#101118", color: "#f5f7ff" }}
                    >
                      {font.label}
                    </option>
                  ))}
                </select>
              </label>

              <div style={labelStyle}>
                <span>Выравнивание текста</span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isPhone ? "1fr" : "repeat(3, minmax(0, 1fr))",
                    gap: "10px",
                  }}
                >
                  {[
                    { value: "left", label: "Слева" },
                    { value: "center", label: "По центру" },
                    { value: "right", label: "Справа" },
                  ].map((option) => {
                    const active = textAlign === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setTextAlign(option.value)}
                        style={{
                          minHeight: "50px",
                          borderRadius: "14px",
                          border: active
                            ? "1px solid rgba(255,255,255,0.38)"
                            : "1px solid rgba(255,255,255,0.12)",
                          background: active
                            ? "linear-gradient(135deg, rgba(255,79,163,0.28), rgba(93,214,255,0.18), rgba(141,91,255,0.28))"
                            : "rgba(255,255,255,0.05)",
                          color: "#ffffff",
                          fontSize: "14px",
                          fontWeight: active ? 700 : 500,
                          cursor: "pointer",
                          boxShadow: active ? `0 0 18px ${color}33` : "none",
                          transition: "0.2s ease",
                        }}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <label style={labelStyle}>
                <span>Цвет неона</span>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{ ...inputStyle, height: "52px", padding: "8px" }}
                />
              </label>

              <div style={{ display: "grid", gap: "10px" }}>
                <span style={{ fontSize: "14px", color: "#d3d3de" }}>Быстрые цвета</span>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {neonPalettes.map((palette) => (
                    <button
                      key={palette.name}
                      type="button"
                      onClick={() => setColor(palette.color)}
                      title={palette.name}
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "999px",
                        border:
                          color === palette.color
                            ? "2px solid #ffffff"
                            : "1px solid rgba(255,255,255,0.18)",
                        background: palette.color,
                        cursor: "pointer",
                        boxShadow: `0 0 14px ${palette.color}`,
                      }}
                    />
                  ))}
                </div>
              </div>

              <UploadField
                label="Фото фона"
                onChange={(event) => updateFile(event, photoUrl, setPhotoUrl)}
                helper="Загрузите свою стену, витрину или интерьер"
              />

              <UploadField
                label="Логотип или изображение"
                onChange={(event) => updateFile(event, logoUrl, setLogoUrl)}
                helper="Вместе с текстом или вместо него"
              />

              <RangeField label="Размер текста" min={isPhone ? 24 : 32} max={isPhone ? 96 : 120} value={size} onChange={setSize} />
              <RangeField label="Горизонтальная позиция" min={10} max={90} value={x} onChange={setX} />
              <RangeField label="Вертикальная позиция" min={10} max={90} value={y} onChange={setY} />
              <RangeField label="Размер логотипа" min={12} max={70} value={logoScale} onChange={setLogoScale} />
              <RangeField label="Сила свечения" min={30} max={140} value={glow} onChange={setGlow} />
              <RangeField label="Толщина трубки" min={80} max={125} value={tube} onChange={setTube} />
              <RangeField
                label="Яркость фона"
                min={55}
                max={120}
                value={backgroundBrightness}
                onChange={setBackgroundBrightness}
              />
              <RangeField
                label="Размытие фона"
                min={0}
                max={8}
                value={backgroundBlur}
                onChange={setBackgroundBlur}
              />
              <RangeField
                label="Затемнение фона"
                min={10}
                max={60}
                value={backgroundDim}
                onChange={setBackgroundDim}
              />
            </div>

            <div
              style={{
                marginTop: "22px",
                padding: "16px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#bfc0cb",
                lineHeight: 1.7,
                fontSize: "14px",
              }}
            >
              Неон выглядит реалистично: сильное свечение, белое внутреннее ядро,
              рассеивание света на стене и монтажная панель.
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

function GeorgianQuotePage() {
  const [mode, setMode] = useState("logo");
  const [brandText, setBrandText] = useState("neontbilisi");
  const [email, setEmail] = useState("");
  const [designUrl, setDesignUrl] = useState("");
  const [spaceUrl, setSpaceUrl] = useState("");
  const [color, setColor] = useState("#6cf7ff");
  const [selectedFont, setSelectedFont] = useState("austin");
  const [selectedPreset, setSelectedPreset] = useState("dark-cafe");

  const activeFont = fontPresets.find((font) => font.id === selectedFont) ?? fontPresets[0];
  const previewBackground =
    spaceUrl ||
    backgroundPresets.find((preset) => preset.id === selectedPreset)?.image ||
    backgroundPresets[0].image;

  useEffect(() => {
    return () => {
      if (designUrl) {
        URL.revokeObjectURL(designUrl);
      }
      if (spaceUrl) {
        URL.revokeObjectURL(spaceUrl);
      }
    };
  }, [designUrl, spaceUrl]);

  function updateFile(event, currentUrl, setter) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    if (currentUrl) {
      URL.revokeObjectURL(currentUrl);
    }
    setter(URL.createObjectURL(file));
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(255,70,148,0.16), transparent 24%), radial-gradient(circle at top right, rgba(70,117,255,0.18), transparent 28%), #0d1031",
        color: "#ffffff",
      }}
    >
      <div style={{ ...containerStyle, padding: "28px 0 72px" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <div style={{ display: "grid", gap: "6px" }}>
            <Link to="/" style={{ color: "#9fd1ff", textDecoration: "none", fontSize: "14px" }}>
              მთავარ გვერდზე დაბრუნება
            </Link>
            <div style={{ fontSize: "30px", fontWeight: 900, letterSpacing: "1px" }}>
              ნეონ თბილისი
            </div>
          </div>

          <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              to="/custom"
              style={{
                textDecoration: "none",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.14)",
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
              }}
            >
              შეთავაზების მიღება
            </Link>
          </nav>
        </header>

        <p style={{ margin: "0 0 18px", color: "#edf0ff", fontSize: "24px", fontWeight: 700 }}>
          მიიღე ფასი და ვიზუალური დიზაინი ნეონის აბრისთვის
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(320px, 1.2fr) minmax(280px, 0.8fr)",
            gap: "22px",
            alignItems: "start",
          }}
        >
          <section
            style={{
              background: "#ffffff",
              color: "#101010",
              borderRadius: "28px",
              padding: "22px",
              boxShadow: "0 18px 50px rgba(0,0,0,0.24)",
            }}
          >
            <div style={{ display: "flex", gap: "24px", marginBottom: "22px", flexWrap: "wrap" }}>
              <span style={{ color: "#e31c79", fontWeight: 700 }}>1. შენი არჩევანი</span>
              <span style={{ color: "#a7a7b3", fontWeight: 700 }}>2. საკონტაქტო ინფორმაცია</span>
            </div>

            <h1 style={{ fontSize: "38px", lineHeight: 1.05, margin: "0 0 16px" }}>
              მიიღე შეთავაზება
              <br />
              1 წუთში
            </h1>

            <div style={{ display: "grid", gap: "12px", marginBottom: "18px" }}>
              <span style={{ fontSize: "16px", fontWeight: 700 }}>
                ნეონით გასანათებელი დიზაინი
              </span>
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
                      onClick={() => setMode(item.id)}
                      style={{
                        minWidth: "138px",
                        padding: "14px 18px",
                        borderRadius: "14px",
                        border: active ? "none" : "1px solid #1a1a1a",
                        background: active
                          ? "linear-gradient(90deg, #e83c8d, #9b33ff)"
                          : "#111111",
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
                  <label style={{ ...labelStyle, color: "#363847" }}>
                    <span>ჩაწერე ტექსტი</span>
                    <input
                      value={brandText}
                      onChange={(e) => setBrandText(e.target.value)}
                      style={{
                        ...inputStyle,
                        background: "#f7f7fb",
                        color: "#111111",
                        border: "1px solid rgba(17,17,17,0.12)",
                      }}
                      placeholder="მაგ: სილამაზის ოთახი"
                    />
                  </label>

                  <label style={{ ...labelStyle, color: "#363847" }}>
                    <span>ფონტი</span>
                    <select
                      translate="no"
                      lang="en"
                      value={selectedFont}
                      onChange={(e) => setSelectedFont(e.target.value)}
                      style={{
                        ...selectStyle,
                        color: "#111111",
                        background: "#f7f7fb",
                        border: "1px solid rgba(17,17,17,0.12)",
                      }}
                    >
                      {fontPresets.map((font) => (
                        <option key={font.id} value={font.id} translate="no" lang="en">
                          {font.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </>
              ) : (
                <UploadField
                  label="ატვირთე ლოგო"
                  onChange={(event) => updateFile(event, designUrl, setDesignUrl)}
                  helper="სურათი JPG/PNG ფორმატში. გამჭვირვალე ლოგო საუკეთესო შედეგისთვის"
                />
              )}

              <UploadField
                label="ატვირთე ადგილის ფოტო"
                onChange={(event) => updateFile(event, spaceUrl, setSpaceUrl)}
                helper="ხელოვნური ინტელექტის ვიზუალისთვის ატვირთე კედლის, ინტერიერის ან ვიტრინის ფოტო"
              />

              <label style={{ ...labelStyle, color: "#363847" }}>
                <span>აირჩიე ნიმუშის ფონი</span>
                <select
                  value={selectedPreset}
                  onChange={(e) => setSelectedPreset(e.target.value)}
                  style={{
                    ...selectStyle,
                    color: "#111111",
                    background: "#f7f7fb",
                    border: "1px solid rgba(17,17,17,0.12)",
                  }}
                >
                  {backgroundPresets.map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.label}
                    </option>
                  ))}
                </select>
              </label>

              <label style={{ ...labelStyle, color: "#363847" }}>
                <span>ნეონის ფერი</span>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{
                    ...inputStyle,
                    height: "52px",
                    padding: "8px",
                    background: "#f7f7fb",
                    border: "1px solid rgba(17,17,17,0.12)",
                  }}
                />
              </label>
            </div>

            <div
              style={{
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
                marginTop: "18px",
                color: "#2d2f3f",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              <span>✓ უფასო 3D დიზაინი</span>
              <span>✓ სწრაფი შეთავაზება</span>
              <span>✓ რეალისტური ვიზუალი</span>
            </div>

            <button
              type="button"
              style={{
                marginTop: "22px",
                width: "min(100%, 420px)",
                border: "none",
                borderRadius: "18px",
                padding: "20px 26px",
                background: "linear-gradient(90deg, #ff2d7a, #3434d9)",
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: 800,
                cursor: "pointer",
                boxShadow: "0 14px 35px rgba(82, 58, 255, 0.28)",
              }}
            >
              ხელოვნური ინტელექტის ვიზუალის შექმნა
            </button>
          </section>

          <aside style={{ display: "grid", gap: "18px" }}>
            <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "4px" }}>
              {[
                "ლოგო",
                "ფონი",
                "ვიზუალი",
              ].map((item, index) => (
                <div
                  key={item}
                  style={{
                    minWidth: "112px",
                    height: "92px",
                    borderRadius: "18px",
                    padding: "10px",
                    background:
                      index === 2
                        ? "linear-gradient(135deg, rgba(255,67,165,0.32), rgba(109,79,255,0.26))"
                        : "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                position: "relative",
                minHeight: "520px",
                borderRadius: "28px",
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
                  background: `linear-gradient(rgba(5,6,12,0.12), rgba(5,6,12,0.3)), url(${previewBackground}) center/cover`,
                  filter: "brightness(0.82)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 42%)",
                }}
              />

              {mode === "logo" && designUrl ? (
                <img
                  src={designUrl}
                  alt="ატვირთული დიზაინი"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "34%",
                    transform: "translate(-50%, -50%)",
                    width: "62%",
                    objectFit: "contain",
                    filter: `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 20px ${color}) drop-shadow(0 0 42px ${color})`,
                  }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "32%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: "78%",
                    textAlign: "center",
                    color,
                    fontSize: "clamp(42px, 8vw, 86px)",
                    lineHeight: 1.05,
                    fontFamily: activeFont.fontFamily,
                    fontWeight: activeFont.fontWeight,
                    letterSpacing: activeFont.letterSpacing,
                    textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 38px ${color}, 0 0 72px ${color}`,
                  }}
                >
                  {brandText}
                </div>
              )}

              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "75%",
                  transform: "translateX(-50%)",
                  width: "84%",
                  padding: "16px 18px",
                  borderRadius: "18px",
                  background: "rgba(6,7,14,0.62)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textAlign: "center",
                  color: "#eef0ff",
                }}
              >
                ატვირთული ფოტოდან იქმნება რეალისტური ვიზუალი, რომ მომხმარებელმა
                ნახოს როგორ გამოჩნდება ნეონი რეალურ სივრცეში
              </div>
            </div>

            <div
              style={{
                background: "#050505",
                borderRadius: "26px",
                padding: "28px",
                boxShadow: "0 0 24px rgba(255,255,255,0.08)",
              }}
            >
              <h2
                style={{
                  margin: "0 0 18px",
                  fontSize: "clamp(28px, 5vw, 48px)",
                  lineHeight: 0.95,
                  fontStyle: "italic",
                }}
              >
                მოითხოვე შენი შეთავაზება
                <br />
                1 წუთში
              </h2>
              <button
                type="button"
                style={{
                  width: "100%",
                  borderRadius: "18px",
                  border: "2px solid #ffffff",
                  background: "#17d117",
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: 800,
                  padding: "18px 20px",
                  boxShadow: "0 0 24px rgba(255,255,255,0.36)",
                  cursor: "pointer",
                }}
              >
                უფასო ფასი და დიზაინი
              </button>

              <div style={{ marginTop: "28px", display: "grid", gap: "12px" }}>
                <div style={{ fontSize: "18px", fontWeight: 800 }}>შემოუერთდი კლუბს</div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ელ-ფოსტა"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    borderRadius: "0",
                    background: "#050505",
                    border: "2px solid #ff4fa3",
                    color: "#ffffff",
                    padding: "16px 18px",
                    fontSize: "20px",
                    boxShadow: "0 0 20px rgba(255,79,163,0.35)",
                  }}
                />
                <button
                  type="button"
                  style={{
                    width: "160px",
                    borderRadius: "18px",
                    border: "2px solid #ffffff",
                    background: "linear-gradient(90deg, #ff2d7a, #2452ff)",
                    color: "#ffffff",
                    fontSize: "22px",
                    fontWeight: 800,
                    padding: "16px 20px",
                    boxShadow: "0 0 24px rgba(255,255,255,0.26)",
                    cursor: "pointer",
                  }}
                >
                  გაგზავნა
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

const aboutPageContent = {
  ka: {
    title: "ჩვენ შესახებ",
    kicker: "კლასიკური შუშის ნეონი იდეიდან დასრულებამდე",
    paragraphs: [
      "ნეონის განათება ქალაქის ცხოვრებაში უკვე 1898 წლიდან გამოიყენება და დღემდე რჩება ერთ-ერთი ყველაზე ეფექტური ვიზუალური გადაწყვეტა. კლასიკური შუშის ნეონი ფასდება ცოცხალი ნათებით, ხელით დამუშავებული ფორმით და განსაკუთრებული ელეგანტურობით.",
      "ჩვენ ვმუშაობთ კლასიკურ შუშის ნეონზე — ნამდვილ ნეონის მილებზე, რომლებიც სივრცეს აძლევს ღრმა, სუფთა და პრემიუმ ვიზუალურ ეფექტს.",
      "კლასიკური შუშის ნეონი იდეალურია ნებისმიერი სივრცისთვის: ბიზნესისთვის, რეკლამისთვის, ოფისებისთვის, რესტორნებისთვის, ღონისძიებებისთვის და სახლის ინტერიერისთვის.",
      "ჩვენ გთავაზობთ სრულ მომსახურებას — იდეიდან დასრულებამდე. ინდივიდუალური დიზაინი, მაღალი ხარისხი და დეტალებზე მაქსიმალური ყურადღება.",
      "ჩვენთვის მნიშვნელოვანი არის შედეგი, რომელიც თქვენს სივრცეს გამორჩეულს გახდის.",
    ],
    advantagesTitle: "მისი მთავარი უპირატესობები",
    advantages: [
      "ნამდვილი ნეონის ცოცხალი და ღრმა ნათება",
      "პრემიუმ ვიზუალი და მაღალი ესთეტიკა",
      "ხელით დამუშავებული ინდივიდუალური ფორმები",
      "ძლიერი ეფექტი ინტერიერსა და გარე რეკლამაში",
      "ხანგრძლივი გამოყენება სწორი მონტაჟისა და მოვლის პირობებში",
    ],
    cta: "დაგვიკავშირდი",
    secondaryCta: "შექმენი დიზაინი",
    stats: [
      { value: "1898", label: "ნეონის ისტორიის დასაწყისი" },
      { value: "Glass", label: "კლასიკური შუშის ნეონი" },
      { value: "24-36", label: "თვე გარანტია პროექტზე" },
    ],
    processTitle: "როგორ ვმუშაობთ",
    process: [
      { title: "იდეა", text: "გვიგზავნით ტექსტს, ლოგოს, ფოტოს ან უბრალოდ მიმართულებას." },
      { title: "ვიზუალი", text: "ვამზადებთ დიზაინის წინასწარ ხედს, რომ გადაწყვეტილება მარტივი იყოს." },
      { title: "წარმოება", text: "ვაკეთებთ ნეონს ზუსტად შეთანხმებული ზომით, ფერით და ფორმით." },
      { title: "მონტაჟი", text: "გეხმარებით უსაფრთხო დაყენებაში და საბოლოო ეფექტის გამართვაში." },
    ],
    useCasesTitle: "სად მუშაობს ყველაზე კარგად",
    useCases: ["კაფეები და ბარები", "რესტორნები", "სილამაზის სალონები", "ოფისები", "ღონისძიებები", "სახლის ინტერიერი"],
    promiseTitle: "რას ვაქცევთ ყურადღებას",
    promises: ["სუფთა დიზაინი", "სწორი სიკაშკაშე", "გამძლე მასალები", "ზუსტი კომუნიკაცია"],
  },
  en: {
    title: "About us",
    kicker: "Classic glass neon from idea to final product",
    paragraphs: [
      "Neon lighting has been part of city life since 1898 and remains one of the most eye-catching ways to stand out. Classic glass neon is valued for its living glow, handcrafted shape, and special elegance.",
      "We work with classic glass neon — real neon tubes that give a space a deep, clean, and premium visual effect.",
      "Classic glass neon is perfect for any space: businesses, advertising, interiors, restaurants, events, and home decor.",
      "We offer a complete service — from idea to final product. Custom design, high quality, and attention to every detail.",
      "Our goal is to create lighting that makes your brand and space truly stand out.",
    ],
    advantagesTitle: "Key advantages",
    advantages: [
      "real neon glow with depth and character",
      "premium look and strong visual identity",
      "handcrafted custom shapes",
      "high impact for interiors and outdoor advertising",
      "long-term use with proper installation and care",
    ],
    cta: "Contact us",
    secondaryCta: "Create a design",
    stats: [
      { value: "1898", label: "the beginning of neon history" },
      { value: "Glass", label: "classic glass neon" },
      { value: "24-36", label: "months warranty per project" },
    ],
    processTitle: "How we work",
    process: [
      { title: "Idea", text: "Send us text, a logo, a photo, or simply the direction you have in mind." },
      { title: "Visual", text: "We prepare a preview so the final decision is easy and confident." },
      { title: "Production", text: "We build the neon with the agreed size, color, shape, and finish." },
      { title: "Installation", text: "We help with safe placement and the final lighting effect." },
    ],
    useCasesTitle: "Where it works best",
    useCases: ["Cafes and bars", "Restaurants", "Beauty salons", "Offices", "Events", "Home interiors"],
    promiseTitle: "What we care about",
    promises: ["Clean design", "Balanced brightness", "Durable materials", "Clear communication"],
  },
  ru: {
    title: "О нас",
    kicker: "Классический стеклянный неон от идеи до результата",
    paragraphs: [
      "Неоновая реклама используется с 1898 года и до сих пор остаётся одним из самых заметных способов привлечения внимания. Классический стеклянный неон ценят за живое свечение, ручную форму и особую элегантность.",
      "Мы работаем с классическим стеклянным неоном — настоящими неоновыми трубками, которые дают пространству глубокий, чистый и премиальный визуальный эффект.",
      "Классический стеклянный неон подходит для любых задач: реклама, бизнес, интерьеры, рестораны, мероприятия и оформление домов.",
      "Мы предлагаем полный цикл услуг — от идеи до готового результата. Индивидуальный дизайн, высокое качество и внимание к деталям.",
      "Наша цель — создать освещение, которое выделит ваш бренд и пространство.",
    ],
    advantagesTitle: "Основные преимущества",
    advantages: [
      "настоящее живое неоновое свечение",
      "премиальный вид и сильная визуальная айдентика",
      "индивидуальные формы ручной работы",
      "яркий эффект для интерьера и наружной рекламы",
      "долгое использование при правильном монтаже и уходе",
    ],
    cta: "Свяжитесь с нами",
    secondaryCta: "Создать дизайн",
    stats: [
      { value: "1898", label: "начало истории неона" },
      { value: "Glass", label: "классический стеклянный неон" },
      { value: "24-36", label: "месяцев гарантии на проект" },
    ],
    processTitle: "Как мы работаем",
    process: [
      { title: "Идея", text: "Вы отправляете текст, логотип, фото или просто направление." },
      { title: "Визуал", text: "Мы готовим предварительный макет, чтобы решение было понятным." },
      { title: "Производство", text: "Изготавливаем неон в согласованном размере, цвете и форме." },
      { title: "Монтаж", text: "Помогаем с безопасной установкой и финальным световым эффектом." },
    ],
    useCasesTitle: "Где работает лучше всего",
    useCases: ["Кафе и бары", "Рестораны", "Салоны красоты", "Офисы", "Мероприятия", "Домашний интерьер"],
    promiseTitle: "На что мы обращаем внимание",
    promises: ["Чистый дизайн", "Правильная яркость", "Надежные материалы", "Понятная коммуникация"],
  },
};

function AboutPage() {
  const { language } = useLanguage();
  const content = aboutPageContent[language] ?? aboutPageContent.ka;

  return (
    <div style={pageStyle}>
      <div style={{ ...containerStyle, padding: "28px 0 80px" }}>
        <Link to="/" style={{ color: "#9fd1ff", textDecoration: "none" }}>
          {localizedLabel({ ka: "მთავარ გვერდზე დაბრუნება", en: "Back to home", ru: "Вернуться на главную" }, language)}
        </Link>

        <section
          style={{
            ...cardStyle,
            padding: "clamp(24px, 5vw, 46px)",
            marginTop: "18px",
            overflow: "hidden",
            background:
              "radial-gradient(circle at 82% 12%, rgba(34,168,255,0.18), transparent 30%), radial-gradient(circle at 8% 12%, rgba(255,45,122,0.20), transparent 28%), rgba(255,255,255,0.045)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "30px",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  width: "fit-content",
                  marginBottom: "16px",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#ffb7d7",
                  fontWeight: 900,
                  fontSize: "13px",
                  textTransform: "uppercase",
                }}
              >
                Neon Tbilisi
              </div>
              <h1 style={{ fontSize: "clamp(40px, 7vw, 76px)", lineHeight: 0.98, margin: "0 0 18px" }}>
                {content.title}
              </h1>
              <p style={{ margin: "0 0 26px", color: "#d5d8e4", fontSize: "clamp(18px, 2.4vw, 24px)", lineHeight: 1.45, fontWeight: 700 }}>
                {content.kicker}
              </p>
              <div style={{ display: "grid", gap: "16px", color: "#eef0f7", fontSize: "18px", lineHeight: 1.75 }}>
                {content.paragraphs.map((paragraph) => (
                  <p key={paragraph} style={{ margin: 0 }}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "28px" }}>
                <Link
                  to="/contact"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "14px 20px",
                    borderRadius: "999px",
                    background: "linear-gradient(90deg, #ff2d7a, #8d5bff, #22a8ff)",
                    fontWeight: 800,
                  }}
                >
                  {content.cta}
                </Link>
                <Link
                  to="/custom"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "14px 20px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.16)",
                    background: "rgba(255,255,255,0.06)",
                    fontWeight: 800,
                  }}
                >
                  {content.secondaryCta}
                </Link>
              </div>
            </div>

            <aside
              style={{
                borderRadius: "24px",
                padding: "24px",
                background: "linear-gradient(180deg, rgba(18,18,26,0.95), rgba(10,10,16,0.98))",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 22px 50px rgba(0,0,0,0.28)",
              }}
            >
              <h2 style={{ margin: "0 0 18px", fontSize: "clamp(26px, 4vw, 38px)", lineHeight: 1.08 }}>
                {content.advantagesTitle}
              </h2>
              <div style={{ display: "grid", gap: "12px" }}>
                {content.advantages.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "28px 1fr",
                      gap: "12px",
                      alignItems: "start",
                      padding: "14px",
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.055)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#f5f7ff",
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "#62ff9b", fontWeight: 900, fontSize: "20px", lineHeight: 1 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  marginTop: "22px",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  background: "linear-gradient(90deg, #ff2d7a, #8d5bff, #22a8ff)",
                  fontWeight: 800,
                }}
              >
                {content.cta}
              </Link>
            </aside>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "14px",
            marginTop: "18px",
          }}
        >
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                ...cardStyle,
                padding: "22px",
                background: "rgba(255,255,255,0.045)",
              }}
            >
              <div style={{ color: "#ff4fa3", fontSize: "clamp(34px, 5vw, 54px)", fontWeight: 950, lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ marginTop: "8px", color: "#dce2f8", fontSize: "16px", lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "18px",
            marginTop: "18px",
          }}
        >
          <div style={{ ...cardStyle, padding: "28px" }}>
            <h2 style={{ margin: "0 0 22px", fontSize: "clamp(30px, 4.5vw, 48px)", lineHeight: 1.05 }}>
              {content.processTitle}
            </h2>
            <div style={{ display: "grid", gap: "14px" }}>
              {content.process.map((step, index) => (
                <div
                  key={step.title}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "42px 1fr",
                    gap: "14px",
                    alignItems: "start",
                    padding: "16px",
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "14px",
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(255,79,163,0.14)",
                      color: "#ffb7d7",
                      fontWeight: 900,
                    }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ margin: "0 0 6px", fontSize: "20px" }}>{step.title}</h3>
                    <p style={{ margin: 0, color: "#d5d8e4", lineHeight: 1.6 }}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              ...cardStyle,
              minHeight: "420px",
              overflow: "hidden",
              display: "grid",
              alignContent: "end",
              backgroundImage: `linear-gradient(180deg, rgba(5,5,8,0.1), rgba(5,5,8,0.88)), url(${homeShowcaseLeft})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ padding: "28px" }}>
              <h2 style={{ margin: "0 0 16px", fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05 }}>
                {content.useCasesTitle}
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {content.useCases.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "10px 13px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            ...cardStyle,
            marginTop: "18px",
            padding: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "14px",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.05 }}>
            {content.promiseTitle}
          </h2>
          {content.promises.map((item) => (
            <div
              key={item}
              style={{
                padding: "18px",
                borderRadius: "18px",
                background: "linear-gradient(135deg, rgba(255,79,163,0.12), rgba(34,168,255,0.08))",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f5f7ff",
                fontWeight: 800,
                lineHeight: 1.35,
              }}
            >
              {item}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const sections = [
    {
      title: "შეკვეთა და ფასი",
      items: [
        {
          question: "რა ღირს ნეონის გაკეთება?",
          answer:
            "ფასი დამოკიდებულია ზომაზე, დიზაინის სირთულეზე, ფერებზე და მასალაზე. ზუსტი ღირებულებისთვის მოგვწერე ტექსტი ან ლოგო და სწრაფად მოგიმზადებთ შეთავაზებას.",
        },
        {
          question: "რა ინფორმაცია უნდა გამოგიგზავნოთ ფასისთვის?",
          answer:
            "ფასის დასათვლელად გამოგვიგზავნე ტექსტი ან ლოგო, სასურველი ზომა, ფერი, სად უნდა დამონტაჟდეს და თუ გაქვს სივრცის ფოტო. ასე უფრო ზუსტ შეთავაზებას მოგიმზადებთ.",
        },
        {
          question: "როგორ შევუკვეთო ნეონის აბრა?",
          answer:
            "აირჩიე სასურველი დიზაინი, ატვირთე ლოგო ან ტექსტი და მოგვწერე დეტალები. შემდეგ დაგიკავშირდებით ფასისა და ვიზუალის დასადასტურებლად.",
        },
        {
          question: "როგორ ხდება შეკვეთის დადასტურება?",
          answer:
            "ჯერ ვათანხმებთ დიზაინს, ზომას, ფერს, ფასს და ვადას. ამის შემდეგ შეკვეთა დადასტურებულად ითვლება და გადავდივართ წარმოებაზე.",
        },
        {
          question: "შესაძლებელია სწრაფი შეკვეთა?",
          answer:
            "ზოგ შემთხვევაში შესაძლებელია დაჩქარებული დამზადება. ეს დამოკიდებულია დიზაინის სირთულეზე, ზომაზე და მიმდინარე დატვირთვაზე.",
        },
      ],
    },
    {
      title: "დიზაინი და ლოგო",
      items: [
        {
          question: "შემიძლია ჩემი ლოგოს გამოყენება?",
          answer:
            "დიახ, შეგიძლია ატვირთო საკუთარი ლოგო და ჩვენ მოვარგებთ მას ნეონის ფორმატს.",
        },
        {
          question: "ვნახავ დიზაინს წინასწარ?",
          answer:
            "დიახ, შეკვეთამდე მიიღებ წინასწარ ვიზუალს, რათა ზუსტად ნახო როგორ გამოჩნდება ნეონი შენს სივრცეში.",
        },
        {
          question: "შეგიძლიათ დიზაინის გაუმჯობესება?",
          answer:
            "დიახ, თუ გაქვს იდეა ან ლოგო, შეგვიძლია მოვარგოთ ნეონის ფორმატს, გავაუმჯობესოთ წაკითხვადობა და შევარჩიოთ სწორი ზომა, ფერი და განლაგება.",
        },
        {
          question: "თუ ლოგო დაბალი ხარისხისაა, მაინც შეიძლება?",
          answer:
            "ხშირად შეიძლება. გამოგვიგზავნე რაც გაქვს და გეტყვით საჭიროა თუ არა ფაილის გადაკეთება ან დიზაინის ხელახლა მომზადება.",
        },
        {
          question: "შეგიძლიათ მხოლოდ ტექსტის ნეონი?",
          answer:
            "დიახ, შეგვიძლია ტექსტის, სახელის, სლოგანის, ლოგოს ან სიმბოლოს ნეონის დამზადება.",
        },
      ],
    },
    {
      title: "კლასიკური შუშის ნეონი",
      items: [
        {
          question: "აკეთებთ კლასიკურ შუშის ნეონს?",
          answer:
            "დიახ, ვმუშაობთ კლასიკურ შუშის ნეონზე. ეს არის ნამდვილი ნეონის მილი ცოცხალი ნათებით, პრემიუმ ვიზუალით და ხელით დამუშავებული ფორმით.",
        },
        {
          question: "რით არის გამორჩეული შუშის ნეონი?",
          answer:
            "შუშის ნეონს აქვს განსაკუთრებული ცოცხალი ნათება, ღრმა ფერი და ხელნაკეთი ხასიათი. სწორედ ამიტომ ის უფრო პრემიუმ და დასამახსოვრებელ ვიზუალს ქმნის.",
        },
        {
          question: "შუშის ნეონი მყიფეა?",
          answer:
            "შუშა ყურადღებას საჭიროებს ტრანსპორტირებისა და მონტაჟისას, მაგრამ სწორი დამზადებისა და დამაგრების შემთხვევაში ეფექტურად და დიდხანს მუშაობს.",
        },
        {
          question: "რა ფერები შეიძლება?",
          answer:
            "შესაძლებელია სხვადასხვა ნეონის ფერის შერჩევა პროექტის მიხედვით. ფერს ვარჩევთ დიზაინთან, სივრცესთან და სასურველ ეფექტთან ერთად.",
        },
      ],
    },
    {
      title: "დამზადება და მონტაჟი",
      items: [
        {
          question: "დამზადების დრო",
          answer:
            "დამზადების დრო დამოკიდებულია შეკვეთის სირთულესა და ზომაზე, თუმცა დეტალების შეთანხმების შემდეგ ზუსტ ვადას აუცილებლად შეგატყობინებთ.",
        },
        {
          question: "რამდენი დრო სჭირდება დამზადებას?",
          answer:
            "დამზადების დრო დამოკიდებულია ზომასა და სირთულეზე, თუმცა შეკვეთებს მაქსიმალურად სწრაფად ვამზადებთ.",
        },
        {
          question: "მეხმარებით მონტაჟში?",
          answer:
            "დიახ, შეგვიძლია დაგეხმაროთ მონტაჟის დაგეგმვაში, დამაგრების მეთოდის შერჩევაში და საბოლოო განათების ეფექტის სწორად მოწყობაში.",
        },
        {
          question: "შესაძლებელია გარე სივრცეში დაყენება?",
          answer:
            "დიახ, ნეონის დაყენება შესაძლებელია გარე სივრცეშიც, თუ პროექტი სწორად არის დაგეგმილი და დაცულია მონტაჟის პირობები. დეტალებს წინასწარ ვამოწმებთ ადგილის მიხედვით.",
        },
        {
          question: "რა ზედაპირზე შეიძლება დამაგრება?",
          answer:
            "დამაგრება შესაძლებელია კედელზე, ფასადზე, ვიტრინაზე, პანელზე ან სპეციალურ კონსტრუქციაზე. საუკეთესო ვარიანტს ვარჩევთ სივრცის ფოტოს მიხედვით.",
        },
      ],
    },
    {
      title: "მოვლა და გამოყენება",
      items: [
        {
          question: "არის გარანტია?",
          answer:
            "დიახ, პროექტზე შესაძლებელია გარანტია. ზუსტი ვადა დამოკიდებულია ნეონის ტიპზე, ზომაზე, გამოყენების პირობებზე და მონტაჟის დეტალებზე.",
        },
        {
          question: "როგორ მოვუარო ნეონს?",
          answer:
            "ნეონი უნდა გაიწმინდოს ფრთხილად, მშრალი ან ოდნავ ნესტიანი რბილი ქსოვილით. არ გამოიყენო უხეში ქიმიური საშუალებები და არ დააწვე შუშის მილებს.",
        },
        {
          question: "შეიძლება მთელი დღე იყოს ჩართული?",
          answer:
            "სწორად დამზადებული და დამონტაჟებული ნეონი გათვლილია ხანგრძლივ გამოყენებაზე. კონკრეტული რეჟიმი დამოკიდებულია პროექტზე და გარემო პირობებზე.",
        },
        {
          question: "თუ დაზიანდა, შესაძლებელია შეკეთება?",
          answer:
            "ხშირ შემთხვევაში შესაძლებელია დიაგნოსტიკა და შეკეთება. მოგვწერე ფოტო ან ვიდეო და გეტყვით რა გამოსავალია საუკეთესო.",
        },
        {
          question: "სად გამოიყენება ნეონი ყველაზე ხშირად?",
          answer:
            "ყველაზე ხშირად გამოიყენება ვიტრინებზე, ბარებში, რესტორნებში, სალონებში, ოფისებში, ღონისძიებებზე და სახლის ინტერიერში.",
        },
      ],
    },
  ];
  const items = sections.flatMap((section) =>
    section.items.map((item) => ({ ...item, section: section.title })),
  );

  return (
    <div style={pageStyle}>
      <div style={{ ...containerStyle, padding: "28px 0 80px" }}>
        <Link to="/" style={{ color: "#9fd1ff", textDecoration: "none" }}>
          მთავარ გვერდზე დაბრუნება
        </Link>

        <section style={{ ...cardStyle, padding: "30px", marginTop: "18px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "24px",
              alignItems: "center",
              marginBottom: "26px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "clamp(34px, 6vw, 58px)", margin: "0 0 12px" }}>
                კითხვები პასუხები
              </h1>
              <p style={{ margin: 0, color: "#d5d8e4", lineHeight: 1.7, maxWidth: "780px" }}>
                აქ ნახავ ყველაზე ხშირად დასმულ კითხვებს შეკვეთის, დიზაინის, ლოგოს ატვირთვის და
                დამზადების პროცესის შესახებ.
              </p>
            </div>

            <img
              src="/gallery/8.jpg"
              alt="Questions"
              style={{
                width: "100%",
                maxWidth: "425px",
                justifySelf: "end",
                borderRadius: "18px",
                boxShadow: "0 24px 50px rgba(0,0,0,0.28)",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "22px" }}>
            {sections.map((section) => (
              <span
                key={section.title}
                style={{
                  padding: "10px 13px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#eef0f7",
                  fontSize: "14px",
                  fontWeight: 800,
                }}
              >
                {section.title}
              </span>
            ))}
          </div>

          <div style={{ display: "grid", gap: "26px" }}>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 style={{ margin: "0 0 12px", fontSize: "clamp(24px, 4vw, 34px)" }}>
                  {section.title}
                </h2>
                <div style={{ display: "grid", gap: "14px" }}>
                  {section.items.map((item) => {
                    const index = items.findIndex((entry) => entry.question === item.question);
                    const isOpen = openIndex === index;

                    return (
                      <div
                        key={item.question}
                        style={{
                          borderRadius: "24px",
                          overflow: "hidden",
                          border: isOpen
                            ? "1px solid rgba(255,79,163,0.28)"
                            : "1px solid rgba(255,255,255,0.08)",
                          background: isOpen
                            ? "linear-gradient(135deg, rgba(255,79,163,0.14), rgba(93,214,255,0.12), rgba(255,255,255,0.04))"
                            : "rgba(255,255,255,0.04)",
                          boxShadow: isOpen ? "0 18px 40px rgba(0,0,0,0.22)" : "none",
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenIndex(isOpen ? -1 : index)}
                          style={{
                            width: "100%",
                            padding: "22px",
                            display: "grid",
                            gridTemplateColumns: "56px 1fr 32px",
                            gap: "14px",
                            alignItems: "center",
                            border: "none",
                            background: "transparent",
                            color: "#ffffff",
                            textAlign: "left",
                            cursor: "pointer",
                          }}
                        >
                          <span style={{ fontSize: "28px", fontWeight: 900, color: "#ff4fa3", lineHeight: 1 }}>
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>
                            <span style={{ display: "block", fontSize: "22px", fontWeight: 800, lineHeight: 1.3 }}>
                              {item.question}
                            </span>
                            <span style={{ display: "block", marginTop: "5px", color: "#9fd1ff", fontSize: "13px", fontWeight: 800 }}>
                              {section.title}
                            </span>
                          </span>
                          <span
                            style={{
                              fontSize: "28px",
                              fontWeight: 700,
                              color: "#ff4fa3",
                              justifySelf: "end",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 180ms ease",
                            }}
                          >
                            ↓
                          </span>
                        </button>

                        {isOpen ? (
                          <div style={{ padding: "0 22px 22px 92px", color: "#eef0f7", lineHeight: 1.8, fontSize: "18px" }}>
                            {item.answer}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "30px",
              padding: "24px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(255,79,163,0.16), rgba(34,168,255,0.12))",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
              gap: "18px",
              alignItems: "center",
            }}
          >
            <div>
              <h2 style={{ margin: "0 0 8px", fontSize: "clamp(26px, 4vw, 42px)" }}>
                კიდევ გაქვს კითხვა?
              </h2>
              <p style={{ margin: 0, color: "#d5d8e4", lineHeight: 1.6 }}>
                მოგვწერე ტექსტი, ლოგო ან ფოტო და დაგეხმარებით სწორი ზომის, ფერის და ფორმის შერჩევაში.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <Link
                to="/contact"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  background: "linear-gradient(90deg, #ff2d7a, #8d5bff, #22a8ff)",
                  fontWeight: 900,
                }}
              >
                დაგვიკავშირდი
              </Link>
              <Link
                to="/quote-ka"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.06)",
                  fontWeight: 900,
                }}
              >
                ატვირთე ლოგო
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div style={pageStyle}>
      <div
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255, 55, 140, 0.24), transparent 26%), radial-gradient(circle at right center, rgba(43, 124, 255, 0.18), transparent 22%), linear-gradient(180deg, #12070d 0%, #0a0a10 58%, #050507 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ ...containerStyle, padding: "34px 0 46px" }}>
          <Link to="/" style={{ color: "#9fd1ff", textDecoration: "none", fontSize: "14px" }}>
            მთავარ გვერდზე დაბრუნება
          </Link>
          <h1
            style={{
              margin: "22px 0 0",
              maxWidth: "820px",
              fontSize: "clamp(42px, 8vw, 76px)",
              lineHeight: 1.02,
              fontWeight: 500,
              textShadow: "0 0 24px rgba(255,255,255,0.18)",
            }}
          >
            მოხარული ვიქნებით,
            <br />
            თუ დაგვიკავშირდებით.
          </h1>
        </div>
      </div>

      <div style={{ ...containerStyle, padding: "28px 0 80px" }}>
        <section
          style={{
            background:
              "radial-gradient(circle at top left, rgba(255,79,163,0.08), transparent 26%), linear-gradient(180deg, rgba(14,14,20,0.96), rgba(8,8,12,0.98))",
            color: "#ffffff",
            borderRadius: "28px",
            padding: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 26px 50px rgba(0,0,0,0.26)",
          }}
        >
          <div style={{ maxWidth: "760px", display: "grid", gap: "18px" }}>
            <div
              style={{
                color: "#ff2d7a",
                fontSize: "clamp(28px, 5vw, 44px)",
                fontWeight: 900,
                lineHeight: 0.95,
                textTransform: "uppercase",
                display: "inline-block",
                padding: "16px 18px",
                borderRadius: "22px",
                background: "linear-gradient(135deg, rgba(33,18,28,0.92), rgba(22,19,42,0.94))",
                border: "1px solid rgba(255,45,122,0.18)",
              }}
            >
              მომხმარებელთა
              <br />
              მომსახურება
            </div>

            <h2 style={{ display: "none", margin: 0, fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1, fontWeight: 900 }}>
              დაგვიკავშირდი
            </h2>

            <h2 style={{ margin: 0, fontSize: "clamp(32px, 6vw, 56px)", lineHeight: 1, fontWeight: 900 }}>
              დაგვიკავშირდით
            </h2>

            <p style={{ display: "none", margin: 0, fontSize: "22px", lineHeight: 1.7 }}>
              თუ გინდა ინდივიდუალური კონსულტაცია, გაქვს შეკითხვა ნეონის აბრის შესახებ,
              ან გჭირდება დიზაინის შერჩევაში დახმარება, ჩვენი გუნდი სიამოვნებით
              დაგეხმარება.
            </p>

            <p style={{ margin: 0, fontSize: "22px", lineHeight: 1.7, whiteSpace: "pre-line" }}>
              {`20 წელია, თქვენს ბიზნესს განსაკუთრებულ ნათებას ვანიჭებთ! ✨
გარეთ რეკლამა მხოლოდ ნიშანი არ არის — ეს თქვენი ბრენდის სახეა, რომელიც 24/7-ზე მუშაობს.
ჩვენ გთავაზობთ სრულ სერვისს ნეონისა და გარე რეკლამის მიმართულებით:
💎 კლასიკური მინის ნეონი — ხარისხის, ვიზუალის და განსაკუთრებული ელეგანტურობისთვის.
⚡ თანამედროვე ლედ ტექნოლოგიები — ეკონომიური და ეფექტური გადაწყვეტილებები.
ჩვენი პროდუქცია გამძლეა, მაღალი ხარისხისაა და იდეალურად ერგება თქვენს ბიზნესს.
შექმენით ძლიერი ბრენდი და გაანათეთ თქვენი სივრცე ნეონით!`}
            </p>

            <p style={{ margin: 0, fontSize: "22px", lineHeight: 1.7, fontWeight: 700 }}>
              სანამ დაგვიკავშირდები, შეგიძლია კითხვები პასუხები გვერდზეც გადახედო ხშირად დასმულ
              კითხვებს.
            </p>
          </div>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
              gap: "0",
                background: "linear-gradient(180deg, rgba(18,18,26,0.96), rgba(10,10,16,0.98))",
              borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 12px 26px rgba(0,0,0,0.26)",
              overflow: "hidden",
              }}
            >
            <div style={{ padding: "22px" }}>
              <h3 style={{ margin: "0 0 16px", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.05, color: "#ffffff" }}>
                კომპანიის ინფორმაცია
              </h3>
              <div style={{ display: "grid", gap: "14px", fontSize: "20px", lineHeight: 1.6, color: "#eef0f7" }}>
                {contactLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      color: "#ff2d7a",
                      textDecoration: "none",
                      fontWeight: 700,
                      paddingBottom: "12px",
                      borderBottom: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <strong>{item.label}:</strong> {item.value}
                  </a>
                ))}
                <div style={{ paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                  <strong>რუკა:</strong> გახსენი ჩვენი მისამართი Google Maps-ში
                </div>
                <a
                  href="https://maps.app.goo.gl/aCMENaEbs6m1nWNY6"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#ff2d7a",
                    textDecoration: "none",
                    fontWeight: 700,
                    paddingBottom: "12px",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  რუკის გახსნა
                </a>
                <Link
                  to="/faq"
                  style={{
                    color: "#ff2d7a",
                    textDecoration: "none",
                    fontWeight: 700,
                    paddingBottom: "12px",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  ხშირად დასმული კითხვები
                </Link>
              </div>
            </div>

            <div
              style={{
                padding: "22px",
                display: "grid",
                gap: "12px",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              <div style={{ fontSize: "24px", fontWeight: 800 }}>სწრაფი გზები</div>
              <Link
                to="/quote-ka"
                style={{
                  textDecoration: "none",
                  color: "#ff2d7a",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(17,17,17,0.12)",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                ატვირთე ლოგო და შექმენი ხელოვნური ინტელექტის ვიზუალი
              </Link>
              <Link
                to="/custom"
                style={{
                  textDecoration: "none",
                  color: "#ff2d7a",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(17,17,17,0.12)",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                შექმენი ნეონი შენით
              </Link>
              <div style={{ display: "grid", gap: "10px", marginTop: "8px" }}>
                <div style={{ color: "#eef0f7", fontSize: "18px", fontWeight: 800 }}>
                  სოციალური ქსელები
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {socialLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        padding: "11px 15px 11px 11px",
                        borderRadius: "999px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "9px",
                        background: item.label === "Instagram"
                          ? "linear-gradient(90deg, #ff2d7a, #8d5bff)"
                          : item.label === "WhatsApp"
                            ? "linear-gradient(90deg, #25d366, #128c7e)"
                            : "linear-gradient(90deg, #1877f2, #22a8ff)",
                        fontWeight: 900,
                      }}
                    >
                      <span
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          overflow: "hidden",
                          lineHeight: 1,
                        }}
                      >
                        <SocialLogo label={item.label} />
                      </span>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "28px",
              overflow: "hidden",
              borderRadius: "26px",
              border: "1px solid rgba(17,17,17,0.12)",
              minHeight: "420px",
              background: "#ffffff",
            }}
          >
            <iframe
              title="ნეონ თბილისი რუკა"
              src="https://www.google.com/maps?q=Neon%20Tbilisi%2C%20Tbilisi&z=15&output=embed"
              style={{ width: "100%", height: "420px", border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<Custom />} />
        <Route path="/quote-ka" element={<QuoteKaPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/neon-creation" element={<NeonCreationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}


