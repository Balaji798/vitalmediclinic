import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/SERVICES/doctor-consultation.jpg";
import { Helmet } from "react-helmet-async";

const HealthCheckUp = () => {
  return (
    <div className="service">
      <Helmet>
      <title>Health Checkup Packages for Men & Women</title>

      <meta name="keywords" content="health check for men, health check for women, Health Checkup Packages for Men, Health Checkup Packages for Women"/>
      
      <meta name="description" content="A top-rated health check-up centre provides health checkup for Men & Women, Leading health check-up center in Thailand for preventive care."/>
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
          TAILORED HEALTH ASSESSMENTS
        </h2>
        <p style={{ padding: "1rem 0 0" }}>
          <span>
            Tailored {"Men's"} and {"Women's"} Health Assessments:
          </span>{" "}
          Thorough evaluations of essential health markers with packages
          designed specifically for the unique needs of male and female
          patients.
        </p>
        <p style={{ fontWeight: "bold", padding: "0 0 1rem" }}>
          Comprehensive Health Check: Proactive Wellness for Men and Women.
        </p>
        <p>
          Our tailored health assessments empower you to take charge of your
          health. We focus on early detection of potential health risks and
          optimizing your overall well-being.
        </p>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Personalized Care:</span> Your health needs are unique. Our{" "}
          {"men's"} and {"women's"} health assessments address your specific
          concerns and are designed to provide actionable insights into your
          current health status, guiding you towards a healthier future.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Key Elements:</span> Our comprehensive checkups often include
          assessments of blood pressure, cholesterol, blood sugar, hormone
          levels, and more. Packages are customized based on your individual
          needs, health goals, and age.
        </p>{" "}
        <p style={{ paddingBottom: "0.5rem" }}>
          Doctor-Guided Approach: Our experienced physicians review your results
          in detail, offering personalized consultations to explain your health
          profile and provide strategic recommendations to maximize your
          well-being.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Contact us to learn more about Heavy Metal Toxicity Testing and take
          proactive steps towards a healthier future
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
  );
};

export default HealthCheckUp;
