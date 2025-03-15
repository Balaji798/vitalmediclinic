/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/nad-booster.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const WhiteRadiance = () => {
  return (
    <div>
      <Helmet>
        <title>
          Thai Traditional Massage Therapy Centre Bangkok | Vital Medi Clinic
        </title>

        <meta
          name="keywords"
          content="Thai Traditional Massage, Thai Traditional Massage therapy, Thai Traditional Massage Bangkok"
        />

        <meta
          name="description"
          content="Experience Thai traditional massage in Bangkok. Unique therapy combining acupressure and yoga-like positions for complete body balance."
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
        <img
          loading="lazy"
          src={dotes}
          className="content-position"
          style={{
            width: "10rem",
            left: 0,
            marginLeft: "-3rem",
            marginTop: "10rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            IV NUTRITION THERAPY
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            VITAL IMMUNE BOOSTER IV DRIP
          </h2>
          <span>
            Vital Immune Booster IV Drip: Fortify Your Body's Natural Defenses
          </span>
          <p style={{ paddingBottom: "1rem" }}>
          The "Vital Immune Booster IV Drip" is a specially formulated intravenous therapy designed to deliver a potent blend of vitamins, minerals, and antioxidants directly into your bloodstream. This targeted approach aims to support and strengthen your immune system, helping your body fight off infections and maintain optimal health.
          </p>
          <span>Potential Benefits of an Immune-Boosting IV Drip:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Enhanced Immune Function:</span>
            <p>
            The drip may help bolster your immune system's ability to defend against pathogens, such as viruses and bacteria.
            </p>
          </p>
          <span>• Increased Antioxidant Protection:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Antioxidants help neutralize harmful free radicals that can damage cells and weaken the immune system.
          </p>
          <span>• Faster Recovery:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          By providing essential nutrients directly, the drip may help speed up recovery from illness or fatigue.
          </p>
          <span>• Improved Overall Well-being:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          A well-functioning immune system is crucial for overall health and vitality.
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
              loading="lazy"
              src={doctorConsultation}
              className="service-image"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${therapy})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          objectFit: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
          padding: "4rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              paddingBottom: "0.5rem",
              maxWidth: "420px",
              fontSize: "14px",
            }}
          >
            <span>• Personalized For Your Needs:</span> Our IV Nutrition Therapy
            infusions are tailored to your specific health goals and concerns,
            ensuring you receive the optimal blend of nutrients.
          </p>
          <p
            style={{ fontWeight: "bold", maxWidth: "420px", fontSize: "14px" }}
          >
            Experience the difference. Schedule your IV Nutrition Therapy
            consultation today and revitalize your health from within!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhiteRadiance