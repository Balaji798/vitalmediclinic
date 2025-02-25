import { Helmet } from "react-helmet-async";
import check from "../../assets/SERVICES/serice-pic-21.jpg";

const HealthCheckup = () => {
  return (
    <div
      className="backgroundImage"
      style={{
        backgroundImage: `url(${check})`,
        display: "flex",
        justifyContent: "center",
        color: "#fff",
        width: "100%",
        backgroundSize: "cover",
        alignItems: "center",
        padding: "2rem 0",
        marginTop: "1rem",
      }}
    >
      <Helmet>
        <title>
          Bangkok Health Check-up Center, Annual Health Checkup Packages
          Thailand
        </title>

        <meta
          name="keywords"
          content="Health Checkup, Health Check-up Center, Bangkok Health Check-up Center, Health Checkup Packages, Health Check Packages Thailand"
        />

        <meta
          name="description"
          content="Explore Bangkok Health Check-up Center for top health checkup packages. Comprehensive health checkup in Thailand for complete wellness."
        />
      </Helmet>
      <div style={{ width: "400px" }}></div>
      <div style={{ maxWidth: "400px", width: "100%" }}>
        <h1 style={{ fontSize: "1.8rem" }}>COMPREHENSIVE HEALTH CHECKUPS</h1>
        <div
          style={{
            width: "100px",
            height: "2px",
            background: "#fff",
            margin: "0.5rem 0 1rem",
          }}
        ></div>
        <p style={{ fontSize: "16px" }}>
          We provide in-depth health assessments for men and women, including
          specialized testing like food allergy/intolerance analysis,
          micronutrient evaluation, NK cell activity, cancer biomarker
          screening, immune function profiling, and telomere length analysis.
          These tests offer actionable insights for optimizing your health.
        </p>
      </div>
    </div>
  );
};

export default HealthCheckup;
