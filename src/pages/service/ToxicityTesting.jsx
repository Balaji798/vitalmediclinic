import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/healthCheckUp/senior-doctor.jpg";

const ToxicityTesting = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem 0",
        minHeight: "50rem",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "15rem",
          height: "10px",
          background: "#0a3c57",
          marginTop: "3.4rem",
        }}
      />
      <img
        src={dotes}
        style={{
          width: "10rem",
          position: "absolute",
          left: 0,
          marginLeft: "-3rem",
          marginTop: "20rem",
        }}
      />
      <div style={{ maxWidth: "660px", width: "100%" }}>
        <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
          SPECIALIST TESTING
        </h2>
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
          HEAVY METAL TOXICITY TESTING
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Heavy Metal Toxicity Testing:</span> Detect exposure levels to
          harmful heavy metals, allowing for proactive detoxification strategies
        </p>
        <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
          Heavy Metal Toxicity Testing: Safeguard your health and optimize
          well-being.
        </p>
        <p style={{ padding: "1rem 0" }}>
          Our Heavy Metal Toxicity Testing provides a comprehensive evaluation
          of your exposure to potentially harmful heavy metals, including
          mercury, lead, arsenic, and others. This precision testing empowers
          you with the knowledge needed to take proactive steps towards
          detoxification. Benefits may include:
        </p>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Improved Energy Levels:</span> Reduce fatigue caused by heavy
          metal burdens.
        </p>
        <p>
          <span>• Enhanced Mental Clarity:</span> Address potential cognitive
          impacts for sharper focus.
        </p>{" "}
        <p>
          <span>• Organ Protection:</span> Safeguard your long-term health by
          identifying heavy metal exposure.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          {" "}
          <span>• Personalized Detoxification:</span> Our experts use your test
          results to tailor a detoxification plan that restores your health and
          vitality.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Contact us to learn more about Heavy Metal Toxicity Testing and take
          proactive steps towards a healthier future
        </p>
      </div>
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <div
          className="backgroundImage"
          style={{
            backgroundImage: `url(${bgImage})`,
            width: "100%",
            maxWidth: "500px",
            display: "flex",
            justifyContent: "center",
            height: "28rem",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            paddingTop:"2rem"
          }}
        >
          <img
            src={doctorConsultation}
            style={{
              maxWidth: "312px",
              marginLeft: "-7.01rem",
              objectFit: "cover",
              height: "22rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ToxicityTesting;
