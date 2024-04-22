import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/healthCheckUp/dna-illustration.jpg";

const LengthAnalysis = () => {
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
        TELOMERE LENGTH ANALYSIS
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Telomere Length Analysis:</span> Assessment of cellular aging by measuring telomere length, offering insights into potential longevity and disease risks.
        </p>
        <p style={{ padding: "1rem 0" }}>
        Telomeres are protective caps at the ends of your chromosomes that shorten with each cell division. Telomere length is considered a biomarker of celllar aging, and research suggests a link between shorter telomeres and increased risks for various age-related diseases. Our Telomere Length Analysis provides valuable insights into your cellular health and potential longevity.
        </p>
        <span>Why Consider Telomere Length Analysis:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Biological Age Assessment:</span> Gain a more accurate picture of your biological age compared to your chronological age.
        </p>
        <p>
          <span>• Disease Risk Prediction:</span> Understand your potential risks for age-related conditions like cardiovascular disease, certain
        </p>
        <span>cancers, and cognitive decline.</span>
        <p>
          <span>• Lifestyle Impact:</span> Assess how lifestyle factors such as diet, exercise, and stress management may influence your telomere length.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          {" "}
          <span>• Personalized Strategies:</span> Develop targeted interventions to potentially slow telomere shortening and support healthier aging.
        </p>
        <p style={{ fontWeight: "bold" }}>
        Unlock insights into your cellular health. Schedule your Telomere Length Analysis and explore strategies to promote longevity and well-being.
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
}

export default LengthAnalysis