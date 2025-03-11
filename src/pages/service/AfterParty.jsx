import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/after-party.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const AfterParty = () => {
  return (
    <div>
      <Helmet>
        <title>
          Placenta Therapy Treatment Bangkok, Thailand | Vital Medi Clinic
        </title>

        <meta
          name="keywords"
          content="Placenta Therapy Bangkok, Placenta Therapy, Placenta Therapy Thailand"
        />

        <meta
          name="description"
          content="Experience rejuvenating placenta therapy in Bangkok. Advanced treatments for enhanced wellness and skin health."
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
            marginTop: "20rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            IV NUTRITION THERAPY
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            VITAL AFTER PARTY IV DRIP
          </h2>
          <span>Vital After Party IV Drip: Replenish and Revitalize</span>
          <p style={{ padding: "0rem 0 1rem" }}>
            The {'"Vital After Party IV Drip"'} is a specially formulated
            intravenous treatment designed to help you recover and re-energize
            after a night of indulgence. Whether {"you've"} had a few too many
            drinks, danced the night away, or simply feel depleted, this drip
            aims to <br />
            <span>
              replenish essential fluids, vitamins, and minerals, helping you
              bounce back faster.
            </span>
          </p>
          <span>Potential Benefits:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Rapid Rehydration:</span>
            <p>Alcohol is a diuretic, meaning it increases urine production and can
            lead to dehydration. IV fluids bypass the digestive system,
            <span>delivering hydration directly</span> into the bloodstream for
            <span>faster and more effective rehydration. </span>
            </p>
          </p>
          <span>• Electrolyte Replenishment:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Excessive alcohol consumption and sweating can deplete essential
            electrolytes like sodium, potassium, and magnesium. This drip
            replenishes these vital minerals,
            <span>helping to restore balance and alleviate symptoms</span> like
            headaches and muscle cramps.
          </p>
          <span>• Vitamin Boost:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            The drip may include a blend of essential vitamins, such as B
            vitamins (including B12 and B- complex), vitamin C, and others.
            These vitamins play crucial roles in
            <span>energy metabolism, immune function,</span> and overall
            well-being.
          </p>
          <span>• Liver Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some formulations may include ingredients that support liver
            function, such as glutathione, an antioxidant that{" "}
            <span>helps detoxify the body.</span>
          </p>
          <span>• Nausea Relief: </span>
          <p style={{ paddingBottom: "0.5rem" }}>
            The drip might contain anti-nausea medication to help alleviate any
            stomach upset.
          </p>
          <span>• Reduced Inflammation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
             Certain ingredients, like
            vitamin C, may have <span>anti-inflammatory properties.</span>
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
            {" "}
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

export default AfterParty;
