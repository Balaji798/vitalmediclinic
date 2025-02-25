import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/conditions/asian-physiotherapist.jpg";
import service from "../../assets/conditions/sevice-pic-47.jpg";
import { Helmet } from "react-helmet-async";

const AlzheimerDisease = () => {
  return (
    <div>
      <Helmet>
        <title>{"Alzheimer's"} Disease Treatment in Bangkok, Thailand</title>

        <meta
          name="keywords"
          content="Alzheimer's Disease Treatment in Bangkok, Alzheimer's Disease Treatment in Thailand"
        />

        <meta
          name="description"
          content="Specialized Alzheimer's disease treatment in Bangkok, Thailand. Comprehensive care for memory loss and cognitive decline. Book your consultation now."
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
         <img loading="lazy"
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
            {"ALZHEIMER'S"} DISEASE
          </h2>
          <p style={{ padding: "1rem 0" }}>
            {"Alzheimer's"} Disease is a progressive neurodegenerative disorder
            that leads to memory loss, cognitive decline, and behavioral
            changes. While its exact causes are still being researched, factors
            like age, genetics, and lifestyle choices likely play a role.
          </p>
          <p style={{ fontWeight: "bold" }}>
            Our East Meets West Approach to {"Alzheimer's"} Disease Treatment:
          </p>
          <p style={{ paddingTop: "1rem" }}>
            <span>1. Comprehensive Assessment:</span> We evaluate your cognitive
            function, medical history, and lifestyle factors to gain a clear
            picture of your current status.
          </p>
          <p>
            <span>2. Personalized Treatment Plan:</span> Our approach aims to
            support brain health, potentially slow disease progression, and
            manage associated symptoms. It may include:
          </p>{" "}
          <p>
            <span>o Western Medicine Collaborations:</span> We work with your
            neurologist or primary care provider to optimize any medications or
            disease management strategies.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>o Nutrition and Supplementation:</span> A focus on brain
            healthy nutrients and targeted supplements to combat inflammation
            and oxidative stress.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>o Thai Herbal Medicine:</span> Specific herbs may be
            recommended for their neuroprotective, antioxidant, or potential
            cognitive-enhancing properties.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>o Cannabis and Kratom Therapies (Under Guidance):</span>{" "}
            Carefully exploring their potential role in managing agitation,
            sleep disturbances, or pain associated with AD.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>o Lifestyle Optimization:</span> Emphasis on stress reduction,
            gentle exercise if appropriate, cognitive stimulation, and support
            for sleep hygiene.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>o Advanced Therapies (Case-Dependent):</span> Options like
            Stem Cell Therapy might be considered for their potential to support
            tissue regeneration and reduce brain inflammation.
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
             <img loading="lazy" src={doctorConsultation} className="service-image" />
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
        <div style={{ maxWidth: "700px", width: "100%", textAlign: "left" }}>
          <span style={{ maxWidth: "600px" }}>
            Focus on Quality of Life and Support:
          </span>
          <p style={{ paddingBottom: "0.5rem", maxWidth: "600px" }}>
            While {"there's"} currently no cure for {"Alzheimer's"} Disease, our
            goal is to improve overall well- being, potentially slow disease
            progression, and provide support for both you and your caregivers.
          </p>
          <p style={{ maxWidth: "600px" }}>
            <span>Important Note:</span> We strongly advocate for open
            communication with your primary care providers and any specialists
            involved in your care
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlzheimerDisease;
