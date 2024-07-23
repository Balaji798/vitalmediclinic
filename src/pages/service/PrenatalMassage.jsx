import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/massage.jpg";
import womanBg from "../../assets/wellness/woman-bg.jpg";
import bg from "../../assets/conditions/bg.png";
import womanDoctor from "../../assets/wellness/woman-doctor.jpg";

const PrenatalMassage = () => {
  return (
    <div>
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
          style={{
            width: "10rem",
            position: "absolute",
            left: 0,
            marginLeft: "-3rem",
            marginTop: "15rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            WELLNESS PROGRAM
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            PRENATAL MASSAGE
          </h2>
          <span style={{ padding: "1rem 0" }}>
            Soothe Your Pregnancy Aches and Pains with a Massage from Vital Medi
            Clinic!
          </span>
          <p style={{ padding: "1rem 0" }}>
            <span>Vital Medi Clinic</span> offers a special relaxation massage
            service designed specifically for pregnant women to help them feel
            comfortable physically and mentally.
          </p>
          <span>Can pregnant women get massages? Is it safe?</span>
          <p style={{ padding: "1rem 0" }}>
            Many pregnant women experience aches and pains due to their changing
            bodies and the weight of their growing baby. This can lead to back
            pain, leg pain, swelling, and headaches. Massage can be a safe and
            effective way to relieve these symptoms and improve overall
            well-being.
          </p>
          <span>How can massage benefit pregnant women?</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>• Relieves pain and discomfort:</span> Massage can help to
            relax muscles, improve circulation, and reduce inflammation, which
            can all help to ease pain and discomfort.
          </p>
          <p>
            <span>• Reduces swelling:</span> Massage can help to improve
            lymphatic drainage, which can help to reduce swelling in the legs,
            ankles, and feet.
          </p>{" "}
          <p>
            <span>• Improves sleep:</span> Massage can help to promote
            relaxation and reduce stress, which can lead to better sleep.
          </p>
          <p>
            {" "}
            <span>• Reduces stress and anxiety:</span> Massage can help to
            release endorphins, which have mood-boosting effects.
          </p>
          <p>
            <span style={{ fontWeight: 800 }}>• Improves circulation:</span>{" "}
            Massage can help to improve blood flow throughout the body, which
            can help to deliver nutrients and oxygen to the baby.
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
            <img src={doctorConsultation} className="service-image" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          //justifyContent: "space-between",
          flexWrap:"wrap",
          padding: "0rem 1rem 2rem",
          height: "100%",
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
            <img
              src={womanDoctor}
              style={{
                maxWidth: "312px",
                marginLeft: "8.2rem",
                objectFit: "cover",
                height: "22rem",
              }}
            />
          </div>
        </div>
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h3 style={{ fontWeight: "bold" }}>
            What is different about a pregnancy massage?
          </h3>
          <p style={{ padding: "1rem 0" }}>
            A pregnancy massage should be different from a regular massage in
            several ways:
          </p>
          <span>Common types include:</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>•</span> The massage therapist should be trained in prenatal
            massage techniques. This means that they will know how to avoid
            pressure points and positions that could be harmful to the baby.
          </p>
          <p>
            <span>•</span> The massage should be gentle and light. The therapist
            should not use deep pressure or massage areas that are prone to
            swelling, such as the ankles and feet.
          </p>{" "}
          <p>
            <span>•</span> The pregnant woman should be positioned comfortably.
            The therapist may use pillows or bolsters to support the {"woman's"}{" "}
            back, belly, and legs.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>•</span> The massage should be shorter than a regular massage.
            Most pregnancy massages last about 30 minutes.
          </p>
          <span>How to choose a massage therapist for pregnancy?</span>
          <p>
            When choosing a massage therapist for pregnancy, it is important to
            find someone who is experienced and qualified. You can ask your
            doctor for recommendations, or you can search online for massage
            therapists in your area who specialize in prenatal massage.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${womanBg})`,
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          width: "100%",
          backgroundSize: "cover",
          alignItems: "center",
          padding: "4rem 1rem",
        }}
      >
        {" "}
        <div style={{ maxWidth: "1200px",width:"100%",textAlign:"left"  }}>
          <p style={{ paddingBottom: "0.5rem",maxWidth:"500px" }}>
            Experience the ultimate relaxation and comfort during this special
            time with our specially tailored massages designed to alleviate
            pregnancy-related discomfort and promote overall well-being for both
            mom and baby.
          </p>
          <p style={{ paddingBottom: "0.5rem",maxWidth:"500px" }}>
            Our skilled and caring massage therapists are trained in prenatal
            techniques to ensure a safe and soothing experience for every
            mom-to-be. From relieving back pain and reducing swelling to easing
            muscle tension and improving sleep quality, our prenatal massages
            offer a multitude of benefits for you and your growing baby.
          </p>
          <p style={{maxWidth:"500px"}}>
            Treat yourself to a moment of tranquility and pampering with our
            prenatal massage services. You deserve to feel your absolute best as
            you prepare for the arrival of your little one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrenatalMassage;
