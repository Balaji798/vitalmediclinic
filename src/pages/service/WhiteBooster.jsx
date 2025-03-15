/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/white-booster.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const WhiteBooster = () => {
  return (
    <div>
      <Helmet>
        <title>Ozone (O3) Therapy Centre in Bangkok, Thailand</title>

        <meta
          name="keywords"
          content="ozone therapy, ozone therapy Bangkok, O3 Therapy"
        />

        <meta
          name="description"
          content="Explore ozone therapy in Bangkok. Harness the healing power of ozone (O3) to stimulate natural healing and experience potential health benefits."
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
            VITAL WHITE BOOSTER+ IV DRIP
          </h2>
          <span>
            Vital White Booster+ IV Drip: Enhance Your {"Skin's"} Radiance and
            Vitality
          </span>
          <p style={{ paddingBottom: "1rem" }}>
            The "Vital White Booster+ IV Drip" is an intravenous therapy
            designed to promote a brighter, more even-toned complexion while
            supporting overall skin health. This advanced formula delivers a
            potent blend of antioxidants, vitamins,and other skin-nourishing
            ingredients directly into your bloodstream, aiming to enhance your
            skin's natural glow and address common concerns like
            hyperpigmentation. The "+" in the name likely signifies an enhanced
            or more potent formulation compared to a standard "Vital White"
            drip.
          </p>
          <span>Potential Benefits and Mechanisms:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Skin Brightening:</span>
            <p>
              Ingredients like glutathione and vitamin C may help inhibit
              melanin production, the pigment responsible for skin coloration,
              leading to a brighter complexion.
            </p>
          </p>
          <span>• Reduction of Hyperpigmentation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            The drip may help lighten dark spots, age spots, sun damage, and
            other forms of hyperpigmentation, promoting a more uniform skin
            tone.
          </p>
          <span>• Antioxidant Protection:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Antioxidants combat free radical damage, a major contributor to
            premature aging, skin dullness, and uneven pigmentation.
          </p>
          <span>•Collagen Support:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Certain ingredients may stimulate collagen synthesis, improving skin
            elasticity, firmness, and texture.
          </p>
          <span>• Enhanced Hydration:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            IV fluids help hydrate the skin from within, contributing to a
            plumper, more youthful appearance.
          </p>
          <span>• Improved Skin Health:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            The infusion of essential vitamins and minerals may nourish the
            skin, supporting its overall health and resilience.
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

export default WhiteBooster;
