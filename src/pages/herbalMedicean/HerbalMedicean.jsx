import additional from "../../assets/SERVICES/additional.jpg";
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import herbal from "../../assets/SERVICES/herbal.jpg";
import individualized from "../../assets/SERVICES/individualized.jpg";
import synergistic from "../../assets/SERVICES/synergistic.jpg";
import proven from "../../assets/SERVICES/proven.jpg";
import holistic from "../../assets/SERVICES/holistic.jpg";

const HerbalMedicean = () => {
  return (
    <div>
      <div
        className="center"
        style={{ background: "#e6e8e7", padding: "2rem 0" }}
      >
        <img
          src={dotes}
          style={{ width: "10rem", position: "absolute", left: 0 }}
        />
        <div className="center">
          <div style={{ maxWidth: "500px", textAlign: "center" }}>
            <div
              style={{
                width: "8rem",
                height: "3px",
                background: "#0a3c57",
                marginRight: "2rem",
                marginBottom: "2rem",
              }}
            />
            <h2>
              THAI HERBAL <br />
              MEDICINE EXPERTISE
            </h2>
            <p>
              <span>Thai Herbal Medicine Expertise:</span> Harnessing the Power
              of Ancient Healing Traditions
              <br />
              Our clinic draws upon the centuries-old wisdom of Thai Herbal
              Medicine, renowned for its potent natural remedies and holistic
              approach to healing. We meticulously select and integrate Thai
              herbal remedies into our treatment protocols, offering a unique
              and powerful approach to enhance wellness and vitality
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "18rem",
              maxWidth: "500px",
              width: "100%",
              marginLeft: "2rem",
            }}
          >
            <div
              style={{
                background: "#0a3c57",
                width: "3rem",
                height: "3rem",
                paddingLeft: "4px",
                paddingTop: "4px",
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "#fff" }}
              />
            </div>
            <img
              src={herbal}
              style={{
                maxWidth: "400px",
                position: "absolute",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            />
            <div
              style={{
                width: "380px",
                background: "#0a3c57",
                height: "",
                paddingLeft: "20px",
                paddingBottom: "15px",
              }}
            >
              <div
                style={{ width: "100%", height: "4rem", background: "#fff" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="center" style={{ padding: "2rem 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            KEY ELEMENTS OF OUR THAI HERBAL MEDICINE APPROACH:
          </h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                maxWidth: "550px",
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={individualized} style={{ maxWidth: "200px" }} />
              <li style={{ maxWidth: "340px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Individualized Formulations:
                </span>{" "}
                Your dedicated practitioner carefully designs an herbal blend
                tailored to your specific needs, health conditions, and goals.
              </li>
            </div>
            <div
              style={{
                maxWidth: "550px",
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={proven} style={{ maxWidth: "200px" }} />
              <li style={{ maxWidth: "340px" }}>
                <span style={{ fontWeight: "bold" }}>Proven Remedies:</span> We
                utiliz herbs with a long history of safe and effective use
                within Traditional Thai Medicine, backed by modern scientific
                research.
              </li>
            </div>
            <div
              style={{
                maxWidth: "550px",
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={synergistic} style={{ maxWidth: "200px" }} />
              <li style={{ maxWidth: "340px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Synergistic Integration:
                </span>{" "}
                Thai Herbal Medicine complements Western medical modalities,
                offering a multi-faceted approach to promote optimal health
                outcomes.
              </li>
            </div>
            <div
              style={{
                maxWidth: "550px",
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <img src={holistic} style={{ maxWidth: "200px" }} />
              <li style={{ maxWidth: "340px" }}>
                <span style={{ fontWeight: "bold" }}>Holistic Focus:</span> We
                address not only physical symptoms but body, mind, and spirit to
                support long-term well-being.
              </li>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            Experience the transformative benefits of Thai Herbal Medicine.
            Schedule a consultation to explore how these ancient remedies can{" "}
            <br />
            empower your journey to optimal health
          </p>
        </div>
      </div>
      <div
        style={{ padding: "2rem 0", background: "#f9f9f9", display: "flex" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "26rem",
              maxWidth: "700px",
              width: "100%",
              marginRight: "2rem",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                background: "#0a3c57",
                width: "3rem",
                height: "3rem",
                paddingRight: "4px",
                paddingTop: "4px",
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "#fff" }}
              />
            </div>
            <img
              src={additional}
              style={{
                maxWidth: "600px",
                position: "absolute",
                marginRight: "0.5rem",
                marginTop: "8px",
              }}
            />
            <div
              style={{
                width: "380px",
                background: "#0a3c57",
                height: "",
                paddingRight: "20px",
                paddingBottom: "12px",
                marginLeft: "2.6rem",
              }}
            >
              <div
                style={{ width: "100%", height: "4rem", background: "#fff" }}
              ></div>
            </div>
          </div>
          <div style={{ padding: "1rem", maxWidth: "600px" }}>
            <h2>
              ADDITIONAL
              <br /> CONSIDERATION
            </h2>
            <p>
              <span>• Specific Examples:</span> We utilize potent Thai herbs
              like Plai (Zingiber cassumunar) for its anti-inflammatory
              properties, Turmeric (Curcuma longa) to support healthy joints and
              digestion, and Andrographis <span>(ฟ้า ทะลายโจร)</span> for its
              immune-boosting and antiviral effects.
            </p>
            <p>
              <span>• Quality Assurance:</span> We are committed to sourcing
              only the highest quality, authentic Thai herbs from reputable
              suppliers and carefully verifying their identity and purity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbalMedicean;
