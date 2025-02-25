import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import shield from "../../assets/conditions/doctor-raising.jpg";
import protection from "../../assets/conditions/protection-shield.jpg";
import bg from "../../assets/conditions/bg.png";
import service1 from "../../assets/conditions/icons/sevice-pic-29.png";
import service2 from "../../assets/conditions/icons/sevice-pic-30.png";
import service3 from "../../assets/conditions/icons/sevice-pic-31.png";
import service4 from "../../assets/conditions/icons/sevice-pic-32.png";
import service5 from "../../assets/conditions/icons/sevice-pic-33.png";
import service6 from "../../assets/conditions/icons/sevice-pic-34.png";
import { Helmet } from "react-helmet-async";

const Immune = () => {
  const data = [
    {
      title: "Frequent Infections",
      para: "Recurrent or unusual infections may indicate a weakened immune system.",
      image: service1,
    },
    {
      title: "Chronic Inflammation",
      para: " Ongoing inflammation in various parts of the body can signify an overactive immune response.",
      image: service2,
    },
    {
      title: "Fatigue",
      para: "Persistent fatigue that doesn't improve with rest.",
      image: service3,
    },
    {
      title: "Joint Pain and Swelling",
      para: "Common in autoimmune conditions like rheumatoid arthritis.",
      image: service4,
    },
    {
      title: "Skin Rashes or Changes",
      para: "These can be seen in lupus and other autoimmune diseases.",
      image: service5,
    },
    {
      title: "Digestive Issues",
      image: service6,
      para: "Inflammatory bowel diseases (Crohn's, ulcerative colitis) are also linked to immune",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>
          Immune Disorders Treatment Bangkok, Thailand | Vital Medi Clinic
        </title>

        <meta
          name="keywords"
          content="Immune Disorders, Immune Disorders Treatment, Immune Disorders Treatment Bangkok"
        />

        <meta
          name="description"
          content="Bangkok’s best immune disorders treatment clinic. Specialized care for autoimmune and immunodeficiency disorders to restore health."
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
              IMMUNE DISORDER
            </h2>
            <p style={{ padding: "1rem 0" }}>
              <span>Immune Disorders:</span> When Your {"Body's"} Defenses Go
              Awry.
            </p>
            <p style={{ padding: "1rem 0" }}>
              The immune system is a complex network of cells and organs
              protecting the body from infections and diseases. Immune disorders
              occur when the immune system malfunctions, leading to two main
              categories of problems:
            </p>

            <p style={{ paddingTop: "1rem" }}>
              <span>• Autoimmune Disorders:</span> The immune system mistakenly
              attacks healthy tissues, causing inflammation and damage. Examples
              include rheumatoid arthritis, lupus, type 1 diabetes, and multiple
              sclerosis.
            </p>
            <p style={{ paddingBottom: "0.5rem" }}>
              <span>• Immunodeficiency Disorders:</span> The immune system is
              weakened, making the body more susceptible to infections and
              certain types of cancer. These can be primary (inherited) or
              secondary (acquired due to illness or medications.
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
               <img loading="lazy" src={shield} className="service-image" />
            </div>
          </div>
        </div>
        {/*<div style={{ maxWidth: "1000px", width: "100%" }}>
           <img loading="lazy"
            src={shield}
            style={{ width: "100%", objectFit: "cover", maxHeight: "30rem" }}
          />
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>Our Goal:</span> Empowering Your Immune System While managing
            symptoms is important, our focus is on addressing the root cause of
            immune dysfunction to support long-term health.
          </p>
          <p style={{ paddingBottom: "2rem" }}>
            Schedule a consultation to explore how our personalized approach can
            help you achieve optimal immune health and well-being.
          </p>
        </div>*/}
      <div className="center" style={{ background: "#e8e8e6" }}>
        <div
          style={{
            maxWidth: "700px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "2rem 0",
          }}
        >
          <h2 style={{ width: "100%", textAlign: "center" }}>
            Common Symptoms of Immune Disorders:
          </h2>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              paddingBottom: "0.5rem",
            }}
          >
            Symptoms vary greatly depending on the specific disorder but may
            include:
          </p>
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                maxWidth: "14rem",
                width: "100%",
                height: "12rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                textAlign: "center",
                alignItems: "center",
              }}
            >
               <img loading="lazy" src={item.image} style={{ width: "6rem" }} />
              <span>{item.title}</span>
              <p style={{ fontSize: "12px" }}>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "2rem 0",
          //minHeight: "40rem",
          height: "100%",
        }}
      >
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
              src={protection}
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
            marginTop: "10rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h3 style={{ fontWeight: "bold" }}>
            Our Integrative Approach to Immune Disorders:
          </h3>
          <p>
            <span>1. Identifying Imbalances: </span> Thorough evaluation,
            including specialized testing, to uncover the type of immune
            dysfunction (overactive, underactive) and any underlying triggers.
          </p>
          <p>
            <span>2. Personalized Treatment Plan: </span> We craft a plan that
            supports your {"body's"} natural healing abilities and may include:
          </p>
          <p style={{ marginLeft: "0.5rem" }}>
            <span>o Advanced Therapies:</span> Options like IV Nutrition or
            Ozone Therapy to support immune regulation and cellular health.
          </p>
          <p style={{ marginLeft: "0.5rem" }}>
            <span>o Nutritional Guidance:</span> Targeted nutrients and dietary
            changes to reduce inflammation and optimize immune function.
          </p>
          <p style={{ marginLeft: "0.5rem" }}>
            <span>o Lifestyle Optimization:</span> Addressing stress, sleep, and
            exercise, which are crucial for Immune health.
          </p>
          <p style={{ marginLeft: "0.5rem" }}>
            <span>o Western Medicine:</span> Where necessary, medications to
            manage symptoms or suppress an overactive immune system.
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
    </div>
  );
};

export default Immune;
