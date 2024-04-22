import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/bubble-molecule.jpg";

const StemTherapy = () => {
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
          STEM CELL THERAPY
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Stem Cell Therapy:</span> Harnessing the Power of Regeneration
        </p>
        <p style={{ padding: "1rem 0" }}>
          Stem cells are unique cells with the ability to differentiate into
          various specialized cell types. Stem cell therapy aims to utilize
          these cells to promote healing, tissue repair, and overall
          rejuvenation. There are different types of stem cells, and their use
          in regenerative medicine is an exciting and evolving field.
        </p>
        <span>Who Might Benefit from Stem Cell Therapy:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Individuals with degenerative conditions:</span> Conditions
          like osteoarthritis, chronic pain, and certain neurological disorders
          may benefit from the regenerative potential of stem cells.
        </p>
        <p>
          <span>• Injury Recovery:</span> Stem cells may accelerate healing
          after sports injuries, surgeries, or other forms of physical trauma.
        </p>{" "}
        <p>
          <span>• Anti-Aging and Rejuvenation:</span> Stem cell therapy is being
          explored for its potential to support tissue health, reduce
          inflammation, and promote a more youthful appearance.
        </p>
        <span>How Stem Cell Therapy Works:</span>
        <p style={{ paddingBottom: "1rem" }}>
          {" "}
          <span>1. Stem Cell Source:</span> Stem cells can be obtained from
          various sources, including the {"patient's"} own body (e.g., bone
          marrow, fat tissue) or donated sources.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>2. Laboratory Processing:</span> Stem cells are isolated and
          possibly expanded in a laboratory to increase their numbers.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>3. Targeted Administration:</span> Stem cells are then delivered
          into the area of need via injection, IV, or other methods.
        </p>
        <p style={{ paddingBottom: "1rem" }}>
          <span>4. Regeneration and Repair:</span> Stem cells may stimulate the
          {"body's"} natural healing processes, promote tissue regeneration, and
          reduce inflammation.
        </p>
        <span>Potential Benefits of Stem Cell Therapy:</span>
        <p style={{ paddingBottom: "1rem" }}><span>• Pain Reduction:</span>May alleviate chronic pain and improve joint function.</p>
        <p style={{ paddingBottom: "1rem" }}><span>• Tissue Repair:</span> Can potentially stimulate the growth of new, healthy tissues to replace damaged aroas</p>
        <p style={{ paddingBottom: "1rem" }}><span>• Reduced Inflammation:</span> Can decrease inflammation, which plays a role in many chronic diseases.</p>
        <p style={{ paddingBottom: "1rem" }}><span>• Improved Function:</span> May lead to enhanced mobility, flexibility, and overall quality of life.</p>
        <span>Important Considerations:</span>
        <p style={{paddingBottom:"1rem"}}><span>• Individualized Treatment:</span>Storm coll therapy protocols are highly personalized based on {"patient's"} condition and overall haakk the</p>
        <p>
        Discuss with a qualified healthcare professional to explore if stem cell therapy could be an option for you and for your case to understand the potential benefits, risks, and any specific considerations
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

export default StemTherapy;
