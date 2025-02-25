import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/iv-drip.jpg";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const IVTherapy = () => {
  return (
    <div>
      <Helmet>
        <title>IV Nutrition Therapy Centre Bangkok, Thailand</title>

        <meta
          name="keywords"
          content="IV Nutrition Therapy, IV Nutrition Therapy Centre, IV Nutrition Therapy Bangkok, IV Nutrition Therapy Thailand"
        />

        <meta
          name="description"
          content="Bangkok’s leading IV nutrition therapy. Get a concentrated dose of vitamins and minerals directly into your bloodstream for optimal health."
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
            marginTop: "20rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            WELLNESS PROGRAM
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            IV NUTRITION THERAPY
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>IV Nutrition Therapy:</span> Direct Cellular Nourishment for
            Enhanced Health.
          </p>
          <p style={{ padding: "1rem 0" }}>
            Intravenous (IV) Nutrition Therapy delivers a concentrated dose of
            vitamins, minerals, antioxidants, and other essential nutrients
            directly into your bloodstream. This method bypasses the digestive
            system, ensuring maximum absorption and rapid availability for
            immediate cellular use.
          </p>
          <span>Potential Benefits of IV Nutrition Infusions:</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>• Boosted Cellular Energy:</span> Replenish vital nutrients
            essential for energy production, helping you overcome fatigue and
            optimize performance.
          </p>
          <p>
            <span>• Enhanced Immunity:</span> Provide your immune system with
            essential building blocks to strengthen its defenses against
            illness.
          </p>{" "}
          <p>
            <span>• Detoxification Support:</span> Deliver antioxidants and
            nutrients that aid your {"body's"} natural detoxification processes.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Reduced Inflammation:</span> Supply nutrients with
            anti-inflammatory properties that may alleviate pain and promote
            healing.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Metabolic Optimization:</span> Support healthy metabolism
            for improved energy levels and potential weight management.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Cognitive Boost:</span> Nourish your brain with essential
            nutrients for improved focus, memory, and mental clarity.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Radiant Skin:</span> Deliver nutrients that promote healthy
            collagen production, hydration, and a youthful glow.
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
        <p
          style={{
            paddingBottom: "0.5rem",
            maxWidth: "400px",
            fontSize: "14px",
          }}
        >
          {" "}
          <span>• Personalized For Your Needs:</span> Our IV Nutrition Therapy
          infusions are tailored to your specific health goals and concerns,
          ensuring you receive the optimal blend of nutrients.
        </p>
        <p style={{ fontWeight: "bold", maxWidth: "400px", fontSize: "14px" }}>
          Experience the difference. Schedule your IV Nutrition Therapy
          consultation today and revitalize your health from within!
        </p>
      </div>
    </div>
  );
};

export default IVTherapy;
