import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import shield from "../../assets/conditions/doctor-raising.jpg";

const Immune = () => {
  return (
    <div className="center" style={{ flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 0",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "15rem",
            height: "10px",
            background: "#0a3c57",
            marginTop: "3.4rem",
          }}
        />
        <img
          src={dotes}
          style={{
            width: "10rem",
            position: "absolute",
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
          <p style={{ paddingBottom: "1rem" }}>
            <span>• Immunodeficiency Disorders:</span> The immune system is
            weakened, making the body more susceptible to infections and certain
            types of cancer. These can be primary (inherited) or secondary
            (acquired due to illness or medications.
          </p>
          <span>Common Symptoms of Immune Disorders:</span>
          <p>
            Symptoms vary greatly depending on the specific disorder but may
            include:
          </p>
          <p>
            <span>• Frequent Infections:</span> Recurrent or unusual infections
            may indicate a weakened immune system.
          </p>
          <p>
            {" "}
            <span>• Chronic Inflammation:</span> Ongoing inflammation in various
            parts of the body can signify an overactive immune response.
          </p>
          <p>
            <span>• Fatigue:</span> * Persistent fatigue that {"doesn't"}{" "}
            improve with rest.
          </p>
          <p>
            <span>• Joint Pain and Swelling:</span> Common in autoimmune
            conditions like rheumatoid arthritis.
          </p>
          <p>
            <span>• Skin Rashes or Changes:</span> These can be seen in lupus
            and other autoimmune diseases.
          </p>
          <p style={{ paddingBottom: "1rem" }}>
            <span>• Digestive Issues:</span> Inflammatory bowel diseases (
            {"Crohn's"}, ulcerative colitis) are also linked to immune
            dysfunction.
          </p>
          <span>Our Integrative Approach to Immune Disorders:</span>
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
              src={shield}
              style={{
                maxWidth: "312px",
                marginLeft: "-7.01rem",
                objectFit: "cover",
                height: "22rem",
              }}
            />
          </div>
        </div>
      </div>
      <div style={{maxWidth:"1000px",width:"100%"}}>
        <img
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
      </div>
    </div>
  );
};

export default Immune;
