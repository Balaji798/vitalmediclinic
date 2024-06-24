import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/male-patient.jpg";

const MensTherapy = () => {
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
          {"MEN'S"} HEALTH THERAPY
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>{"Men's"} Health Therapy:</span> Optimize Performance, Vitality,
          and Well-being.
        </p>
        <p style={{ padding: "1rem 0" }}>
          Our specialized {"men's"} health therapies are designed to address the
          unique challenges men face, targeting key areas to enhance your
          quality of life.
        </p>
        <span>Potential Benefits for Men:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Revitalized Sexual Health:</span> Boost sexual function,
          libido, and overall satisfaction.
        </p>
        <p>
          <span>• Enhanced Fertility:</span> Support healthy sperm production
          and reproductive function.
        </p>{" "}
        <p>
          <span>• Metabolic Regulation:</span> Manage diabetes, hypertension,
          cholesterol, and triglycerides for improved cardiovascular health.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          {" "}
          <span>• Pain Reduction:</span> Alleviate chronic pain and inflammation
          to enhance mobility and well-being.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Accelerated Recovery:</span> Speed up healing after injury or
          surgery, promoting tissue regeneration.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Stronger Immunity:</span> Bolster your {"body's"} defenses against
          illness and infection. </p>
          <p><span>• Boosted Energy and Focus:</span> Combat fatigue,
          improve mental alertness, and enhance productivity.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Improved Sleep:</span> Experience deeper, more restorative sleep for better overall health.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Optimized Body Composition:</span> Increase lean muscle mass and reduce body fat for a healthier physique.
        </p>
        <p style={{ fontWeight: "bold" }}>
        Take control of your health and achieve your best self. Schedule your {"Men's"} Health Therapy consultation today!
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

export default MensTherapy;
