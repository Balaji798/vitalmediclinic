import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/conditions/skin-adolescents.jpg";
import bg from "../../assets/conditions/bg.png";

const SkinDisorder = () => {
  return (
    <div>
      <div
className="service"
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
            MEDICAL CONDITIONS
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            SKIN DISORDERS
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>Skin Disorders:</span> Understanding Psoriasis, Rosacea,
            Lupus, and Our Treatment Approach.
          </p>
          <p style={{ padding: "1rem 0" }}>
            <span>Psoriasis:</span> A chronic autoimmune condition characterized
            by overactive skin cell production, leading to thick, scaly patches
            that can be red, itchy, and sometimes painful
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>Rosacea:</span> common inflammatory skin condition causing
            facial redness, flushing, visible blood vessels, and sometimes
            acne-like bumps.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>Lupus:</span> An autoimmune disease impacting multiple body
            systems, including the skin. Cutaneous (skin) lupus can manifest as
            rashes, including a distinctive butterfly-shaped rash across the
            nose and cheeks, sensitivity to sunlight, and hair loss.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>Our Regenerative Approach to Skin Disorders:</span>
            <br /> We focus on addressing the underlying Imbalances contributing
            to skin conditions rather than just suppressing symptoms. Our aim is
            to support your {"body's"} natural healing abilities, decrease
            inflammation, and promote healthy skin regeneration.
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
      <div
        style={{
          display: "flex",
          flexWrap:"wrap",
          padding: "2rem 1rem",
          height: "100%",
        }}
      >
        <div style={{ maxWidth: "600px", width: "100%" }}>
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `url(${bg})`,
              width: "100%",
              maxWidth: "540px",
              display: "flex",
              justifyContent: "center",
              height: "30rem",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              paddingTop: "2rem",
            }}
          >
            <img
              src={doctorConsultation}
              style={{
                maxWidth: "334px",
                marginLeft: "8.5rem",
                objectFit: "cover",
                height: "23.75rem",
                marginTop: "0rem",
              }}
            />
          </div>
        </div>
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <span>Personalized Treatment Plans:</span>
          <p style={{ padding: "1rem 0" }}>
            <span>• Thorough Assessment:</span> We delve into your individual
            health history, lifestyle factors, and the specific nature of your
            skin condition.
          </p>
          <p>
            <span>• Custom Tailored Program:</span> Your treatment plan may
            incorporate a combination or
          </p>
          <div className="center" style={{ flexDirection: "column" }}>
            <div style={{ maxWidth: "580px" }}>
              <p style={{ paddingTop: "0.4rem" }}>
                <span>o Advanced Therapies:</span> Options like Stem Cell
                Therapy of Ozone Therapy may be considered to bolster tissue
                repair and modulate immune function.
              </p>
              <p>
                <span>o Nutritional Support:</span> Targeted supplements and
                dietary guidance to address any deficiencies and optimize skin
                health.
              </p>{" "}
              <p>
                <span>o Lifestyle Recommendations:</span> We address stress
                management, sleep, and other factors that impact skin health.
              </p>
              <p style={{ paddingBottom: "0.5rem" }}>
                {" "}
                <span>o Traditional and Modern Therapies:</span> Where appropriate, we may integrate proven or medications within a broader regenerative approach.
              </p>
            </div>
            <p><span>Our Commitment to Results:</span> {"We've"} seen significant improvements for our patients, with reduce inflammation, health skin, and enhanced overall well-being The timing of results will vary bused.</p>
            <span>Experience the difference. Schedule a consultation to explore how our personalized approach can help you achieve healthier, more radiant skin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinDisorder;
