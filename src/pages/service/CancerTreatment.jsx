import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/conditions/cancer.jpg";

const CancerTreatment = () => {
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
          CANCER TREATMENT
        </h2>
        <p style={{ padding: "1rem 0" }}>
          Cancer encompasses a complex group of diseases characterized by
          uncontrolled cell growth and spread. There are many types of cancer,
          and their causes, symptoms, and treatment approaches can vary
          significantly
        </p>
        <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
          Our Integrative Approach to Cancer Treatment Across Stages:
        </p>
        <p style={{ paddingTop: "1rem" }}>
          <span>1. Collaborative Care:</span> We work alongside your oncologist
          and other specialists to provide supportive therapies that complement
          your conventional treatment plan.
        </p>
        <p>
          <span>2. Personalized Approach:</span> We tailor strategies to your
          specific type and stage of cancer, as well as overall health and
          treatment goals. Our integrative approach may include
        </p>
        <span>Throughout All Stages:</span>
        <p>
          <span>• Nutritional Support:</span> Guidance on an anti-inflammatory
          diet and targeted supplementation to support your body during
          treatment and enhance overall health.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          {" "}
          <span>• Lifestyle Optimization:</span> Support for stress management,
          sleep improvement, and gentle exercise recommendations as tolerated
          Thai Herbal Medicine: Carefully selected herbs for their potential
          antioxidant, immune boosting, and symptom alleviating effects.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Cannabis and Kratom Therapies (Under Guidance):</span>
          Responsibly exploring their potential for pein management, oppetite
          stimulation, nausea reduction, and stress relief- particularly in
          palliative care settings.
        </p>
        <span>Additional Considerations Depending on Stage and Treatment:</span>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Pre/Post Surgery:</span> Strategies to support wound healing,
          redure inflammation, and optimice preparation for or recovery from
          surgical procedures.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• During Chemotherapy/Radiation:</span> Supporting immune
          function, potentially mitigating side affects, and improving squality
          of Ide.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Advanced Therapies (Case-Dependant):</span> Options the NE
          Cell Therapy or Therapy might be considered for their potential
          immune-boosting and regenerates effect.
        </p>
        <p>
          <span>Important Notes:</span> Communication with your oncologist is
          essential. While our focus is on supportive care, {"it's"} crucial to
          understand how our integrative approach might interact withe your
          primary treatments.
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
        <p style={{padding:"1rem 0"}}>
          <span>Our Goal:</span>Enhancing Well-being Throughout Tour Jourmey
          While conventional therapies are the mainstay off cancer treatment,
          our aim is to support your {"body's"} natural healing abilities,
          manage symptoms, and optimize your quality of is challenging time.
        </p>
        <span>Schedule a consultation to explore how aur integrative approach can complement your cancer treatment plan and promote your overall well-being.</span>
      </div>
    </div>
  );
};

export default CancerTreatment;
