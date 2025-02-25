import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/healthCheckUp/food-allergy.jpg";
import service1 from "../../assets/SERVICES/foodAllergy/sevice-pic-18.png";
import service2 from "../../assets/SERVICES/foodAllergy/sevice-pic-19.png";
import service3 from "../../assets/SERVICES/foodAllergy/sevice-pic-20.png";
import service4 from "../../assets/SERVICES/foodAllergy/sevice-pic-21.png";
import { Helmet } from "react-helmet-async";

const AllergiesTesting = () => {
  return (
    <div>
      <Helmet>
        <title>
          Food Allergy & Intolerance Testing Bangkok, Thailand | Vital Medi
          Clinic
        </title>

        <meta
          name="keywords"
          content="Food Allergy testing Bangkok, Food Allergy & Intolerance Testing Bangkok"
        />

        <meta
          name="description"
          content="Bangkok's leading center for food allergy and intolerance testing. Get accurate and affordable allergies testing today."
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
            bottom: "-20rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            SPECIALIST TESTING
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            FOOD ALLERGY AND INTOLERANCE TESTING
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>Food Allergy and Intolerance Testing:</span> Identify
            potential sensitivities and intolerances to optimize dietary choices
            and gut health.
          </p>
          <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
            {'" The Key to Uncovering Hidden Food Sensitivities"'}
          </p>
          <p style={{ padding: "1rem 0" }}>
            Unlock the Secrets to Better Digestion and Well-being: Discover Your
            Food Sensitivities and Intolerances
          </p>
          <p>
            Are you struggling with unexplained digestive problems, constar
            fatigue, or persistent skin issues? Our Food Allergy and Intolerance
            Testing offers personalized insights to help you pinpoint potential
            triggers and take control of your health.
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
        className="center"
        style={{ flexDirection: "column", backgroundColor: "#e9e9e7" }}
      >
        <div style={{ maxWidth: "540px", padding: "1rem 1rem 2rem 1rem" }}>
          <h2
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingBottom: "1rem",
            }}
          >
            Benefits of Food Sensitivity Testing:
          </h2>
          <div
            style={{
              display: "flex",
              background: "#fff",
              alignItems: "center",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
              marginBottom: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
             <img loading="lazy" src={service1} style={{ maxWidth: "5rem" }} />
            <div style={{ marginLeft: "0.5rem",maxWidth:"400px",width:"100%" }}>
              <h3 style={{ fontSize: "1.5rem" }}>Improved Gut Health</h3>
              <p>Optimize digestion and reduce uncomfortable symptoms.</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              background: "#fff",
              padding: "10px",
              alignItems: "center",
              borderRadius: "10px",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
              marginBottom: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
             <img loading="lazy" src={service2} style={{ maxWidth: "5rem" }} />
            <div style={{ marginLeft: "0.5rem",maxWidth:"400px",width:"100%" }}>
              <h2 style={{ fontSize: "1.5rem" }}>Enhanced Energy Levels</h2>
              <p>Identify foods that may be draining your energy.</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              background: "#fff",
              alignItems: "center",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
              marginBottom: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
             <img loading="lazy" src={service3} style={{ maxWidth: "5rem" }} />
            <div style={{ marginLeft: "0.5rem",maxWidth:"400px",width:"100%" }}>
              <h2 style={{ fontSize: "1.5rem" }}>Clearer Skin</h2>
              <p>Address potential dietary causes of skin concerns.</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              background: "#fff",
              alignItems: "center",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
             <img loading="lazy" src={service4} style={{ maxWidth: "5rem" }} />
            <div style={{ marginLeft: "0.5rem",maxWidth:"400px",width:"100%" }}>
              {" "}
              <h2 style={{ fontSize: "1.5rem" }}>Overall Well-being</h2>
              <p>
                Feel your best by uncovering hidden food sensitivities. Take
                action today! Schedule your Food Allergy and Intolerance Testing
                and start your journey towards better health.
              </p>
            </div>
          </div>
        </div>
        <p style={{ fontWeight: "bold", paddingBottom: "0.5rem" }}>
          Take action today! Schedule your Food Allergy and Intolerance Testing
          and start your journey towards better health
        </p>
      </div>
    </div>
  );
};

export default AllergiesTesting;
