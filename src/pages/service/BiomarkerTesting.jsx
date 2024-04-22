import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/healthCheckUp/person.jpg";

const BiomarkerTesting = () => {
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
          CANCER BIOMARKER TESTING
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Cancer Biomarker Testing:</span> Early detection and risk
          assessment through analysis of specific cancer-related biomarkers.
        </p>
        <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
          Cancer Biomarker Testing: Empowering Early Detection and Personalized
          Risk Assessment
        </p>
        <p style={{ padding: "1rem 0" }}>
          Cancer biomarker testing analyzes specific biological substances in
          your blood, tissues, or other bodily fluids that may indicate the
          presence of cancer cells or an increased risk of developing certain
          types of cancer.
        </p>
        <span>Benefits of Cancer Biomarker Testing:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Early Detection:</span> Identify potential cancers at their
          earliest stages, when treatment may be most effective.
        </p>
        <p>
          <span>• Personalized Risk Assessment:</span> Evaluate your individual
          risk for developing specific cancers, even if there are no current
          symptoms.
        </p>{" "}
        <p>
          <span>• Monitoring and Treatment Guidance:</span> Track biomarker
          levels over time to monitor disease progression or the effectiveness
          of cancer treatments.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          {" "}
          <span>• Targeted Therapies:</span> In some cases, biomarker results can help determine if specific targeted cancer therapies are likely to be beneficial.
        </p>
        <span>Our Cancer Biomarker Testing may include:</span>
        <p style={{ paddingBottom: "1rem" }}><span>Genetic Markers:</span>Identification of inherited gene mutations that may increase cancer risk.</p>
        <p style={{ paddingBottom: "1rem" }}><span>Tumor Markers:</span>Analysis of substances produced by cancer cells or in response to a tumor. </p>
        <p style={{ paddingBottom: "1rem" }}><span>Circulating Tumor Cells (CTCs):</span>Detection of cancer cells that have detached from a tumor and are circulating in the bloodstream.</p>
        <p style={{ fontWeight: "bold" }}>
        Take a proactive approach to your health. Consult with our specialists to determine if Cancer Biomarker Testing is right for you.
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

export default BiomarkerTesting;
