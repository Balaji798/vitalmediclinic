import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/smiling-pleased.jpg";

const OzoneTherapy = () => {
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
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>OZONE THERAPY</h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Ozone Therapy:</span> Harnessing the Power of Oxygen
        </p>
        <p style={{ padding: "1rem 0" }}>
          Ozone therapy is a form of alternative medicine that utilizes the
          unique properties of ozone (03), a molecule composed of three oxygen
          atoms. With careful administration by trained professionals, ozone
          therapy is believed to stimulate the {"body's"} natural healing
          abilities and offer several potential benefits.
        </p>
        <span>How Ozone Therapy Works:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Immune System Activation:</span> Ozone may stimulate the
          production of white blood cells and cytokines, key components of a
          robust immune response.
        </p>
        <p>
          <span>• Antioxidant and Anti-inflammatory Effects:</span> Ozone acts
          as a natural antioxidant and may help reduce inflammation throughout
          the body.
        </p>{" "}
        <p style={{paddingBottom:"1rem"}}>
          <span>• Improved Oxygen Delivery:</span> Ozone may enhance oxygen
          utilization by cells, potentially improving circulation and tissue
          health.
        </p>
        <span>Potential Benefits of Ozone Therapy:</span>
        <p>
          {" "}
          <span>• Enhanced Immunity:</span> May help fight infections and
          strengthen overall immune function.
        </p>
        <p>
          {" "}
          <span>• Reduced Inflammation:</span> Potentially beneficial for
          inflammatory conditions such as arthritis and chronic pain.
        </p>
        <p>
          {" "}
          <span>• Accelerated Wound Healing:</span> May promote tissue
          regeneration and faster wound healing.
        </p>
        <p>
          {" "}
          <span>• Circulation Support:</span> May improve blood flow and oxygen
          delivery to tissues.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          {" "}
          <span>• Potential against Infections:</span> {"Ozone's"} antimicrobial
          properties suggest potential uses in addressing various infections.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Consult with a qualified healthcare professional to explore plore if
          Ozone Therapy may support your health goals and determine the
          appropriate treatment protocol.
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

export default OzoneTherapy;
