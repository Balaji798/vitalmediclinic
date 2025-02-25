import { Helmet } from "react-helmet-async";
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import leaf from "../../assets/healthCheckUp/leaf.jpg";
import doctorConsultation from "../../assets/healthCheckUp/prescription.jpg";
import cosmetic from "../../assets/healthCheckUp/cosmetic.jpg";
import closeup from "../../assets/healthCheckUp/closeup.jpg";
import herbal from "../../assets/healthCheckUp/herbal-medicine.jpg";
import therapy from "../../assets/healthCheckUp/canibas.webp";
import cannabis from "../../assets/healthCheckUp/doctors-cannabis.jpg";

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
            THAI TRADITIONAL THERAPEUTIC TREATMENTS
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            CANNABIS THERAPIES <br />
            AT VITAL MEDI CLINIC IN BANGKOK
          </h2>

          <p style={{ padding: "1rem 0" }}>
            Anxiety, pain, sleeplessness... These challenges can significantly
            impact your quality of life. At Vital Medi Clinic, we believe in
            exploring innovative and natural solutions to enhanced your
            well-being. {"That's"} why we offer evidence-based cannabis
            therapies, carefully tailored to your individual needs, under the
            supervision of our experienced healthcare professionals.
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
      <div className="center" style={{ flexDirection: "column" }}>
        <div style={{ maxWidth: "1200px", width: "100%" }}>
          {data.map((item, index) => (
            <div
              key={index}
              className="wrap"
              style={{
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                paddingBottom: "30px",
                alignItems: "center",
              }}
            >
               <img loading="lazy"
                src={item.image}
                style={{
                  maxWidth: "500px",
                  width: "100%",
                  objectFit: "cover",
                  height: "200px",
                }}
              />
              <div
                style={{
                  maxWidth: "670px",
                  textAlign: index % 2 === 0 ? "start" : "end",
                  padding: "0 10px",
                }}
              >
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: "1200px", width: "100%",textAlign:"center",paddingBottom:"2rem" }}>
           <img loading="lazy"
            src={cannabis}
            style={{ width: "100%", objectFit: "cover", height: "200px" }}
          />
          <h2 style={{padding:"1rem 0 0.5rem"}}>CBD vs THC for Pain Relief in Bangkok</h2>
          <p>Both CBD and THC, the two main cannabinoids in cannabis, have pain-relieving properties. However, they work differently. THC binds directly to pain receptors in the brain, while CBD interacts with the endocannabinoid system to reduce inflammation and modulate pain signals. {"We'll"} help you understand the differences and determine the most suitable cannabinoid for your pain management needs</p>
        </div>
        <div style={{ maxWidth: "1200px", width: "100%",textAlign:"center",paddingBottom:"2rem"  }}>
         <img loading="lazy"
          src={herbal}
          style={{ width: "100%", objectFit: "cover", height: "200px" }}
        />
        <h2 style={{padding:"1rem 0 0.5rem"}}>CBG and THC for Pain Management in Bangkok</h2>
        <p>Beyond CBD and THC, other cannabinoids like CBG (cannabigerol) are also gaining recognition for their potential therapeutic applications. CBG has shown promise in reducing inflammation and pain, particularly in conditions like arthritis and inflammatory bowel disease. We offer expert guidance on the use of CBG and THC for effective pain management</p>
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
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 1rem",
      }}
    >
      <div style={{ maxWidth: "1000px", width: "100%" }}>
        <h2
          style={{
            paddingBottom: "0.3rem",
          }}
        >
        Vital Medi Clinic: <br/>Your Trusted Cannabis Clinic in Bangkok
        </h2>
        <p
          style={{
            maxWidth: "500px",
            fontSize: "14px",
            paddingBottom:"10px"
          }}
        >
        As one of the leading cannabis clinics in Bangkok, Vital Medi Clinic prioritizes patient safety, education, and personalized care. Our team of experienced professionals is committed to providing evidence-based cannabis therapies that are tailored to your unique needs and goals. If {"you're"} seeking natural solutions for anxiety, pain, sleep issues, or other health concerns, consider exploring the potential benefits of cannabis therapies.
        </p>
        <p style={{
          maxWidth: "500px",
          fontSize: "14px",
        }}>Contact Vital Medi Clinic today to schedule a consultation and embark on your journey to optimal health and well-being.</p>
      </div>
    </div>
    </div>
  );
};

const data = [
  {
    title: "Cannabis for Anxiety Treatment",
    content:
      "Anxiety disorders are increasingly prevalent in today's fast-paced world. While traditional medications can be effective, many individuals are seeking natural alternatives with fewer side effects. Studies suggest that certain cannabinoids found in cannabis, such as CBD, may offer relief from anxiety symptoms by interacting with the body's endocannabinoid system, promoting a sense of calm and relaxation.",
    image: leaf,
  },
  {
    title: "CBD for Sleep",
    content:
      "If you struggle with insomnia or poor sleep quality, CBD might be a natural solution. Research Indicates that CBD can help regulate sleep cycles and Improve sleep quality by addressing underlying causes like anxiety or pain. Our practitioners can guide you through the appropriate CBD dosage and form to help you achieve restful sleep.",
    image: cosmetic,
  },
  {
    title: "Cannabis Oil for Medical Use",
    content:
      "Cannabis oll, rich in various cannabinolds like THC and CBD, has shows promise in managing a wide range of medical conditions. At Vital Medi Clinic, we offer personalized consultations to explore the potential benefits of cannabis all for conditions such as chronic pain, epilepsy, multiple sclerosis, and more.",
    image: closeup,
  },
];
export default TherapeuticTreatment;
