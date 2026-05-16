import { Link } from "react-router-dom";
import neonTbilisiLogo from "./assets/neon-tbilisi-logo.svg";

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

const cardStyle = {
  background: "linear-gradient(180deg, rgba(33, 11, 31, 0.92), rgba(18, 12, 35, 0.94))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "28px",
  boxShadow: "0 24px 60px rgba(0,0,0,0.26)",
};

function DesignIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <path
        d="M14 46V18a6 6 0 0 1 6-6h24l10 10v24a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6Z"
        fill="none"
        stroke="#ff3f8f"
        strokeWidth="3"
      />
      <path d="M26 38 42 22l6 6-16 16-8 2 2-8Z" fill="none" stroke="#ff3f8f" strokeWidth="3" />
      <path d="M40 14v10h10" fill="none" stroke="#ff3f8f" strokeWidth="3" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <circle cx="32" cy="18" r="10" fill="none" stroke="#ff3f8f" strokeWidth="3" />
      <path d="M32 12v12M28 15h6a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6" fill="none" stroke="#ff3f8f" strokeWidth="3" />
      <path
        d="M14 38c6-6 12-6 18 0l4 4c3 3 8 3 11 0l3-3c3-3 8-3 10 0"
        fill="none"
        stroke="#ff3f8f"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10 42 6 46l8 8 4-4m36-12 4-4 8 8-4 4"
        fill="none"
        stroke="#ff3f8f"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConfirmIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="#ff3f8f" strokeWidth="3" />
      <path d="m22 32 7 7 13-15" fill="none" stroke="#ff3f8f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 16l4-4m0 12 4-4" fill="none" stroke="#ff3f8f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function NeonTbilisiLogo() {
  return (
    <svg
      viewBox="0 0 160 160"
      width="min(72vw, 280px)"
      height="min(72vw, 280px)"
      aria-label="ნეონ თბილისის ლოგო"
      style={{
        filter: "drop-shadow(0 0 10px rgba(255,94,214,0.45))",
      }}
    >
      <defs>
        <filter id="pinkGlowCompanies" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="orangeGlowCompanies" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="blueGlowCompanies" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="160" height="160" rx="80" fill="#050507" />
      <circle
        cx="80"
        cy="80"
        r="63"
        fill="none"
        stroke="#d56cff"
        strokeWidth="3.5"
        filter="url(#pinkGlowCompanies)"
      />
      <g transform="rotate(-7 80 80)">
        <text
          x="80"
          y="78"
          textAnchor="middle"
          fontFamily="'Brush Script MT','Segoe Script',cursive"
          fontSize="40"
          fill="none"
          stroke="#ff67c8"
          strokeWidth="5"
          strokeLinejoin="round"
          filter="url(#pinkGlowCompanies)"
        >
          Neon
        </text>
        <text
          x="80"
          y="78"
          textAnchor="middle"
          fontFamily="'Brush Script MT','Segoe Script',cursive"
          fontSize="40"
          fill="none"
          stroke="#ff9f52"
          strokeWidth="2"
          strokeLinejoin="round"
          filter="url(#orangeGlowCompanies)"
        >
          Neon
        </text>
        <text
          x="80"
          y="111"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="20"
          fontWeight="700"
          letterSpacing="2.5"
          fill="#56dbff"
          filter="url(#blueGlowCompanies)"
        >
          TBILISI
        </text>
      </g>
    </svg>
  );
}

function NeonTbilisiLogoImage() {
  return (
    <img
      src={neonTbilisiLogo}
      alt="Neon Tbilisi"
      data-i18n-skip
      style={{
        width: "min(72vw, 280px)",
        height: "min(72vw, 280px)",
        objectFit: "contain",
        borderRadius: "50%",
        filter: "drop-shadow(0 0 18px rgba(255,94,214,0.45))",
      }}
    />
  );
}

