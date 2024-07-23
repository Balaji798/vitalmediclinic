import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/female-doctor.jpg";

const WomenTherapy = () => {
  return (
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
          {"WOMEN'S"} HEALTH THERAPY
        </h2>
        <p style={{ padding: "1rem 0" }}>
          <span>{"Women's"} Health Therapy:</span> Optimize Your Well-being and
          Radiance.
        </p>
        <p style={{ padding: "1rem 0" }}>
          Our targeted {"women's"} health therapies address your unique needs
          throughout different life stages, supporting overall health, vitality,
          and a sense of balance.
        </p>
        <span>Potential Benefits for Women:</span>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Radiant Skin:</span> Promote collagen production for firmer,
          more youthful-looking skin. Enhance skin health, wound healing, and
          reduce the appearance of imperfections.
        </p>
        <p>
          <span>• Healthy Metabolism:</span> Support weight loss goals, optimize
          metabolism, and achieve a healthier body composition.
        </p>{" "}
        <p>
          <span>• Fertility and Reproductive Health:</span> Enhance fertility
          potential and promote healthy reproductive function.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          {" "}
          <span>• Hormonal Balance:</span> Regulate menstruation, boost sex
          drive, and ease menopausal symptoms for greater comfort and
          well-being.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Stronger Immunity:</span> Build a resilient immune system to
          fight off infections and maintain optimal health.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Pain and Inflammation Relief:</span> Alleviate chronic pain
          and inflammation for greater mobility and comfort.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Cardiovascular Health:</span> Manage cholesterol,
          triglycerides, and blood circulation for a healthier heart.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Experience the transformative power of our {"Women's"} Health
          Therapies. Schedule your consultation today and begin your journey to
          optimal wellness.
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
            className="service-image"
          />
        </div>
      </div>
    </div>
  );
};

export default WomenTherapy;
