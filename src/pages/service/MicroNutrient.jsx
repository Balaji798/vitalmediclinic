import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/SERVICES/doctor-consultation.jpg";
import happy from "../../assets/SERVICES/happy-couple.jpg";
import senior from "../../assets/SERVICES/senior-couple.jpg";
import asian from "../../assets/SERVICES/asian-senior.jpg";

const MicroNutrient = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 0",

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
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            SPECIALIST TESTING
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            MICRONUTRIENT ANALYSIS
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>Micronutrient Analysis:</span> Detailed assessment of vitamin,
            mineral, and antioxidant levels to uncover deficiencies and guide
            personalized supplementation.
          </p>
          <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
            Micronutrient Analysis: Your Key to Optimal Health and Well-being
          </p>
          <p style={{ padding: "1rem 0" }}>
            Unlock the key to optimal health: Our Micronutrient Analysis
            pinpoints vitamin, mineral, and antioxidant deficiencies, allowing
            for targeted supplementation that supports long-term well-being.
          </p>
          <p style={{ padding: "0.5rem 0" }}>
            Discover hidden imbalances that may be hindering your energy levels,
            immune function, and overall vitality. Our Micronutrient Analysis
            provides a precise evaluation of your vitamin, mineral, and
            antioxidant levels, revealing potential deficiencies.
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:"2rem 0 1rem"
        }}
      >
        <div style={{ maxWidth: "1100px", display: "flex",alignItems:"center" }}>
          <div style={{maxWidth:"28rem", paddingLeft: "1rem", borderLeft: "5px solid",height:"19rem" }}>
            <img
              src={happy}
              style={{ width: "24rem", objectFit: "cover", height: "6rem" }}
            />
            <img
              src={senior}
              style={{ width: "24rem", objectFit: "cover", height: "6rem" }}
            />
            <img
              src={asian}
              style={{ width: "24rem", objectFit: "cover", height: "6rem" }}
            />
          </div>
          <div style={{width:"100%"}}>
            <span>Unlock the Benefits:</span>
            <p style={{ paddingTop: "1rem" }}>
              <span>• Sustainable Energy:</span> Address micronutrient gaps that
              may be causing fatigue.
            </p>
            <p>
              <span>• Stronger Immunity:</span> Support your {"body's"} natural
              defenses with targeted nutrients.
            </p>{" "}
            <p>
              <span>• Enhanced Well-being:</span> Feel your best with a
              personalized supplement plan.
            </p>
            <p style={{ padding: "1rem 0" }}>
              {" "}
              <span>• Data-Driven, Personalized Care:</span> We use your test
              results to create a supplement strategy
               tailored to your unique needs, empowering
              you to achieve your health goals.
            </p>

          </div>
        </div>
      </div>
      <p style={{textAlign:"center",paddingBottom:"1rem",fontWeight:"bold"}}>
      Schedule your Micronutrient Analysis and embark on your journey to
      optimal wellness!
    </p>
    </div>
  );
};

export default MicroNutrient;
