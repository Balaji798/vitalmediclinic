import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import active from "../../assets/conditions/woman-holds.jpg";
import woman from "../../assets/conditions/woman-having.jpg";
import bg from "../../assets/conditions/bg.png";
import service1 from "../../assets/conditions/icons/sevice-pic-25.png";
import service2 from "../../assets/conditions/icons/sevice-pic-26.png";
import service3 from "../../assets/conditions/icons/sevice-pic-27.png";
import service4 from "../../assets/conditions/icons/sevice-pic-28.png";
import { Helmet } from "react-helmet-async";

const PainManagement = () => {
  const data = [
    {
      title: "Root Cause Identification",
      para: "Thorough assessment to pinpoint the underlying factors contributing to your pain experience.",
      icon: service1,
    },
    {
      title: "Personalized Treatment Plan",
      para: "We combine evidence-based Western medical interventions with innovative therapies to address both pain symptoms and potential root causes.",
      icon: service2,
    },
    {
      title: "Holistic Focus",
      para: "Our approach may include pain medications, physical therapy, Hestyle changes, and complementary therapies like Thai Traditional Medicine.",
      icon: service4,
    },
    {
      title: "Potential for Cannabis and Kratom Therapies",
      para: "Under careful guidance, we may explore the responsible use of cannabis or kratom as part of your pain management plan.",
      icon: service3,
    },
  ];
  return (
    <div>
      <Helmet>
        <title>
          Sports Injury Pain Management Treatment Clinic Bangkok, Thailand
        </title>

        <meta
          name="keywords"
          content="Sports Injury Pain Management, Pain Management Treatment Bangkok"
        />

        <meta
          name="description"
          content="Bangkok’s premier pain management treatment clinic for sports injuries. Overcome pain and get back to your active lifestyle with expert care."
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
            PAIN MANAGEMENT
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>Sports Injury Pain Management:</span> Reclaim Your Active
            Lifestyle Sports injuries occur due to various factors, including
            overuse, sudden impact, or improper form.
          </p>
          <span>Common types include:</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>• Muscle and Tendon Strains:</span> Overstretching or tears in
            muscles or the fibrous tissues that connect them to bones.
          </p>
          <p>
            <span>• Ligament Sprains:</span> Damage to the ligaments that
            stabilize joints.
          </p>{" "}
          <p>
            <span>• Knee Injuries:</span> Meniscus tears, ACL Injuries, and
            other damage to the knee joint.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Fractures:</span> Broken bones caused by excessive force.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Dislocations:</span> Displacement of a bone from its normal
            position within a joint.
          </p>
          <span>Our Integrative Approach to Sports Injury Treatment:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Comprehensive Assessment:</span> Thorough evaluation to
            pinpoint the exact nature and extent of your injury.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Personalized Treatment Plan:</span> We develop a plan
            tailored to your needs that combines modern therapies, tailored
            compound nutrition, advanced modalities like Stem Cell Therapy, and
            the wisdom of Traditional Thai Medicine.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Holistic Pain Management:</span> We may explore options like
            herbal remedies, massage techniques. and potentially, under careful
            guidance, the responsible use of cannabis or kratom for pain relief.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Regeneration and Recovery:</span> Our focus is on reducing
            pain, decreasing inflammation, and promoting the regeneration of
            damaged tissues to help you heal effectively.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Rehabilitation and Prevention</span> We provide guidance on
            rehabilitation exercises and strategies fo prevent future Injuries
            and optimize your return to sports.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>Stem Cell Therapy for Sports Injuries:</span>Stem cell therapy
            may offer significant benefits by potentially reducing inflammation,
            stimulating tissue repair, and aiding in faster recovery, We
            carefully assess if this regenerative therapy it is appropriate for
            your individual coin
          </p>
          <p style={{ fontWeight: "bold" }}>
            Experience the benefits of our multi-faceted approach. Schedule a
            consultation today and start your journey to optimal recovery.
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
             <img loading="lazy" src={active} className="service-image" />
          </div>
        </div>
      </div>
      <div className="service">
        {" "}
        <div style={{ maxWidth: "500px", width: "100%" }}>
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
             <img loading="lazy"
              src={woman}
              style={{
                maxWidth: "312px",
                marginLeft: "8.2rem",
                objectFit: "cover",
                height: "22rem",
              }}
            />
          </div>
        </div>
         <img loading="lazy"
          src={dotes}
          className="content-position"
          style={{
            width: "10rem",
            right: 0,
            marginRight: "-3rem",
            marginTop: "20rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h3 style={{ fontWeight: "bold" }}>
            Chronic Pain: Understanding and Addressing Chronic Pain
          </h3>
          <p style={{ padding: "1rem 0" }}>
            Chronic pain is a complex condition defined as pain that persists
            for more than three months. It can significantly disrupt quality of
            life and may arise from various underlying causes, including:
          </p>
          <span>Common types include:</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>• Injuries or Surgeries:</span> Pain may linger after the
            initial healing phase, potentially due to nerve damage or ongoing
            inflammation.
          </p>
          <p>
            <span>• Arthritis:</span> Both osteoarthritis (wear-and-tear) and
            rheumatoid arthritis (autoimmune) can cause chronic pain and
            stiffness.
          </p>{" "}
          <p>
            <span>• Neuropathic Conditions:</span> Nerve damage from conditions
            like diabetic neuropathy or injuries can lead to persistent burning,
            tingling, or shooting pain.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Fibromyalgia:</span> A widespread pal disorder often
            accompanied by fatigue, sleep issues, and cognitive difficulties.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Other Conditions:</span> Chronic pain can also be a symptom
            of cancer, Lyme disease, multiple sclerosis, and numerous other
            health problems.
          </p>
        </div>
        <div
          style={{
            width: "15rem",
            height: "10px",
            background: "#0a3c57",
            marginTop: "0.5rem",
          }}
        />
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
            Our Integrative Approach to Chronic Pain Management
          </h3>
          <div>
            {data.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  marginBottom: "1rem",
                  padding: "0.5rem 1.5rem",
                  borderRadius: "10px",
                }}
                className={index % 2 === 0?"marginRight":"margin-style"}
              >
                 <img loading="lazy" src={item.icon} style={{ width: "6rem" }} />
                <div
                  style={{
                    padding: "0 0.5rem",
                    textAlign: index % 2 === 0 ? "left" : "right",
                    maxWidth: "400px",
                    width: "100%",
                  }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: "#fff" }}>
            Our goal is not just pain relief but long-term improvement. Consult
            with our specialists to develop a personalized strategy to break the
            cycle of chronic pain and reclaim your well-being
          </p>
        </div>
      </div>
    </div>
  );
};

export default PainManagement;
