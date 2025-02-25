import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/healthCheckUp/person.jpg";
import service1 from "../../assets/SERVICES/sevice pic-24.png";
import service2 from "../../assets/SERVICES/sevice pic-23.png";
import service3 from "../../assets/SERVICES/sevice pic-22.png";
import { Helmet } from "react-helmet-async";

const BiomarkerTesting = () => {
  const data = [
    {
      title: "Genetic Markers",
      para: "Identification of inherited gene mutations that may increase cancer risk.",
      icon: service1,
    },
    {
      title: "Tumor Markers",
      para: "Analysis of substances produced by cancer cells or in response to a tumor.",
      icon: service2,
    },
    {
      title: "Circulating Tumor Cells (CTCs)",
      para: "Detection of cancer cells that have detached from a tumor and are circulating in the bloodstream.",
      icon: service3,
    },
  ];
  return (
    <div>
      <Helmet>
        <title>
          Cancer Biomarker Testing Bangkok, Thailand | Vital Medi Clinic
        </title>

        <meta
          name="keywords"
          content="Cancer Biomarker Testing, Cancer Biomarker Testing Bangkok, Cancer Biomarker Testing Thailand"
        />

        <meta
          name="description"
          content="Bangkok's leading center for cancer biomarker testing. Expert diagnostics to identify and monitor cancer biomarkers accurately."
        />
      </Helmet>
      <div className="service">
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
            CANCER BIOMARKER TESTING
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>Cancer Biomarker Testing:</span> Early detection and risk
            assessment through analysis of specific cancer-related biomarkers.
          </p>
          <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
            Cancer Biomarker Testing: Empowering Early Detection and
            Personalized Risk Assessment
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
            <span>• Personalized Risk Assessment:</span> Evaluate your
            individual risk for developing specific cancers, even if there are
            no current symptoms.
          </p>{" "}
          <p>
            <span>• Monitoring and Treatment Guidance:</span> Track biomarker
            levels over time to monitor disease progression or the effectiveness
            of cancer treatments.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Targeted Therapies:</span> In some cases, biomarker results
            can help determine if specific targeted cancer therapies are likely
            to be beneficial.
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
             <img loading="lazy" src={doctorConsultation} className="service-image" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#dadad7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1.5rem 1rem",
        }}
      >
        <h2 style={{ paddingBottom: "0.5rem" }}>
          Our Cancer Biomarker Testing may include:
        </h2>
        <div
          style={{
            maxWidth: "850px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                maxWidth: "280px",
                width: "100%",
              }}
            >
               <img loading="lazy" src={item.icon} style={{ width: "100px" }} />
              <span>{item.title}</span>
              <p style={{ fontWeight: "14px", maxWidth: "250px" }}>
                {item.para}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontWeight: "bold", paddingTop: "0.5rem" }}>
          Take a proactive approach to your health. Consult with our specialists
          to determine if Cancer Biomarker Testing is right for you.
        </p>
      </div>
    </div>
  );
};

export default BiomarkerTesting;
