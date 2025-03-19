/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/alpha-lipoic.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const AlphaLipoic = () => {
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
          VITAL ALPHA-LIPOIC ACID IV DRIP
          </h2>
          <span>
          Vital Alpha-Lipoic Acid IV Drip: Unleash the Power of a Potent Antioxidant
          </span>
          <p style={{ paddingBottom: "1rem" }}>
          The "Vital Alpha-Lipoic Acid IV Drip" is a specialized intravenous therapy designed to deliver a concentrated dose of Alpha-Lipoic Acid (ALA) directly into your bloodstream. ALA is a powerful antioxidant naturally produced by the body and found in certain foods. It plays a vital role in cellular energy production and offers a wide range of potential health benefits. This IV drip aims to replenish your body's ALA levels, potentially enhancing its antioxidant capacity and supporting overall well-being.
          </p>
          <span>Potential Benefits of Alpha-Lipoic Acid (ALA):</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Powerful Antioxidant Protection:</span>
            <p>
            ALA is a unique antioxidant that is both water- and fat-soluble, allowing it to work throughout the body to neutralize harmful free radicals. It also helps regenerate other antioxidants, such as vitamin C and glutathione, enhancing their effectiveness.
            </p>
          </p>
          <span>• Blood Sugar Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          ALA may improve insulin sensitivity and glucose uptake, potentially benefiting individuals with blood sugar imbalances
          </p>
          <span>• Nerve Health:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Some studies suggest that ALA may help protect nerve cells from damage and improve symptoms of neuropathy, particularly diabetic neuropathy. 
          </p>
          <span>• Liver Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          ALA may support liver function and detoxification processes.
          </p>
          <span>• Skin Health:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          As an antioxidant, ALA may help protect the skin from damage caused by UV radiation and environmental pollutants.
          </p>
          <span>• Potential Anti-Aging Effects:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          By combating oxidative stress and supporting cellular function, ALA may contribute to healthy aging.
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
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0px 2rem",
        }}
      >
        {" "}
        <div
          style={{
            padding: "1rem",
            textAlign: "center",
            backgroundColor: "#093b56",
            color: "#fff",
            borderRadius: "20px",
            maxWidth: "950px",
          }}
        >
          <h4>Why IV Delivery?</h4>
          <span>
          Intravenous (IV) administration of ALA allows for direct delivery into the bloodstream, bypassing the
            <br /> digestive system. This may lead to higher bioavailability and potentially greater therapeutic effects
            <br /> compared to oral supplementation, especially at higher dosages.
          </span>
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

export default AlphaLipoic