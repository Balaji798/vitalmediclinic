/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/detoxify.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import { Helmet } from "react-helmet-async";

const Detoxify = () => {
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
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            IV NUTRITION THERAPY
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            VITAL DETOXIFY (CHELATION) IV DRIP
          </h2>
          <h3>
            Vital Detoxify (Chelation) IV Drip: <br />
            Supporting Your Body's Natural Detoxification Processes
          </h3>
          <p style={{ paddingBottom: "1rem" }}>
            The "Vital Detoxify (Chelation) IV Drip" is an intravenous therapy
            that involves the administration of chelating agents, substances
            that bind to heavy metals in the bloodstream. Chelation therapy is
            primarily used to treat heavy metal poisoning, a serious medical
            condition. In some alternative medicine settings, it's also promoted
            for other conditions, although{" "}
            <span>
              scientific evidence supporting its effectiveness for these uses is
              limited and controversial.
            </span>{" "}
            This drip aims to support the body's natural detoxification
            processes under strict medical supervision.
          </p>
          <h3>What is Chelation Therapy?</h3>
          <p style={{ paddingBottom: "0.5rem" }}>
            Chelation therapy involves the use of chelating agents that bind to
            heavy metals, such as lead, mercury, arsenic, and cadmium, forming
            compounds that can be excreted from the body through urine.
          </p>
          <h3>Approved Medical Uses of Chelation Therapy:</h3>
          <p style={{ paddingBottom: "1rem" }}>
            <span>• Heavy Metal Poisoning:</span>
            <p>
              Chelation therapy is an established and effective treatment for
              acute heavy metal poisoning.
            </p>
          </p>
          <h3>Controversial and Unproven Uses:</h3>
          <p style={{ paddingBottom: "0.5rem" }}>
            Some alternative medicine practitioners promote chelation therapy
            for conditions like:
          </p>
          <span>• Cardiovascular Disease:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Some proponents believe chelation therapy can remove calcium deposits from arteries, although this is not supported by mainstream medical organizations. The NIH sponsored the TACT trial, which has mixed results in using chelation to treat heart disease. It is an ongoing debate in the medical community. 
          </p>
          <span>• Autism Spectrum Disorder:</span>
          <p style={{ paddingBottom: "1rem" }}>
          There is no scientific evidence to support the use of chelation therapy for autism.
          </p>
          <h3>Potential Benefits (Primarily in the context of heavy metal poisoning):</h3>
          <span>• Removal of Heavy Metals:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          Chelating agents can effectively bind to and remove heavy metals from the body.
          </p>
          <span>• Reduced Toxicity:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
          By removing heavy metals, chelation therapy can reduce the toxic effects associated with heavy metal exposure.
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
        style={{
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem 0px 2rem",
        }}
      >
        {" "}
        <div
          style={{
            padding: "1rem",
            textAlign: "center",
            backgroundColor: "#093b56",
            color: "#fff",
            borderRadius: "20px",
            maxWidth: "950px",
          }}
        >
          <h4>Why IV Delivery?</h4>
          <span>
          Resveratrol has limited bioavailability when taken orally, meaning that a significant portion may not be
            <br /> absorbed into the bloodstream. Intravenous (IV) administration bypasses the digestive system, delivering
            <br /> resveratrol directly into the bloodstream for potentially greater absorption and therapeutic effects
          </span>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${therapy})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          objectFit: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexDirection: "column",
          padding: "4rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              paddingBottom: "0.5rem",
              maxWidth: "420px",
              fontSize: "14px",
            }}
          >
            <span>• Personalized For Your Needs:</span> Our IV Nutrition Therapy
            infusions are tailored to your specific health goals and concerns,
            ensuring you receive the optimal blend of nutrients.
          </p>
          <p
            style={{ fontWeight: "bold", maxWidth: "420px", fontSize: "14px" }}
          >
            Experience the difference. Schedule your IV Nutrition Therapy
            consultation today and revitalize your health from within!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detoxify;
