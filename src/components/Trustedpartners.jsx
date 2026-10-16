
import "./TrustedPartners.css";

const partners = [
  {
    name: "Ginserv",
    src: "/gen.png",
    className: "partner-logo--ginserv",
  },
  {
    name: "Startup Karnataka",
    src: "/startupkar.png",
    className: "partner-logo--startup",
  },
  {
    name: "DPIIT",
    src: "/DPIIT.png",
    className: "partner-logo--dpiit",
  },
  {
    name: "VTU",
    src: "/VTU.png",
    className: "partner-logo--vtu",
  },
  {
    name: "TalentSpotify",
    src: "/TALENT.png",
    className: "partner-logo--talent",
  },
  {
    name: "Radiant",
    src: "/RADI.jpg",
    className: "partner-logo--radiant",
  },
];

export default function TrustedPartners() {
  return (
    <section className="trusted-partners">
      <p className="trusted-partners__heading">
        Trusted by partners across India
      </p>

      <div className="trusted-partners__logos">
        {partners.map((partner) => (
          <div
            className={`trusted-partners__item ${partner.className}`}
            key={partner.name}
          >
            <img src={partner.src} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
