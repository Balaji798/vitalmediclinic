/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/white-radiance.webp";
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
          VITAL WHITE RADIANCE IV DRIP
          </h2>
          <p style={{ paddingBottom: "1rem" }}>
          The "Vital White Radiance IV Drip" is a specialized intravenous therapy designed to promote a brighter, more even-toned complexion and enhance your skin's natural radiance. This carefully formulated drip delivers a potent blend of antioxidants and skin-nourishing ingredients directly into your bloodstream, aiming to address hyperpigmentation, reduce oxidative stress, and promote a healthy, luminous glow from within.
          </p>
          <span>Potential Benefits and Mechanisms:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Skin Brightening:</span>
            <p>
            Certain ingredients may help to inhibit melanin production, the pigment responsible for skin coloration, leading to a brighter and more even skin tone
            </p>
          </p>
          <span>• Reduction of Hyperpigmentation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          The drip may help to lighten dark spots, age spots, and other forms of hyperpigmentation.
          </p>
          <span>• Antioxidant Protection</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Antioxidants combat free radical damage, which can contribute to premature aging and skin dullness.
          </p>
          <span>• Collagen Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Some ingredients may promote collagen synthesis, contributing to skin elasticity and firmness.
          </p>
          <span>•  Improved Skin Hydration:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          IV fluids help to hydrate the skin from within, promoting a plump and healthy appearance.
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