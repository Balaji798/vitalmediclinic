/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/weight-loss.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const WeightLoss = () => {
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
            VITAL WEIGHT LOSS CONTROL IV DRIP
          </h2>
          <span>
            Vital Weight Loss Control IV Drip: Supporting Your Journey to a
            Healthier You
          </span>
          <p style={{ paddingBottom: "1rem" }}>
            The "Vital Weight Loss Control IV Drip" is an intravenous therapy
            designed to complement a healthy lifestyle and support your weight
            management goals. This specialized drip delivers a blend of
            vitamins, minerals, and amino acids directly into your bloodstream,
            potentially aiding metabolism, boosting energy levels, and
            supporting fat burning processes. It's important to understand that
            this IV drip is not a magic solution for weight loss but rather a
            supportive tool that may enhance the results of a balanced diet and
            regular exercise program.
          </p>
          <span>Potential Benefits and Mechanisms:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Metabolic Support:</span>
            <p>
              Certain ingredients may help boost metabolism, the process by
              which your body converts food into energy.
            </p>
          </p>
          <span>• Enhanced Energy Levels:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Increased energy can help you stay active and motivated to exercise,
            which is crucial for weight management.
          </p>
          <span>• Fat Burning Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some components may aid in lipolysis, the breakdown of fats.
          </p>
          <span>• Appetite Regulation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Certain nutrients might play a role in appetite regulation,
            potentially helping you feel fuller for longer.
          </p>
          <span>Improved Nutrient Absorption:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            IV delivery bypasses the digestive system, potentially leading to
            better absorption of key nutrients involved in weight management.
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
};

export default WeightLoss;
