/* eslint-disable react/no-unescaped-entities */
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/plaque-cleanse.webp";
import bg from "../../assets/conditions/bg.png";
import womanDoctor from "../../assets/wellness/plaque-cleanse-2.webp";
import therapy from "../../assets/wellness/sevice-pic-42.jpg";
import plaqueBg from "../../assets/wellness/plaque-cleanse-bg.webp";
import heart from "../../assets/wellness/heart.webp";
import { Helmet } from "react-helmet-async";

const PlaqueCleanse = () => {
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
            VITAL PLAQUE CLEANSE IV DRIP
          </h2>
          <h3>
            Vital Plaque Cleanse IV Drip: A Controversial Approach to
            Cardiovascular Health
          </h3>
          <h3 style={{ textIndent: "20px" }}>
            What Causes Plaque Buildup in Arteries?
          </h3>
          <p style={{ paddingBottom: "1rem", textIndent: "20px" }}>
            Plaque, the kind that causes atherosclerosis and is a major concern
            for cardiovascular health, comes from a complex process involving
            several factors, but the primary culprit is <span>cholesterol</span>
            , specifically{" "}
            <span>low-density lipoprotein (LDL) cholesterol</span>, often called
            "bad" cholesterol.
          </p>
          <h3>Here's a simplified breakdown of how plaque forms:</h3>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• LDL Cholesterol Accumulation:</span>
            <p>
              When there's too much LDL cholesterol in your blood, it can start
              to accumulate within the walls of your arteries.
            </p>
          </p>
          <span>• Artery Wall Damage:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Factors like high blood pressure, smoking, high blood sugar, and
            inflammation can damage the inner lining of the arteries
            (endothelium), making it easier for LDL cholesterol to penetrate the
            artery wall.
          </p>
          <span>• Oxidation and Inflammation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Once inside the artery wall, LDL cholesterol can become oxidized,
            triggering an inflammatory response.
          </p>
          <span>• Immune Cell Response:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            The body's immune system sends white blood cells (macrophages) to
            the site to engulf the oxidized LDL. These macrophages become
            engorged with cholesterol, transforming into "foam cells."
          </p>
          <span>• Plaque Formation:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            The accumulation of foam cells, along with other substances like
            smooth muscle cells, calcium, and cellular debris, forms a fatty
            deposit called plaque
          </p>
          <span>• Plaque Growth and Hardening:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            Over time, plaque can grow larger and harden, narrowing the artery
            and restricting blood flow. This is called atherosclerosis.
          </p>
          <span>• Plaque Rupture:</span>
          <p style={{ paddingBottom: "0.5rem" }}>
            In some cases, the plaque can become unstable and rupture, leading
            to the formation of a blood clot that can block the artery, causing
            a heart attack or stroke.
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
          display: "flex",
          //justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "2rem 1rem",
          height: "100%",
          backgroundColor: "#F2F2F2",
        }}
      >
        <div style={{ maxWidth: "500px", width: "100%", marginRight: "2rem" }}>
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
            <img
              loading="lazy"
              src={womanDoctor}
              style={{
                maxWidth: "312px",
                marginLeft: "7.4rem",
                objectFit: "cover",
                height: "22rem",
              }}
            />
          </div>
        </div>
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h3 style={{ fontWeight: "bold" }}>
            In essence, plaque is a buildup of:
          </h3>
          <ul
            style={{
              fontWeight: "bold",
              paddingLeft: "17px",
              paddingBottom: "1rem",
            }}
          >
            <li>Cholesterol (primarily LDL)</li>
            <li>Fats</li>
            <li>Calcium</li>
            <li>Cellular waste products</li>
            <li>Fibrin (a protein involved in blood clotting)</li>
          </ul>
          <h3>Factors that contribute to plaque formation:</h3>
          <p style={{ paddingTop: "1rem" }}>
            <span>•</span> The massage therapist should be trained in prenatal
            massage techniques. This means that they will know how to avoid
            pressure points and positions that could be harmful to the baby.
          </p>
          <p>
            <span>•</span> The massage should be gentle and light. The therapist
            should not use deep pressure or massage areas that are prone to
            swelling, such as the ankles and feet.
          </p>{" "}
          <p>
            <span>•</span> The pregnant woman should be positioned comfortably.
            The therapist may use pillows or bolsters to support the {"woman's"}{" "}
            back, belly, and legs.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>•</span> The massage should be shorter than a regular massage.
            Most pregnancy massages last about 30 minutes.
          </p>
          <span>How to choose a massage therapist for pregnancy?</span>
          <p>
            When choosing a massage therapist for pregnancy, it is important to
            find someone who is experienced and qualified. You can ask your
            doctor for recommendations, or you can search online for massage
            therapists in your area who specialize in prenatal massage.
          </p>
        </div>
      </div>
      <div
        className="center"
        style={{
          flexDirection: "column",
          padding: "2rem 0rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${plaqueBg})`,
            maxWidth: "800px",
            width: "100%",
            textAlign: "center",
            color: "#fff",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            padding: "1rem 0rem",
          }}
        >
          <h2>The "Vital Plaque Cleanse IV Drip"</h2>
          <span>
            is an intravenous therapy as a way to cleanse arteries of plaque
            buildup.
            <br /> This approach typically involves the use of chelating agents.
          </span>
        </div>
        <h1 style={{ padding: "1rem 0", fontSize: "42px", lineHeight: "45px" }}>
          SUPPORT YOUR HEART HEALTH <br />
          WITH VITAL MEDI CLINIC
        </h1>
        <p>
          At Vital Medi Clinic, we're committed to helping you maintain optimal
          cardiovascular health.
          <br /> We offer a range of services and therapies designed to support
          healthy circulation, blood
          <br /> pressure, and overall well-being. Our experienced medical
          professionals can help you create <br />a personalized plan that may
          include:
        </p>
        <div className="center" style={{ flexWrap: "wrap", padding: "10px 0" }}>
          <img src={heart} style={{ maxWidth: "550px" }} />
          <div
            style={{
              textAlign: "left",
              maxWidth: "550px",
              paddingLeft: "10px",
            }}
          >
            <span>• Comprehensive Cardiovascular Assessments:</span>{" "}
            <p>
              In-depth evaluations to assess your heart health and identify
              potential risk factors.
            </p>
            <span>• Personalized Lifestyle Guidance:</span>{" "}
            <p>
              Expert advice on diet, exercise, and stress management to support
              a healthy heart.
            </p>
            <span>• Intravenous (IV) Therapies:</span>
            <p>
              Customized IV drips containing essential vitamins, minerals, and
              antioxidants to support overall health and well-being. (Note:
              Avoid making specific claims about plaque removal.)
            </p>
            <span>• Other Evidence-Based Treatments:</span>
            <p>
              Explore our range of therapies designed to promote cardiovascular
              wellness.
            </p>
          </div>
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

export default PlaqueCleanse;
