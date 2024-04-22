import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/healthCheckUp/food-allergy.jpg";

const AllergiesTesting = () => {
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
          FOOD ALLERGY AND INTOLERANCE TESTING
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>Food Allergy and Intolerance Testing:</span> Identify potential
          sensitivities and intolerances to optimize dietary choices and gut
          health.
        </p>
        <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
          {'" The Key to Uncovering Hidden Food Sensitivities"'}
        </p>
        <p style={{ padding: "1rem 0" }}>
          Unlock the Secrets to Better Digestion and Well-being: Discover Your
          Food Sensitivities and Intolerances
        </p>
        <p>
          Are you struggling with unexplained digestive problems, constar
          fatigue, or persistent skin issues? Our Food Allergy and Intolerance
          Testing offers personalized insights to help you pinpoint potential
          triggers and take control of your health.
        </p>
        <div className="center" style={{ flexDirection: "column" }}>
          <div style={{ maxWidth: "540px", padding: "1rem 0 0.5rem" }}>
            <p style={{ fontWeight: "bold" }}>
              Benefits of Food Sensitivity Testing:
            </p>
            <p style={{ paddingTop: "1rem" }}>
              <span>• Improved Gut Health:</span> Optimize digestion and reduce uncomfortable
              symptoms.
            </p>
            <p>
              <span>• Enhanced Energy Levels:</span> Identify foods that may be draining your energy.
            </p>{" "}
            <p>
              <span>• Clearer Skin:</span> Address potential dietary causes of skin concerns.
            </p>
            <p style={{ paddingBottom: "1rem" }}>
              {" "}
              <span>• Overall Well-being:</span> Feel your best by uncovering hidden food sensitivities. Take action today! Schedule your Food Allergy and Intolerance Testing and start your journey towards better health.
            </p>
          </div>
        </div>
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

export default AllergiesTesting;
