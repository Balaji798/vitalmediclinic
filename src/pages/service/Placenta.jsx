import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/micro-sensory.jpg";
import young from "../../assets/wellness/young-sport.jpg";
import bg from "../../assets/conditions/bg.png";
import { Helmet } from "react-helmet-async";

const Placenta = () => {
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
            PLACENTA THERAPY
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>Placenta Therapy:</span> Harnessing the Power of Postpartum
            Nourishment
          </p>
          <p style={{ padding: "1rem 0" }}>
            Placenta therapy involves the consumption or topical application of
            the placenta, a nutrient-rich organ that develops during pregnancy
            to support fetal growth. This practice draws from the belief that
            the placenta contains valuable hormones, vitamins, minerals, and
            other bioactive compounds with potential benefits for postpartum
            recovery and overall well-being.
          </p>
          <span>Potential Benefits of Placenta Therapy</span>
          <p style={{ padding: "1rem 0" }}>
            Placenta therapy is believed to offer a range of potential health
            benefits due to the {"placenta's"} rich nutrient profile and
            biological activity.
          </p>
          <span>These potential benefits include:</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>• Enhanced Immune Function:</span> May support a stronger
            immune system and reduce susceptibility to infections.
          </p>
          <p>
            <span>• Accelerated Recovery and Tissue Regeneration:</span> May
            promote faster healing after injury or surgery, along with overall
            cellular rejuvenation.
          </p>{" "}
          <p>
            <span>• Anti-inflammatory Effects:</span> Could assist in reducing
            inflammation, potentially aiding in pain management and chronic
            conditions.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Improved Hormonal Balance:</span> May help regulate
            hormones, potentially beneficial for postpartum recovery and other
            hormone-related concerns.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Enhanced Skin Health:</span>May support collagen production,
            wound healing, and overall skin appearance.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Improved Blood Circulation and Anemia:</span> Potentially
            assists with blood cell production and circulation, beneficial for
            those with anemic conditions.
          </p>
          <p style={{ paddingBottom: "1rem 0" }}>
            <span>• Body Composition Benefits:</span>May contribute to
            increasing lean muscle mass and reducing body fat.
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
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "2rem 1rem",
          height: "100%",
          background: "#f1f1f1",
        }}
      >
        {" "}
        <div style={{ maxWidth: "500px", width: "100%", marginRight: "2rem" }}>
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `url(${bg})`,
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
             <img loading="lazy"
              src={young}
              style={{
                maxWidth: "380px",
                marginLeft: "8.2rem",
                objectFit: "cover",
                height: "21.97rem",
              }}
            />
          </div>
        </div>
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <span>Potential Benefits of Placenta Therapy:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Increased Energy Levels:</span>May help combat fatigue and
            postpartum depletion
          </p>
          <p>
            <span>• Enhanced Mood:</span> Potential improve mood stability and
            reduce symptoms of postpartum depression.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Improved Lactation:</span> May support milk production for
            breastfeeding mothers.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>•Faster Postpartum Recovery:</span> Could aid in wound healing
            and tissue regeneration Schedule a consultation with us to explore
            of Placenta Therapy aligns with your supplementation needs.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>Important Note:</span>
            While there is anecdotal evidence and some supporting research, more
            studies are needed to fully understand the extent of these benefits
            and potential risks associated with placenta therapy. Consult with
            our doctors before considering this therapy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Placenta;