const benefits = [
  {
    title: "დიზაინი",
    text: "უფასოდ ვამზადებთ შენს ბიზნესზე მორგებულ დიზაინის შეთავაზებას. შეგიძლია მოგვწერო იდეა ან თავად შექმნა ნეონი კონფიგურატორში და შედეგი ნახო რეალურ დროში.",
    icon: <DesignIcon />,
    accent: "radial-gradient(circle at top left, rgba(255,63,143,0.18), transparent 42%)",
  },
  {
    title: "საუკეთესო ფასი",
    text: "გთავაზობთ პრემიუმ ხარისხის LED ნეონს საუკეთესო ფასად საქართველოში. ყველაზე დაბალი ფასის გარანტია ნიშნავს, რომ ხარისხსა და ვიზუალში კომპრომისის გარეშე იღებ ძლიერ შედეგს.",
    icon: <PriceIcon />,
    accent: "radial-gradient(circle at top right, rgba(95,214,255,0.14), transparent 44%)",
  },
  {
    title: "დადასტურება",
    text: "როცა დიზაინი მზად იქნება და ფასზე შევთანხმდებით, შეგიძლია მოითხოვო ზუსტი შეთავაზება, დაადასტურო შეკვეთა და სწრაფად გადავიდეთ წარმოებაზე.",
    icon: <ConfirmIcon />,
    accent: "radial-gradient(circle at top left, rgba(164,91,255,0.16), transparent 44%)",
  },
];

