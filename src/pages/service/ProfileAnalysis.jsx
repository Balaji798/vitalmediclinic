import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/healthCheckUp/female-hand.jpg";

const ProfileAnalysis = () => {
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
          METABOLIC PROFILE ANALYSIS
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Metabolic Profile Analysis:</span> Comprehensive evaluation of
          metabolic function, offering insights into blood sugar regulation,
          cholesterol levels, and overall metabolic health.
        </p>
        <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
          Metabolic Profile Analysis: Delve Deeper into Your Metabolic Health
        </p>
        <p style={{ padding: "1rem 0" }}>
          Our comprehensive Metabolic Profile Analysis provides a detailed
          assessment of your {"body's"} metabolic function. This valuable
          evaluation offers crucial insights into:
        </p>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Blood Sugar Regulation:</span> identify potential risk factors
          for metabolic imbalances related to blood sugar control.
        </p>
        <p>
          <span>• Lipid Profile:</span> Gain a clear picture of your cholesterol
          levels, including LDL {'("bad")'}
          cholesterol, HDL {'("good")'} cholesterol, and triglycerides, to
          assess cardiovascular risk.
        </p>{" "}
        <p>
          <span>• Metabolic Efficiency:</span> Understand how your body processes and utilizes energy for optimal health and well-being.
        </p>
        <p style={{padding:"1rem 0 0.5rem",fontWeight:"bold"}}>Benefits of Metabolic Profile Analysis:</p>
        <p style={{ paddingBottom: "1rem" }}>
          {" "}
          <span>• Early Detection:</span> Proactive identification of potential metabolic issues before they progress.
        </p>
        <p style={{ paddingBottom: "1rem" }}><span>• Personalized Strategies:</span>Gain the knowledge needed to develop personalized dietary and lifestyle modifications.</p>
        <p><span>• Empowered Health Management:</span>Take control of your health with a deeper understanding of your metabolic function.</p>
        <p style={{ fontWeight: "bold" }}>
        This comprehensive analysis empowers you to make informed decisions for a healthier future. Schedule your Metabolic Profile Analysis today!
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
            paddingTop: "2rem",
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

export default ProfileAnalysis;
