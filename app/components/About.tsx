export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 20px",
        maxWidth: "960px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          gap: "48px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            flex: "0 0 260px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              border: "3px solid rgba(37, 99, 235, 0.35)",
              background:
                "radial-gradient(circle at 30% 30%, rgba(37, 99, 235, 0.45), rgba(37, 99, 235, 0))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563eb",
              fontSize: "0.95rem",
              fontWeight: 600,
              textAlign: "center",
              padding: "16px",
            }}
            aria-hidden="true"
          >
            Headshot Placeholder
          </div>
        </div>

        <div
          style={{
            flex: "1 1 320px",
            textAlign: "left",
            maxWidth: "520px",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
            Hi, I am Draco Dominus 👋
          </h1>

          <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#555" }}>
            Building AI-powered tools that merge creativity, technology, and
            purpose.
          </p>

          <p style={{ lineHeight: "1.6", color: "#444" }}>
            I am a Business and Computing Science student at Simon Fraser
            University, passionate about crafting products that make life more
            efficient. My projects focus on AI, automation, and human performance
            — combining design, data, and strategy to create meaningful digital
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