export default function CompaniesPage() {
  return (
    <div style={pageStyle}>
      <div
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255, 55, 140, 0.28), transparent 24%), radial-gradient(circle at right center, rgba(43, 124, 255, 0.16), transparent 22%), linear-gradient(180deg, #10070d 0%, #090910 56%, #050507 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ ...containerStyle, padding: "28px 0 54px" }}>
          <Link to="/" style={{ color: "#9fd1ff", textDecoration: "none", fontSize: "14px" }}>
            დაბრუნება მთავარ გვერდზე
          </Link>

          <section
            style={{
              ...cardStyle,
              marginTop: "18px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            <div style={{ padding: "34px 28px 38px", position: "relative" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#ff63a8",
                  fontWeight: 800,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                კომპანიებისთვის
              </div>

              <div
                style={{
                  marginTop: "22px",
                  color: "#ff4fa3",
                  fontSize: "clamp(28px, 5vw, 46px)",
                  fontWeight: 900,
                  lineHeight: 0.98,
                  textTransform: "uppercase",
                }}
              >
                ნეონ თბილისი
              </div>

              <h1
                style={{
                  margin: "10px 0 18px",
                  fontSize: "clamp(42px, 7vw, 78px)",
                  lineHeight: 0.95,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  textShadow: "0 0 24px rgba(255,255,255,0.1)",
                }}
              >
                ყველაზე დაბალი
                <br />
                ფასის გარანტია
              </h1>

              <p
                style={{
                  margin: 0,
                  maxWidth: "640px",
                  color: "#f0eef7",
                  fontSize: "clamp(18px, 2.5vw, 24px)",
                  lineHeight: 1.8,
                }}
              >
                გინდა შექმნა ინდივიდუალური LED ნეონ წარწერა, რომელიც ზუსტად შენს სტილს მოერგება? სწორ ადგილას ხარ.
                <br />
                <br />
                ჩვენთან შეგიძლია სრულიად უფასოდ მიიღო დიზაინის შეთავაზება და ფასის გათვლა, ყოველგვარი ვალდებულების გარეშე. ასევე შეგიძლია თავად შექმნა შენი ნეონი კონფიგურატორში და შედეგი ნახო რეალურ დროში.
                <br />
                <br />
                ჩვენი მიზანია, მოგაწოდოთ პრემიუმ ხარისხის ნეონი საუკეთესო ფასად საქართველოში.
                <br />
                <br />
                შენი იდეა, ჩვენ ვაქცევთ რეალურ განათებად.
              </p>

              <div style={{ marginTop: "28px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <Link
                  to="/quote-ka"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    padding: "18px 28px",
                    borderRadius: "18px",
                    background: "linear-gradient(90deg, #ff2d7a, #2148d8)",
                    fontSize: "20px",
                    fontWeight: 800,
                    boxShadow: "0 16px 36px rgba(33,72,216,0.26)",
                  }}
                >
                  შექმენი დიზაინი AI-თი
                </Link>
                <Link
                  to="/custom"
                  style={{
                    textDecoration: "none",
                    color: "#ffffff",
                    padding: "18px 28px",
                    borderRadius: "18px",
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.04)",
                    fontSize: "20px",
                    fontWeight: 700,
                  }}
                >
                  ნეონის კონფიგურატორი
                </Link>
              </div>
            </div>

            <div
              style={{
                minHeight: "420px",
                background: "linear-gradient(180deg, rgba(18,12,28,0.92), rgba(10,10,18,0.98))",
                position: "relative",
                overflow: "hidden",
                display: "grid",
                placeItems: "center",
                padding: "28px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 50% 36%, rgba(255, 66, 156, 0.18), transparent 24%), radial-gradient(circle at 50% 54%, rgba(98, 214, 255, 0.14), transparent 28%)",
                }}
              />
              <div style={{ position: "relative", zIndex: 1 }}>
                <NeonTbilisiLogoImage />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div style={{ ...containerStyle, padding: "28px 0 80px" }}>
        <section
          style={{
            ...cardStyle,
            padding: "26px",
            marginBottom: "24px",
            background:
              "radial-gradient(circle at top left, rgba(255,63,143,0.1), transparent 24%), linear-gradient(180deg, rgba(15,10,22,0.96), rgba(10,10,18,0.98))",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" }}>
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                style={{
                  minHeight: "100%",
                  padding: "24px",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: `${benefit.accent}, linear-gradient(180deg, rgba(38, 13, 36, 0.92), rgba(22, 17, 42, 0.96))`,
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "22px",
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    marginBottom: "22px",
                  }}
                >
                  {benefit.icon}
                </div>
                <h2
                  style={{
                    margin: "0 0 16px",
                    fontSize: "clamp(26px, 4vw, 38px)",
                    fontWeight: 900,
                    textTransform: "uppercase",
                  }}
                >
                  {benefit.title}
                </h2>
                <p style={{ margin: 0, color: "#f0eef7", fontSize: "20px", lineHeight: 1.75 }}>
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          style={{
            marginTop: "24px",
            ...cardStyle,
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(18,12,28,0.96), rgba(10,10,16,0.98))",
          }}
        >
          <div
            style={{
              padding: "34px 28px",
              background:
                "radial-gradient(circle at top left, rgba(255,63,143,0.16), transparent 20%), radial-gradient(circle at right center, rgba(95,214,255,0.14), transparent 24%)",
            }}
          >
            <h2 style={{ margin: "0 0 14px", fontSize: "clamp(34px, 5vw, 58px)", lineHeight: 1, fontWeight: 900 }}>
              მზად ხარ,
              <br />
              შენი იდეა გავანათოთ?
            </h2>
            <p style={{ margin: "0 0 24px", maxWidth: "760px", color: "#eef0f7", fontSize: "20px", lineHeight: 1.8 }}>
              მიიღე უფასო დიზაინის შეთავაზება, ნახე AI ვიზუალი და სწრაფად გადავიდეთ წარმოებაზე. ეს გვერდი სპეციალურად კომპანიებისთვის შევქმენით, რომ გადაწყვეტილება მაქსიმალურად მარტივი იყოს.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link
                to="/quote-ka"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  padding: "18px 28px",
                  borderRadius: "18px",
                  background: "linear-gradient(90deg, #ff2d7a, #2148d8)",
                  fontSize: "20px",
                  fontWeight: 800,
                }}
              >
                გადადი AI გვერდზე
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#ffffff",
                  padding: "18px 28px",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.04)",
                  fontSize: "20px",
                  fontWeight: 700,
                }}
              >
                დაგვიკავშირდი
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
