import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/micro-sensory.jpg";

const Placenta = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem 0",
        minHeight: "50rem",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "15rem",
          height: "10px",
          background: "#0a3c57",
          marginTop: "3.4rem",
        }}
      />
      <img
        src={dotes}
        style={{
          width: "10rem",
          position: "absolute",
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
          the placenta, a nutrient-rich organ that develops during pregnancy to
          support fetal growth. This practice draws from the belief that the
          placenta contains valuable hormones, vitamins, minerals, and other
          bioactive compounds with potential benefits for postpartum recovery
          and overall well-being.
        </p>
        <span>Potential Benefits of Placenta Therapy</span>
        <p style={{ padding: "1rem 0" }}>
          Placenta therapy is believed to offer a range of potential health
          benefits due to the {"placenta's"} rich nutrient profile and
          biological activity.
        </p>
        <span>These potential benefits include:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Enhanced Immune Function:</span> May support a stronger immune
          system and reduce susceptibility to infections.
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
        <p style={{ paddingBottom: "1rem" }}>
          {" "}
          <span>• Improved Hormonal Balance:</span> May help regulate hormones,
          potentially beneficial for postpartum recovery and other
          hormone-related concerns.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Enhanced Skin Health:</span>May support collagen production,
          wound healing, and overall skin appearance.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Improved Blood Circulation and Anemia:</span> Potentially
          assists with blood cell production and circulation, beneficial for
          those with anemic conditions.
        </p>
        <p style={{ paddingBottom: "1rem 0" }}>
          <span>• Body Composition Benefits:</span>May contribute to increasing
          lean muscle mass and reducing body fat.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          {" "}
          <span>• Important Note:</span>
          While there is anecdotal evidence and some supporting research, more
          studies are needed to fully understand the extent of these benefits
          and potential risks associated with placenta therapy. Consult with a
          qualified healthcare professional before considering this therapy.
        </p>
        <span>Potential Benefits of Placenta Therapy:</span>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Increased Energy Levels:</span>May help combat fatigue and
          postpartum depletion Enhanced Mood: Potential improve mood stability
          and reduce symptoms of postpartum depression.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>• Improved Lactation:</span> May support milk production for breastfeeding mothers.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>•Faster Postpartum Recovery:</span> Could aid in wound healing and tissue regeneration Schedule a consultation to explore of Placenta Therapy aligns with yo supplementation needs.
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
            src={doctorConsultation}
            style={{
              maxWidth: "312px",
              marginLeft: "-7.01rem",
              objectFit: "cover",
              height: "22rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Placenta;
