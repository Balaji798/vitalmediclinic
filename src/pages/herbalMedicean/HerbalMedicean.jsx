import additional from "../../assets/SERVICES/additional.jpg";
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import herbal from "../../assets/SERVICES/herbal.jpg";
import individualized from "../../assets/SERVICES/individualized.jpg";
import synergistic from "../../assets/SERVICES/synergistic.jpg";
import proven from "../../assets/SERVICES/proven.jpg";
import holistic from "../../assets/SERVICES/holistic.jpg";
import service from "../../assets/servic-pic-20.jpg";
import midsection from "../../assets/midsection.jpg";
import service1 from "../../assets/servic-pic-05.png";
import service2 from "../../assets/servic-pic-06.png";
import service3 from "../../assets/servic-pic-07.png";
import service4 from "../../assets/servic-pic-08.png";
import doc from "../../assets/medical-doctor.jpg";
import composition from "../../assets/composition.jpg";
import doctor from "../../assets/female-doc.jpg";

const HerbalMedicean = () => {
  const data = [
    {
      title: "PAIN MANAGEMENT",
      para: "Exploring alternatives to traditional pain medication for various chronic pain conditions",
      icon: service2,
    },
    {
      title: "MOOD REGULATION",
      para: "Addressing symptoms of anxiety, depression, and stress-related disorders.",
      icon: service3,
    },
    {
      title: "SLEEP SUPPORT",
      para: "Investing potential sleep-promoting effects.",
      icon: service1,
    },
    {
      title: "ENHANCED WELL-BEING",
      para: "Supporting overall health and quality of life, particularly in cases where conventional treatments may not provide sufficient relief",
      icon: service4,
    },
  ];
  const data2 = [
    {
      title: "PERSONALIZED ASSESSMENTS",
      para: "Thorough evolution of your individual needs, medical history, and potential risks before recommending cannabis or kratom therapies",
      icon: doc,
    },
    {
      title: "EVIDENCE-BASED GUIDANCE",
      para: "We stay informed about the latest research and utilize the appropriate forms and dosages.",
      icon: doctor,
    },
    {
      title: "COLLABORATIVE CARE",
      para: "Integrating cannabis or kratom therapies as part of a comprehensive treatment plan that may include other modalities.",
      icon: composition,
    },
  ];
  return (
    <div>
      <div
        className="center"
        style={{ background: "#e6e8e7", padding: "2rem 0rem" }}
      >
        <img
          src={dotes}

           className="content-position"
          style={{ width: "10rem", left: 0 }}
        />
        <div className="center" style={{flexWrap:"wrap",maxWidth:"1200px",width:"100%"}}>
          <div style={{ maxWidth: "500px", textAlign: "center",padding:"0 1rem" }}>
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
              className="service-image1"
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
      <div className="center" style={{ padding: "2rem 1rem" }}>
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
                flexWrap:"wrap"
              }}
            >
              <img src={individualized} className="herbal-img" />
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
                flexWrap:"wrap"
              }}
            >
              <img src={proven} className="herbal-img" />
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
                flexWrap:"wrap"
              }}
            >
              <img src={synergistic} className="herbal-img" />
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
                flexWrap:"wrap"
              }}
            >
              <img src={holistic} className="herbal-img" />
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
      <div
        style={{
          backgroundImage: `url(${service})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          objectFit: "cover",
          height: "15rem",
          display: "flex",
          justifyContent: "flex-end",
          //alignItems: "flex-end",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
            width: "100%",
            textAlign: "left",
            color: "#fff",
          }}
        >
          <h3 style={{ maxWidth: "300px", borderBottom: "2px solid" }}>
            CANNABIS AND KARTOM <br /> THERAPY
          </h3>
          <p
            style={{
              paddingBottom: "0.5rem",
              maxWidth: "600px",
              fontWeight: "normal",
            }}
          >
            Under the guidance of experienced professionals, we offer
            therapeutic interventions utilizing cannabis and kratom, responsibly
            exploring their potential benefits in pain management, mood
            regulation, sleep support, stress relief, and overall well-being.
          </p>
        </div>
      </div>
      <div
        style={{
          padding: "2rem 0",
          background: "#f9f9f9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              padding: "1rem",
              paddingRight: "0",
              maxWidth: "600px",
              textAlign: "right",
            }}
          >
            <h2>
              EXPLORING EMERGING
              <br /> TREATMENT OPTIONS
            </h2>
            <p>
              Our clinic recognizes the growing interest in the potential
              therapeutic benefits of cannabis and kartom. We offer carefully
              guidance therapeutic interventions with these plant-based
              sustainable under the supervision of experienced healthcare
              professionals.
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
              src={midsection}
              style={{
                maxWidth: "400px",
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
        </div>
      </div>
      <div
        className="center"
        style={{ background: "#0a3c57", flexDirection: "column" }}
      >
        <div style={{ maxWidth: "700px", padding: "2rem 1rem" }}>
          <h3
            style={{
              color: "#fff",
              textAlign: "center",
              paddingBottom: "2rem",
            }}
          >
            POTENTIAL APPLICATIONS OF CANNABIS AND KRATOM THERAPIES
          </h3>
          <div>
            {data.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  flexWrap:"wrap",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  marginBottom: "1rem",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "10px",
                  marginLeft: index % 2 === 0 ? "0" : "4rem",
                  marginRight: index % 2 === 0 ? "4rem" : "0",
                }}
              >
                <img src={item.icon} style={{ width: "6rem" }} />
                <div
                  style={{
                    padding: "0 0.5rem",
                    textAlign: index % 2 === 0 ? "left" : "right",
                  }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="center">
        <div style={{ maxWidth: "1050px",width:"100%", padding: "2rem 1rem" }}>
        <h3 style={{textAlign:"center"}}>OUR RESPONSIBLE APPROACH</h3>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              color: "#000",
            }}
          >
            {data2.map((item, index) => (
              <div key={index} style={{ maxWidth: "330px", width: "100%" }}>
                <img src={item.icon} style={{ width: "100%" }} />
                <h4 style={{ padding: "0.5rem" }}>{item.title}</h4>
                <p>{item.para}</p>
              </div>
            ))}
          </div>
          <p style={{paddingTop:"1rem"}}><span>Important Note:</span> Cannabis and kratom therapies are evolving fields of medicine. We emphasize transparency, ongoing monitoring, and patient education to ensure safe and responsible exploration of their potential benefits</p>
        </div>
      </div>
    </div>
  );
};

export default HerbalMedicean;
