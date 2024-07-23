import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/healthCheckUp/researcher.jpg";
import scientists from "../../assets/scientists.jpg";
import shield from "../../assets/shield-isolation.jpg";
import virus from "../../assets/virus.jpg";

const FunctionTesting = () => {
  return (
    <div>
      <div
className="service"
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
           className="content-position"
          style={{
            width: "10rem",
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
            IMMUNE FUNCTION TESTING
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>Immune Function Testing:</span> In-depth examination of immune
            system components, providing insights into immune health and
            potential vulnerabilities.
          </p>
          <p style={{ padding: "1rem 0" }}>
            Our comprehensive Immune Function Testing offers a deep dive into
            the intricate workings of your immune system. This analysis goes
            beyond basic blood counts to assess the strength, balance, and
            potential vulnerabilities within your {"body's"} defense network.
          </p>
          <span>Key Components of Immune Function Testing:</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>• Specialized White Blood Cell Counts:</span> Detailed
            evaluation of different types of immune cells (e.g., lymphocytes,
            neutrophils, monocytes) and their ratios.
          </p>
          <p>
            <span>• Antibody Levels:</span> Measurement of immunoglobulins
            (e.g., IgG, IgM, IgA) to assess your {"body's"} ability to fight
            specific infections.
          </p>{" "}
          <p>
            <span>• Inflammation Markers:</span> Examination of substances that
            indicate levels of inflammation, which can impact immune function.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Functional Assays:</span> In some cases, tests may assess
            how well your immune cells respond to specific challenges.
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
className="service-image"
            />
          </div>
        </div>
      </div>
      <div className="center" style={{}}>
        <div style={{ maxWidth: "1000px", display: "flex",flexWrap:"wrap" }}>
          <div style={{paddingLeft:"0.5rem",borderLeft:"4px solid",width: "20rem"}}>
            <img src={virus} style={{ width: "18rem",height:"8rem" }} />
            <img src={shield} style={{ width: "18rem",height:"8rem" }} />
            <img src={scientists} style={{ width: "18rem",height:"8rem" }} />
          </div>
          <div style={{width:"100%",paddingLeft:"1rem"}}>
            {" "}
            <span>Benefits of Immune Function Testing:</span>
            <p>
              <span>• Identify Imbalances:</span> Detect potential weaknesses or
              overactivity within your immune system.
            </p>
            <p>
              <span>• Pinpoint Vulnerabilities:</span> Uncover increased
              susceptibility to infections, allergies, or autoimmune conditions.
            </p>
            <p>
              <span>• Personalized Treatment Plans:</span> Test results provide
              a roadmap for targeted therapies and lifestyle changes to optimize
              immune function.
            </p>
            <p style={{ fontWeight: "bold" }}>
              Protect your health. Schedule your Immune Function Testing today
              and gain valuable insights into your {"body's"} defenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionTesting;
