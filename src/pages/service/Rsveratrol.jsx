/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/resveratrol.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const Rsveratrol = () => {
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
            VITAL RESVERATROL IV DRIP
          </h2>
          <h3>
            Vital Resveratrol IV Drip: Unlocking the Potential of a Powerful
            Antioxidant
          </h3>
          <p style={{ paddingBottom: "1rem", textIndent: "20px" }}>
            The "Vital Resveratrol IV Drip" is a specialized intravenous therapy
            designed to deliver a concentrated dose of resveratrol directly into
            your bloodstream. Resveratrol is a naturally occurring polyphenol
            found in red wine, grapes, berries, and peanuts, and is renowned for
            its potent antioxidant and potential anti-aging properties. This IV
            drip aims to maximize the bioavailability of resveratrol,
            potentially offering enhanced therapeutic benefits for overall
            health and well-being.
          </p>
          <h3>Potential Benefits of Resveratrol:</h3>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Powerful Antioxidant Activity:</span>
            <p>
              Resveratrol is a potent antioxidant that helps protect cells from
              damage caused by free radicals, which are unstable molecules that
              contribute to aging and various diseases.
            </p>
          </p>
          <span>• Increased Antioxidant Protection:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Antioxidants help neutralize harmful free radicals that can damage
            cells and weaken the immune system.
          </p>
          <span>• Cardiovascular Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Studies suggest that resveratrol may improve cardiovascular health
            by promoting healthy blood flow, reducing inflammation, and
            improving cholesterol levels
          </p>
          <span>• Anti-Inflammatory Effects:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Resveratrol has demonstrated anti-inflammatory properties, which may
            be beneficial for conditions associated with chronic inflammation.
          </p>
          <span>• Neuroprotective Properties:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some research indicates that resveratrol may have neuroprotective
            effects, potentially benefiting cognitive function and protecting
            against age-related neurodegenerative diseases.
          </p>
          <span>• Metabolic Health:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Resveratrol may improve insulin sensitivity and glucose metabolism,
            potentially benefiting individuals with metabolic disorders.
          </p>
          <span>• Anti-Aging Potential:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Due to its antioxidant and anti-inflammatory properties, as well as
            its potential effects on cellular pathways associated with aging,
            resveratrol is being investigated for its potential anti-aging
            benefits.
          </p>
          <span>• Longevity:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Resveratrol has been shown to activate certain pathways, like
            sirtuins, which are linked to increased lifespan in some animal
            models.
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
          Resveratrol has limited bioavailability when taken orally, meaning that a significant portion may not be
            <br /> absorbed into the bloodstream. Intravenous (IV) administration bypasses the digestive system, delivering
            <br /> resveratrol directly into the bloodstream for potentially greater absorption and therapeutic effects
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
};

export default Rsveratrol;
