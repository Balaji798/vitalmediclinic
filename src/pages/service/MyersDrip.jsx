import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/myers-drip.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const MyersDrip = () => {
  return (
    <div>
      <Helmet>
        <title>{"Men's"} Health Therapy Bangkok | Vital Medi Clinic</title>

        <meta name="keywords" content="Men's Health Therapy Bangkok" />

        <meta
          name="description"
          content="Get tailored men's health therapy in Bangkok. Address unique health challenges with our specialized treatments for better life quality."
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
            VITAL MYERS’ IV DRIP
          </h2>
          <h4>Vital {"Myers'"} IV Drip: A Classic Wellness Boost</h4>
          <p style={{ padding: "0rem 0 1rem" }}>
            The {'"'}Vital {"Myers'"} IV Drip{'"'} is based on the renowned{" "}
            {"Myers'"} Cocktail, a well-established intravenous formula
            containing a blend of essential vitamins and minerals. This drip is
            designed to promote overall health and well-being by replenishing
            vital nutrients, boosting energy levels, and potentially alleviating
            symptoms associated with fatigue, inflammation, and allergies.{" "}
            {"It's"} often considered a foundational IV therapy suitable for a
            wide range of individuals seeking a general wellness boost.
          </p>
          <span>Potential Benefits:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Increased Energy Levels: </span>{" "}
            <p>
              The B vitamins in the {"Myers'"} Cocktail play a crucial role in
              energy metabolism, helping your body convert food into usable
              energy..
            </p>
          </p>
          <span>• Reduced Fatigue: </span>
          <p style={{ paddingBottom: "0.5rem" }}>
            By replenishing essential nutrients and supporting energy
            production, the drip may help combat fatigue and improve stamina.
          </p>
          <span>• Immune System Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Vitamins like Vitamin C and minerals like Zinc are essential for
            proper immune function.
          </p>
          <span>• Reduced Inflammation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Certain ingredients, such as magnesium and Vitamin C, may have
            anti-inflammatory properties.
          </p>
          <span>• Allergy Symptom Relief:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some individuals report improvement in allergy symptoms after
            receiving a {"Myers'"} Cocktail, although the exact mechanism is not
            fully understood.
          </p>
          <span>• Improved Mood:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Nutrient deficiencies can sometimes contribute to mood imbalances.
            Replenishing essential vitamins and minerals may support overall
            mental well-being.
          </p>
          <span>• Hangover Relief:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            The hydrating fluids and replenishing nutrients may help alleviate
            hangover symptoms.
          </p>
          <span>• Improved Athletic Performance and Recovery:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some athletes use the {"Myers'"} Cocktail to support performance and
            recovery, though more research is needed in this area.
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

export default MyersDrip;
