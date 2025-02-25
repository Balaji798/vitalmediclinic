import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import active from "../../assets/healthCheckUp/bubble-molecule.jpg";
import { Helmet } from "react-helmet-async";

const ActivityTest = () => {
  return (
    <div className="service">
      <Helmet>
        <title>Natural Killer (NK) Cell Activity Test Bangkok, Thailand</title>

        <meta
          name="keywords"
          content="Natural Killer Cell Activity Test, NK Cell Activity Test, NK Cell Activity Test Bangkok, NK Cell Activity Test Thailand "
        />

        <meta
          name="description"
          content="Top Bangkok center for Natural Killer (NK) Cell Activity Test. Precise immunological testing to assess and enhance immune function."
        />
      </Helmet>
      <div
        style={{
          width: "15rem",
          height: "10px",
          background: "#0a3c57",
          marginTop: "3.4rem",
        }}
      />
       <img loading="lazy"
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
          NATURAL KILLER (NK) CELL ACTIVITY TEST
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Natural Killer (NK) Cell Activity Test:</span> Assess the
          strength of your immune {"system's"} first line of defense against
          infections and potential malignancies.
        </p>
        <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
          Natural Killer (NK) Cell Activity Test: Evaluate Your Immune
          Surveillance
        </p>
        <p style={{ padding: "1rem 0" }}>
          Natural Killer (NK) cells are a crucial component of your innate
          immune system, acting as the first line of defense against infections
          and potentially cancerous cells. Our NK Cell Activity Test provides a
          comprehensive assessment of your NK cell function, offering valuable
          insights into your {"body's"} ability to fight disease.
        </p>
        <span>Why Consider NK Cell Analysis:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Immune System Strength:</span> Assess the overall
          effectiveness of your NK cells in targeting harmful pathogens and
          abnormal cells.
        </p>
        <p>
          <span>• Potential Vulnerabilities:</span> Identify whether low NK cell
          activity may increase your susceptibility to infections or certain
          health conditions.
        </p>{" "}
        <p>
          <span>• Personalized Strategies:</span> Results inform targeted
          support protocols for enhancing NK cell function and overall immune
          resilience.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          {" "}
          <span>• Monitoring Progress:</span> Track changes in NK cell activity
          over time, especially if you are undergoing immune-boosting therapies.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Empower your immune system. Schedule your NK Cell Activity Test today
          and gain actionable insights into your {"body's"} defenses.
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
           <img loading="lazy" src={active} className="service-image" />
        </div>
      </div>
    </div>
  );
};

export default ActivityTest;
