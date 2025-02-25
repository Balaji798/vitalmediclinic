import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/conditions/x-ray.jpg";
import shield from "../../assets/conditions/doctor-raising.jpg";
import { Helmet } from "react-helmet-async";

const Neurological = () => {
  return (
    <div>
      <Helmet>
        <title>Neurological Disorders Treatment Clinic Bangkok, Thailand</title>

        <meta
          name="keywords"
          content="Neurological Disorders Treatment Bangkok, Neurological Disorders Treatment, Neurological Disorders Treatment Clinic"
        />

        <meta
          name="description"
          content="Bangkok’s best neurological disorders treatment at Vital Medi Clinic. Our approach combines understanding causes with multifaceted care for optimal results."
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
            NEUROLOGICAL DISORDER
          </h2>
          <p style={{ padding: "1rem 0" }}>
            Understanding Causes and Our Multifaceted Treatment Approach for
            Neurological Disorders.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            Neurological disorders affect the brain, spinal cord, and nerves,
            resulting in various challenges. Common examples include:
          </p>
          <p style={{ paddingTop: "1rem" }}>
            <span>• Movement Disorders:</span> {"Parkinson's"} disease, tremors,{" "}
            {"Huntington's"} disease.
          </p>
          <p>
            <span>• Degenerative Diseases:</span> {"Alzheimer's"} disease,
            dementia, Multiple Sclerosis.
          </p>{" "}
          <p>
            <span>• Headaches and Migraines:</span> Chronic or debilitating
            headaches.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Epilepsy:</span> Recurrent seizures.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Neuropathy:</span> Nerve damage causing numbness, tingling,
            or pain.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Stroke-Related Impairments:</span> Weakness, speech
            difficulties, cognitive changes.
          </p>
          <span>Factors Contributing to Neurological Disorders:</span>
          <p>
            {" "}
            <span>• Epilepsy:</span> Recurrent seizures.
          </p>
          <p>
            {" "}
            <span>• Neuropathy:</span> Nerve damage causing numbness, tingling,
            or pain.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Stroke-Related Impairments:</span> Weakness, speech
            difficulties, cognitive changes.
          </p>
          <span>Factors Contributing to Neurological Disorders:</span>
          <p>
            {" "}
            <span>• Genetics:</span> A family history of certain conditions may
            increase risk.
          </p>
          <p>
            {" "}
            <span>• Age:</span> The risk for some neurological disorders
            increases with age.
          </p>
          <p>
            {" "}
            <span>• Injuries:</span> Traumatic brain injury (TBI) or spinal cord
            injuries can have long-lasting effects.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Infections or Autoimmune Conditions:</span>These can
            sometimes affect the nervous system.
          </p>
          <span>
            Our Integrative Approach to Neurological Disorder Treatment:
          </span>
          <p>
            {" "}
            <span>1. Comprehensive Assessment:</span> We thoroughly evaluate
            your symptoms, medical history, and conduct appropriate diagnostic
            testing to identify the specific neurological condition and
            potential underlying causes.
          </p>
          <p>
            {" "}
            <span>2. Personalized Treatment Plan:</span> We design a plan
            combining Western and Eastern medicine, which may include:
          </p>
          <p style={{ marginLeft: "0.5rem" }}>
            <span>o Western Medical Interventions:</span> Medications,
            disease-modifying therapies
          </p>
          <p style={{ marginLeft: "0.5rem" }}>
            <span>o Thai Herbal Medicine:</span> Selected herbs for their
            neuroprotective, anti-inflammatory. or symptom-relieving properties.
          </p>
          <p style={{ marginLeft: "0.5rem" }}>
            <span>o Cannabis Under Guidance:</span> Carefully exploring the
            potential benefits of cannabis managing pain, spasticity, or other
            neurological symptoms.
          </p>
          <p style={{ marginLeft: "0.5rem" }}>
            <span>o Advanced Therapies:</span> Options like Stem Cell Therapy
            may be considered to support tissue repair and potentially slow
            disease progression.
          </p>
          <p style={{ paddingBottom: "0.5rem", marginLeft: "0.5rem" }}>
            <span>o Rehabilitation:</span> Physical, occupational, or speech
            therapy to regain function and maximize independence.
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
      <div className="center">
        <div style={{ maxWidth: "1000px", width: "100%", padding: "0 1rem" }}>
           <img loading="lazy"
            src={shield}
            style={{ width: "100%", objectFit: "cover", maxHeight: "30rem" }}
          />
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>Our Focus on Hope and Healing:</span> While not all
            neurological disorders have cures, our goal is to improve your
            quality of life, manage symptoms effectively, and explore ways to
            support your {"body's"} natural healing abilities.
          </p>
          <p style={{ paddingBottom: "2rem" }}>
            Schedule a consultation to discuss how our integrative approach can
            address your neurological concerns, and optimize your health
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Neurological;
