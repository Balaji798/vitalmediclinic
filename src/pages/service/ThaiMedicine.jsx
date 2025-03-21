/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import ATTM1 from "../../assets/ATTM-1.webp";
import ATTM2 from "../../assets/ATTM-2.webp";
import ATTM3 from "../../assets/ATTM-3.jpg";
import ATTM4 from "../../assets/ATTM-4.jpg";
import ATTM5 from "../../assets/ATTM-5.jpg";
import ATTM6 from "../../assets/ATTM-6.jpg";
import ATTM7 from "../../assets/ATTM-7.jpg";
import headMassage from "../../assets/head-massage.webp";
import bg from "../../assets/bg-brown.webp";
import { Helmet } from "react-helmet-async";

const data = [
  {
    title: "Experienced Practitioners",
    para: "Our practitioners are highly trained and certified in traditional Thai medicine, ensuring safe and effective treatments.",
    image: ATTM3,
  },
  {
    title: "Authentic Approach",
    para: "We are committed to preserving the authenticity and integrity of traditional Thai healing practices.",
    image: ATTM4,
  },
  {
    title: "Personalized Care",
    para: "We take the time to understand your individual needs and develop a tailored treatment plan to address your specific concerns.",
    image: ATTM5,
  },
  {
    title: "Holistic Wellness",
    para: "We believe in treating the whole person, not just the symptoms, to promote long-term health and well-being.",
    image: ATTM6,
  },
  {
    title: "Integration With Modern Medicine",
    para: "ATTM can be used safely alongside conventional medical treatments.",
    image: ATTM7,
  },
];
const ThaiMedicine = () => {
  return (
    <div>
      <Helmet>
        <title>
          Thai Traditional Massage Therapy Centre Bangkok | Vital Medi Clinic
        </title>

        <meta
          name="keywords"
          content="Thai Traditional Massage, Thai Traditional Massage therapy, Thai Traditional Massage Bangkok"
        />

        <meta
          name="description"
          content="Experience Thai traditional massage in Bangkok. Unique therapy combining acupressure and yoga-like positions for complete body balance."
        />
      </Helmet>
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
          loading="lazy"
          src={dotes}
          className="content-position"
          style={{
            width: "10rem",
            left: 0,
            marginLeft: "-3rem",
            marginTop: "10rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "rgba(155, 129, 105, 0.6)", fontWeight: "bold" }}>
            ATTM TREATMENTS
          </h2>
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
              paddingBottom: "1rem",
              color: "#9B8169",
            }}
          >
            APPLIED THAI TRADITIONAL MEDICAL
          </h2>
          <h3 style={{ color: "#585858" }}>
            Discover the Healing Power of Applied Thai Traditional Medicine
            (ATTM)
          </h3>
          <p style={{ paddingBottom: "1rem", color: "#9B8169" }}>
            At Vital Medi Clinic, we are proud to offer the ancient wisdom and
            therapeutic benefits of Applied Thai Traditional Medicine (ATTM).
            Rooted in centuries of tradition and incorporating elements of
            Ayurveda and Traditional Chinese Medicine, ATTM is a holistic
            healing system that focuses on restoring balance and harmony within
            the body.
          </p>
          <h3 style={{ color: "#585858" }}>
            What is Applied Thai Traditional Medicine?
          </h3>
          <p style={{ paddingBottom: "1rem", color: "#9B8169" }}>
            ATTM is a comprehensive system of healthcare that has been practiced
            in Thailand for over 2,500 years. It views the body as an
            interconnected network of energy pathways, known as "Sen" lines.
            When these pathways are blocked or imbalanced, illness and
            discomfort can arise. ATTM utilizes a variety of techniques to
            restore the free flow of energy, promote self-healing, and maintain
            overall well-being.
          </p>
          <h3 style={{ color: "#585858" }}>Key Principles of ATTM:</h3>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span style={{ color: "#585858" }}>• Holistic Approach:</span>
            <p style={{ color: "#9B8169" }}>
              ATTM considers the physical, mental, and emotional aspects of
              health as interconnected and equally important.
            </p>
          </p>
          <span style={{ color: "#585858" }}>• Balance of Elements:</span>
          <p style={{ paddingBottom: "0.5rem", color: "#9B8169" }}>
            ATTM emphasizes the balance of the four elements (Earth, Water,
            Wind, and Fire) within the body.
          </p>
          <span style={{ color: "#585858" }}>• Energy Flow:</span>
          <p style={{ paddingBottom: "0.5rem", color: "#9B8169" }}>
            Maintaining the free flow of energy ("Lom") through the Sen lines is
            crucial for health.
          </p>
          <span style={{ color: "#585858" }}>• Individualized Treatment:</span>
          <p style={{ paddingBottom: "0.5rem", color: "#9B8169" }}>
            ATTM practitioners tailor treatments to each patient's unique
            constitution and health concerns.
          </p>
        </div>
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `url(${ATTM1})`,
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              justifyContent: "center",
              height: "28rem",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              paddingTop: "2rem",
            }}
          />
        </div>
      </div>
      <div
        className="center"
        style={{
          backgroundColor: "#D2AF8F",
          flexDirection: "column",
          color: "#fff",
          padding: "2rem 10px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          ATTM TREATMENTS OFFERED <br />
          AT VITAL MEDI CLINIC
        </h2>
        <p>
          Our skilled and certified ATTM practitioners offer a range of
          traditional therapies, including:
        </p>
        <div className="center" style={{ gap: "20px", padding: "1rem 0px" }}>
          <img src={ATTM2} style={{ maxWidth: "550px" }} />
          <div
            style={{
              maxWidth: "450px",
              width: "100%",
              fontSize: "14px",
            }}
          >
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              <span>• Thai Massage (Nuad Thai):</span>A therapeutic massage that
              combines acupressure, stretching, and assisted yoga postures to
              release muscle tension, improve flexibility, and promote
              relaxation.
            </p>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              <span>• Acupressure (นวดกดจุด):</span>Applying pressure to
              specific points along the Sen lines to stimulate energy flow and
              relieve pain.
            </p>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              <span>• Thai Herbal Compress Massage (นวดลูกประคบ):</span>{" "}
              Utilizing a vast pharmacopoeia of Thai herbs, prepared as teas,
              compresses, balms, or inhalants, to address various health
              conditions. relieve pain.
            </p>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              <span>• Oil Pourtice (กักน้ำมัน):</span> Applying heated herbal
              compresses to the body to soothe muscles, reduce inflammation, and
              improve circulation.
            </p>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              <span>• Herbal Inhalation (สุมยา):</span> Inhaling aromatic herbs
              to clear the respiratory system, relieve headaches, and promote
              mental clarity.
            </p>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              <span>• Cupping Therapy (ครอบแก้ว):</span> Using heated glass cups
              to create suction on the skin, drawing out toxins, improving blood
              flow, and relieving muscle tension.
            </p>
          </div>
        </div>
      </div>
      <div
        className="center"
        style={{
          flexDirection: "column",
          color: "#9B8169",
          padding: "2rem 10px",
        }}
      >
        <div className="center" style={{ gap: "20px", padding: "1rem 0px" }}>
          <div
            style={{
              maxWidth: "450px",
              width: "100%",
              fontSize: "14px",
              textAlign: "right",
            }}
          >
            <h3
              style={{
                paddingBottom: "1rem",
              }}
            >
              Specialized Massage Techniques: <br></br>We offer a variety of
              specialized massages <br />
              tailored to specific needs, including:
            </h3>
            <span>• Migraine Massage:</span>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              To alleviate headache pain and tension.
            </p>
            <span>• Office Syndrome Massage:</span>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              To address pain and stiffness associated with prolonged computer
              use.
            </p>
            <span>• Neck, Shoulder, and Upper Back Massage:</span>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              To relieve tension and improve posture.
            </p>
            <span>• Constipation Massage:</span>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              To promote bowel regularity.
            </p>
            <span>• Plantar Fasciitis Massage:</span>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              To address heel pain and inflammation.
            </p>
            <span>• Prenatal Massage:</span>
            <p
              style={{
                paddingBottom: "0.5rem",
              }}
            >
              To provide safe and effective relief for expectant mothers.
            </p>
          </div>
          <img src={headMassage} style={{ maxWidth: "550px" }} />
        </div>
      </div>
      <div
        className="center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          flexDirection: "column",
          color: "#fff",
          padding: "2rem 10px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          WHY CHOOSE ATTM AT VITAL MEDI CLINIC
        </h2>
        <div
          className="center"
          style={{
            gap: "20px",
            padding: "1rem 0px",
            flexWrap: "wrap",
            maxWidth: "950px",
            width: "100%",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                maxWidth: "450px",
                width: "100%",
                textAlign: "center",
                backgroundColor: "#fff",
                borderRadius: "39px",
                overflow: 'hidden'
              }}
            >
              <img
                src={item.image}
                style={{
                  width: "100%",
                }}
              />
              <div
                style={{
                  padding: "1rem 10px",
                }}
              >
                <h3 style={{ color: "#585858" }}>{item.title}</h3>
                <p style={{ color: "#9B8169" }}>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThaiMedicine;
