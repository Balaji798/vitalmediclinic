/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/curcumin.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const Curcumin = () => {
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
          VITAL CURCUMIN IV DRIP
          </h2>
          <span>
          Vital Curcumin IV Drip: Harnessing the Anti-Inflammatory Power of Turmeric
          </span>
          <p style={{ paddingBottom: "1rem" }}>
          The "Vital Curcumin IV Drip" is a specialized intravenous therapy that delivers a concentrated dose of curcumin, the primary active compound in turmeric, directly into your bloodstream. Turmeric has been used for centuries in traditional medicine for its potent anti-inflammatory and antioxidant properties. 1 This IV drip aims to maximize the bioavailability of curcumin, potentially offering enhanced therapeutic benefits for a variety of conditions.
          </p>
          <span>Benefits of Curcumin:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Powerful Anti-Inflammatory Effects:</span>
            <p>
            Curcumin is renowned for its ability to modulate inflammatory pathways in the body. Chronic inflammation is linked to numerous diseases, including heart disease, arthritis, and certain cancers.
            </p>
          </p>
          <span>• Antioxidant Properties:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Curcumin acts as a potent antioxidant, scavenging harmful free radicals that can damage cells and contribute to aging and disease. 
          </p>
          <span>• Joint Pain Relief:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Due to its anti-inflammatory properties, curcumin may help alleviate joint pain and stiffness associated with conditions like osteoarthritis and rheumatoid arthritis.
          </p>
          <span>• Brain Health:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Some studies suggest that curcumin may have neuroprotective effects, potentially benefiting cognitive function and protecting against age-related neurodegenerative diseases.
          </p>
          <span>• Mood Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Curcumin may have positive effects on mood and may be beneficial for individuals with depression or anxiety.
          </p>
          <span>• Digestive Health:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Curcumin may support digestive health by reducing inflammation in the gut.
          </p>
          <span>• Cardiovascular Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Curcumin may contribute to cardiovascular health by improving blood vessel function and reducing inflammation.
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
          Curcumin is known to have poor bioavailability when taken orally, meaning that only a small amount is
            <br /> absorbed into the bloodstream. Intravenous (IV) administration bypasses the digestive system, delivering
            <br /> curcumin directly into the bloodstream for potentially greater absorption and therapeutic effects.
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

export default Curcumin