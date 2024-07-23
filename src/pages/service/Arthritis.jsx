import dotes from "../../assets/SERVICES/servic-pic-18.png";
import doctorConsultation from "../../assets/conditions/bone-joints.jpg";
import midsection from "../../assets/conditions/midsection-doctor.jpg";
import bg from "../../assets/conditions/bg.png";

const Arthritis = () => {
  return (
    <div
      style={{
        padding: "2rem 0",
        overflowX:"hidden"
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "15rem",
            height: "10px",
            background: "#0a3c57",
            marginTop: "3.4rem",
          }}
        />
        <div>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            MEDICAL CONDITIONS
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            RHEUMATOID ARTHRITIS (RA)
          </h2>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#e0e0e2",
          display: "flex",
          alignItems: "center",
          justifyContent:"flex-end",
          flexWrap:"wrap"
        }}
      >
        <div style={{maxWidth:"900px",width:"100%"}}>
          <p style={{ padding: "1rem 0" }}>
            <span>Rheumatoid Arthritis (RA):</span> Understanding the Disease
            and Our Integrative Treatment Approach
          </p>
          <p style={{ padding: "1rem 0" }}>
            Rheumatoid Arthritis is a chronic autoimmune disease primarily
            affecting the joints. The Immune system mistakenly attacks the
            lining of joints, causing inflammation, pain. stiffness, and
            potential joint damage over time. RA can also impact other body
            systems, leading to fatigue, fever, and more.
          </p>
          <p style={{ fontWeight: "bold" }}>
            Factors that may contribute to RA include:
          </p>
          <p>
            <span>• Genetics:</span> A family history of RA may increase your
            risk.
          </p>
          <p>
            <span>• Hormones:</span> RA is more common in women.
          </p>{" "}
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Environmental Triggers:</span> Smoking, past infections, and
            other factors may play a role.
          </p>
        </div>
        <img
          src={doctorConsultation}
          style={{
            maxWidth: "400px",
            objectFit: "cover",
            height: "22rem",
          }}
        />
      </div>
      <div
className="service"
      >
        {" "}
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `url(${bg})`,
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
              src={midsection}
              style={{
                maxWidth: "312px",
                marginLeft: "8.2rem",
                objectFit: "cover",
                height: "22rem",
              }}
            />
          </div>
        </div>
        <img
          src={dotes}
          style={{
            width: "10rem",
            position: "absolute",
            right: 0,
            marginRight: "-3rem",
            marginTop: "20rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
        <span>Our East Meets West Approach to RA Treatment:</span>
        <p>
          {" "}
          <span>1. Comprehensive Assessment:</span> Thorough evaluation to
          understand the severity and progression of your RA, along with any
          other health concerns.
        </p>
        <p>
          {" "}
          <span>2. Personalized Treatment Plan:</span> We combine the strengths
          of medicine for a holistic approach, including:
        </p>
        <p style={{ marginLeft: "0.5rem" }}>
          <span>o Western Medical Interventions:</span> Medications to manage
          pain, inflammation, and potentially slow disease progression.
        </p>
        <p style={{ marginLeft: "0.5rem" }}>
          <span>o Nutritional Support:</span> Anti-inflammatory diet guidance
          and targeted supplementation to support joint health and overall
          well-being.
        </p>
        <p style={{ marginLeft: "0.5rem" }}>
          <span>o Thal Herbal Medicine:</span> Selected herbs for their
          potential anti-inflammatory and pain relieving properties.
        </p>
        <p style={{ marginLeft: "0.5rem" }}>
          <span>o Cannabis and Kratom Therapies (Under Guidance):</span>{" "}
          Responsibly exploring the potential use of these plant-based options
          for pain management and inflammation reduction.
        </p>
        <p style={{ paddingBottom: "0.5rem", marginLeft: "0.5rem" }}>
          <span>o Lifestyle Optimization:</span> Stress management techniques, gentle exercise recommendations, and support for restful sleep.
        </p>
        <p style={{ paddingBottom: "0.5rem"}}><span>Beyond Symptom Management:</span> Supporting Long term Health</p>
        <p>Our goal is not just temporary relief but to address the the underlying imbalances contributing to RA, potentially slowing disease progression and improving your overall quality of life</p>
        </div>
        <div
          style={{
            width: "15rem",
            height: "10px",
            background: "#0a3c57",
            marginTop: "0.5rem",
          }}
        />
      </div>
    </div>
  );
};

export default Arthritis;


