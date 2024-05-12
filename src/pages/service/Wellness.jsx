import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/massage.jpg";
import bg from "../../assets/conditions/bg.png";
import womanDoctor from "../../assets/wellness/woman-doctor.jpg";
import relax from "../../assets/wellness/relax.jpg";
import relax1 from "../../assets/wellness/relax1.jpg";
//import salt from "../../assets/wellness/salt-scrub.jpg";

const Wellness = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 0 0",
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
            marginTop: "10rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            WELLNESS PROGRAM
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            BODY WORKS & WELLNESS
          </h2>
          <span style={{ padding: "1rem 0" }}>
            Thai Traditional Massage: A Journey of Healing and Revitalization
          </span>
          <p style={{ padding: "1rem 0" }}>
            Thai massage draws from a rich history spanning over 2,000 years,
            blending Indian Ayurvedic traditions and Southeast Asian medicinal
            wisdom. This unique practice combines assisted yoga-like positions,
            acupressure, and the philosophy of energy work to offer a holistic
            experience designed to restore balance and revitalize the body.
          </p>
          <span>{"Here's"} a look at its two main forms.</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>• Traditional Thai Massage:</span> Emphasizes pressure points
            and circulation to promote internal health, often called{" "}
            {"Thai Yoga Massage."} The practitioner guides you through various
            poses and stretches, focusing on muscle release and flexibility,
          </p>
          <p>
            <span>• Thai Herbal Massage:</span> Combines traditional techniques
            with the added benefit of a het herbal compress. This fragrant
            bundle of Thai herbs soothes muscles, stimulates the senses, and
            nourishes the skin.
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
          //justifyContent: "space-between",
          padding: "2rem 0",
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
          <span>Self-Care with Massage:</span>
          <p>
            The Benefits of Thai Tradition Caring for your body and mind is
            essential, and regular massage is an excellent addition to your
            self-care routine.Massage eases muscle tension, relieves stress and
            anxiety, and offers a wide range of benefits. Traditional Thai
            massage, with its distinctive stretching and pressure point
            techniques, is a particularly popular and effective option.
          </p>
          <span>What sets Thai Massage Apart?</span>
          <p>
            Unlike other massage types that often use oils, Thai massage focuses
            on stretching, gentle pulling, and rocking movements. The therapist
            uses their hands, knees, legs, and feet to apply deep muscle
            compression, joint mobilization, and acupressure for a unique
            healing experience.
          </p>
          <span>What to Expect in a Thai Massage Session</span>
          <p>
            <span>• Environment:</span> Thai massage is typically performed on a
            comfortable floor mat in a tranquil space. {"You'll"} wear loose,
            comfortable clothing.
          </p>
          <p>
            <span>• No Oils:</span> Unlike some Western massage styles, Thai
            massage {"doesn't"} use oils or lotions.
          </p>
          <p>
            <span>• Rhythmic Movements:</span> The practitioner will expertly
            use their hands, knees, legs, and feet to apply pressure and gently
            stretch your body in a flowing sequence.
          </p>
          <p>
            <span>• Focus on Energy Lines:</span> Practitioners work with the
            concept of {'"Sen"'} energy lines throughout the body, aiming to
            release blockages and restore healthy energy flow.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${relax})`,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          backgroundSize: "cover",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
        {" "}
        <div style={{ maxWidth: "700px", marginLeft: "-20rem" }}>
          <span>Health Benefits of Thai Traditional Massage</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Stress Relief:</span> The gentle pressure and stretching
            techniques promote deep relaxation, helping to alleviate stress that
            can negatively impact your physical and mental health.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Pain Relief:</span> Thai massage effectively targets back
            pain by releasing muscle tightness, improving core strength, and
            increasing flexibility.
          </p>
          <p>
            <span>• Improved Circulation:</span> The yoga-like stretches enhance
            blood flow, delivering oxygen and nutrients to your tissues for
            faster healing.
          </p>
          <p>
            <span>• Increased Flexibility:</span> * Regular Thai massage
            gradually improves flexibility and range of motion, beneficial for
            overall well-being and athletic performance.
          </p>
          <p>
            <span>• Energy Boost:</span> Based on the concept of energy lines
            {'("sen")'}, Thai massage aims to release blockages that cause
            stiffness and fatigue. This revitalizing approach can benefit
            athletes and anyone seeking a boost in energy levels.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${relax1})`,
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          width: "100%",
          backgroundSize: "cover",
          alignItems: "flex-end",
          padding: "4rem 0",
        }}
      >
        {" "}
        <div style={{ maxWidth: "700px", marginRight: "10rem" }}>
          <span>Who Can Benefit From Thai Massage?</span>
          <p>
            Thai massage is a great choice for people of all ages and fitness
            levels seeking a holistic approach to well-being. It can be
            particularly helpful for those experiencing:
          </p>
          <div style={{display:"flex",flexDirection:"column"}}><span>• Chronic pain</span>
          <span>• Stiffness and limited mobility</span>
          <span>• Stress and anxiety</span>
          <span>• Fatigue</span></div>
          
        </div>
      </div>
    </div>
  );
};

export default Wellness;