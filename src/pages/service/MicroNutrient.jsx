import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/SERVICES/doctor-consultation.jpg";

const MicroNutrient = () => {
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
          SPECIALIST TESTING
        </h2>
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
         MICRONUTRIENT ANALYSIS
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Micronutrient Analysis:</span> Detailed assessment of vitamin, mineral, and antioxidant levels to uncover deficiencies and guide personalized supplementation.
        </p>
        <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
        Micronutrient Analysis: Your Key to Optimal Health and Well-being
        </p>
        <p style={{ padding: "1rem 0" }}>
        Unlock the key to optimal health: Our Micronutrient Analysis pinpoints vitamin, mineral, and antioxidant deficiencies, allowing for targeted supplementation that supports long-term well-being.
        </p>
        <p style={{padding:"0.5rem 0"}}>Discover hidden imbalances that may be hindering your energy levels, immune function, and overall vitality. Our Micronutrient Analysis provides a precise evaluation of your vitamin, mineral, and antioxidant levels, revealing potential deficiencies.</p>
        <span>Unlock the Benefits:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Sustainable Energy:</span> Address micronutrient gaps that may be causing fatigue.
        </p>
        <p>
          <span>• Stronger Immunity:</span> Support your {"body's"} natural defenses with targeted nutrients.
        </p>{" "}
        <p>
          <span>• Enhanced Well-being:</span> Feel your best with a personalized supplement plan.
        </p>
        <p style={{ padding: "1rem 0" }}>
          {" "}
          <span>• Data-Driven, Personalized Care:</span>  We use your test results to create a supplement strategy<br/> tailored to your unique needs, empowering<br/> you to achieve your health goals.
        </p>
        <span>
        Schedule your Micronutrient Analysis and embark on your journey to optimal wellness!
        </span>
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
            paddingTop:"2rem"
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
}

export default MicroNutrient