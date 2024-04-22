import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/conditions/midsection.jpg";

const NCDDisease = () => {
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
          MEDICAL CONDITIONS
        </h2>
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
          NON-COMMUNICABLE DISEASES OR NCDS
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Non-Communicable or {"NCD'S"}</span> are chronic health
          condition that are not directly transmitted from person to person.
          They often develop slowly over time and include:
        </p>
        <p>
          <span>• Cardiovascular Diseases:</span> Heart disease, stroke,
          hypertension (high blood pressure)
        </p>
        <p>
          <span>• Diadetes:</span> Type 1, Type 2, and gestational diabetes
        </p>{" "}
        <p>
          <span>• Chronic Respiratory Diseases:</span> Asthma, chronic
          obstructive pulmonary disease (COPD)
        </p>
        <p>
          <span>• Cancers:</span> Various froms of cancer
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Mental Health Conditions:</span> Depression, anxiety disorders
        </p>
        <span>Risk Factors for NCDs:</span>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Lifestyle Factors:</span> Poor diet, physical inactivity, smoking, excessive alcohol use
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Metabolic changes:</span> High blood sugar, high cholesterol, obesity
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Age:</span> The risk of many NCDs increases with age.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Genetics:</span> Family history can play a ro;e in some conditions.
        </p>
        <span>Our East Meets West Approach to NCD Treatment:</span>
        <p>
          {" "}
          <span>1. Root Cause Identification:</span> Thorough assessment to understand the specific NCD(s), your individual health profile, and any underlying  imbalances.
        </p>
        <p>
          {" "}
          <span>2. Personalized Treatment Plan:</span> We integrate the best of Western and Eastern medicine for a multi-faceted approach, potentially including:
        </p>
        <p style={{ marginLeft: "0.5rem" }}>
          <span>o Western Medical Interventions:</span> Medications, surgical interventions if needed, and collaboration with relevant specialists.
        </p>
        <p style={{ marginLeft: "0.5rem" }}>
          <span>o personalized Nutrition:</span> Dietary guidance to optimize blood sugar levels, heart health, and overall well-being.
        </p>
        <p style={{ marginLeft: "0.5rem" }}>
          <span>o Thal Herbal Medicine:</span> Specific herbs may be recommended for their potential supportive effects on various NCDs. o Cannabis and Kratom Therapies (Under Guidance): Responsibly exploring their potential benefits in specific NCD circumstances.
        </p>
        <p style={{ marginLeft: "0.5rem" }}>
          <span>o Lifestyle Optimization:</span>{" "}
          Guidance on exercise, stress management, and sleep hygiene, which are fundamental to NCD management.
        </p>
        <p style={{ paddingBottom: "1rem", marginLeft: "0.5rem" }}>
          <span>o Advanced Therapies (Case-Dependent):</span> Options like Stem Cell or Ozone Therapy might be considered for their potential regenerative and anti-inflammatory benefits.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>Empowering You to Manage NCDs:</span><br/> Our goal is to equip you with the knowledge and tools to actively participate in managing your health, prevent complications, and improve your quality of life.
        </p>
        <p>Schedule a consultation to explore how our integrative approach can support your journey with NCDs and optimize your long-term health.</p>
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

export default NCDDisease;
