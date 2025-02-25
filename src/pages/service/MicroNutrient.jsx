import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/SERVICES/doctor-consultation.jpg";
import happy from "../../assets/SERVICES/happy-couple.jpg";
import senior from "../../assets/SERVICES/senior-couple.jpg";
import asian from "../../assets/SERVICES/asian-senior.jpg";
import { Helmet } from "react-helmet-async";

const MicroNutrient = () => {
  return (
    <div>
      <Helmet>
        <title>
          Micronutrient Analysis Bangkok, Thailand | Vital Medi Clinic
        </title>

        <meta
          name="keywords"
          content="Micronutrient Analysis, Micronutrient Analysis Thailand, Micronutrient Analysis Bangkok"
        />

        <meta
          name="description"
          content="Get accurate micronutrient analysis in Thailand. Detailed assessments to optimize your nutrition and health. Book your micronutrient analysis today."
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
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            SPECIALIST TESTING
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            MICRONUTRIENT ANALYSIS
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>Micronutrient Analysis:</span> Detailed assessment of vitamin,
            mineral, and antioxidant levels to uncover deficiencies and guide
            personalized supplementation.
          </p>
          <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
            Micronutrient Analysis: Your Key to Optimal Health and Well-being
          </p>
          <p style={{ padding: "1rem 0" }}>
            Unlock the key to optimal health: Our Micronutrient Analysis
            pinpoints vitamin, mineral, and antioxidant deficiencies, allowing
            for targeted supplementation that supports long-term well-being.
          </p>
          <p style={{ padding: "0.5rem 0" }}>
            Discover hidden imbalances that may be hindering your energy levels,
            immune function, and overall vitality. Our Micronutrient Analysis
            provides a precise evaluation of your vitamin, mineral, and
            antioxidant levels, revealing potential deficiencies.
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "2rem 0 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              maxWidth: "28rem",
              paddingLeft: "1rem",
              borderLeft: "5px solid",
              height: "19rem",
            }}
          >
             <img loading="lazy"
              src={happy}
              style={{ width: "24rem", objectFit: "cover", height: "6rem" }}
            />
             <img loading="lazy"
              src={senior}
              style={{ width: "24rem", objectFit: "cover", height: "6rem" }}
            />
             <img loading="lazy"
              src={asian}
              style={{ width: "24rem", objectFit: "cover", height: "6rem" }}
            />
          </div>
          <div style={{ maxWidth:"600px",width: "100%" }}>
            <span>Unlock the Benefits:</span>
            <p style={{ paddingTop: "1rem" }}>
              <span>• Sustainable Energy:</span> Address micronutrient gaps that
              may be causing fatigue.
            </p>
            <p>
              <span>• Stronger Immunity:</span> Support your {"body's"} natural
              defenses with targeted nutrients.
            </p>{" "}
            <p>
              <span>• Enhanced Well-being:</span> Feel your best with a
              personalized supplement plan.
            </p>
            <p style={{ padding: "1rem 0" }}>
              {" "}
              <span>• Data-Driven, Personalized Care:</span> We use your test
              results to create a supplement strategy tailored to your unique
              needs, empowering you to achieve your health goals.
            </p>
          </div>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          paddingBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Schedule your Micronutrient Analysis and embark on your journey to
        optimal wellness!
      </p>
    </div>
  );
};

export default MicroNutrient;
