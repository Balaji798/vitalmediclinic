/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import leaf from "../../assets/healthCheckUp/treatment-2.jpg";
import doctorConsultation from "../../assets/healthCheckUp/cannabis-treatment.webp";
import blueBack from "../../assets/about-us/about-us-BG.webp";
import cosmetic from "../../assets/healthCheckUp/treatment-3.jpg";
import closeup from "../../assets/healthCheckUp/treatment-4.jpg";
import treatment from "../../assets/healthCheckUp/treatment-5.jpg";

const TherapeuticTreatment = () => {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Weight Management Bangkok, Thailand | Vital Medi Clinic</title>

        <meta
          name="keywords"
          content="Weight Management Bangkok, Weight Management, Weight Management Thailand"
        />

        <meta
          name="description"
          content="Experience rejuvenating Weight management in Bangkok. Advanced treatments for enhanced wellness and skin health."
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
            marginTop: "20rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h3 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            THAI TRADITIONAL THERAPEUTIC TREATMENT
          </h3>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            CANNABIS TREATMENT
          </h2>

          <p style={{ paddingBottom: "1rem " }}>
            We offer personalized cannabis-based therapies, under the guidance
            of our medical professionals, to explore potential benefits for pain
            management, mood regulation, sleep support, and overall well-being.
          </p>
          <p style={{ paddingBottom: "1rem " }}>
            At Vital Medi Clinic, we recognize the growing interest in the
            therapeutic potential of cannabis, also known as medical marijuana.
            Our team of qualified healthcare professionals is dedicated to
            providing safe, effective, and personalized cannabis treatment plans
            for patients who may benefit from this alternative therapy.
          </p>
          <span>Potential Benefits of Cannabis Treatment</span>
          <p style={{ paddingBottom: "1rem " }}>
            Cannabis contains various compounds, including cannabinoids like CBD
            (cannabidiol) and THC (tetrahydrocannabinol), that interact with the
            body's endocannabinoid system. This system plays a role in
            regulating various functions, including pain, mood, sleep, appetite,
            and immune response. Research suggests that cannabis treatment may
            offer potential benefits for a range of conditions, such as:
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Chronic Pain Management:</span>
            <p>
              Cannabis may help reduce chronic pain associated with conditions
              like neuropathy, arthritis, and multiple sclerosis.
            </p>
          </p>
          <span>• Nausea and Vomiting:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Particularly beneficial for patients undergoing chemotherapy.
          </p>
          <span>• Muscle Spasms:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Cannabis may help alleviate muscle spasms, particularly in
            conditions like multiple sclerosis.
          </p>
          <span>• Sleep Disorders:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Certain cannabinoids may improve sleep quality and duration.
          </p>
          <span>• Anxiety and Depression:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some studies suggest that CBD may have anxiolytic (anxiety-reducing)
            and antidepressant effects.
          </p>
          <span>• Appetite Stimulation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            THC can help stimulate appetite, which may be beneficial for
            patients with conditions like HIV/AIDS or cancer.
          </p>
          <span>• Inflammation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some cannabinoids have anti-inflammatory properties.
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
              loading="lazy"
              src={doctorConsultation}
              className="service-image"
            />
          </div>
        </div>
      </div>
      <div
        className="center"
        style={{
          backgroundImage: `url(${blueBack})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          flexDirection: "column",
          color: "#fff",
          padding: "2rem 10px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          OUR APPROACH TO CANNABIS TREATMENT
        </h2>
        <p>
          We believe in a patient-centered approach to cannabis treatment.
          <br /> We understand that each individual is unique, and treatment
          plans should be tailored to <br />
          specific needs and medical history.
        </p>
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
                color:'#000',
                borderRadius: "39px",
                overflow: "hidden",
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
                  height: '10rem'
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Comprehensive Evaluation",
    content:
      "Our medical professionals will conduct a thorough evaluation, including a review of your medical history, current medications, and treatment goals.",
    image: leaf,
  },
  {
    title: "Personalized Treatment Plans",
    content:
      "Based on your individual needs, we will develop a personalized treatment plan that may include cannabis therapy. This plan will specify the type of cannabis product, dosage, and method of administration.",
    image: cosmetic,
  },
  {
    title: "Ongoing Monitoring And Support",
    content:
      "We will closely monitor your progress and make adjustments to your treatment plan as needed. Our team is available to answer your questions and provide ongoing support throughout your journey.",
    image: closeup,
  },
  {
    title: "Education And Guidance",
    content:
      "We are committed to educating our patients about the safe and responsible use of medical cannabis.",
    image: treatment,
  },
];
export default TherapeuticTreatment;
