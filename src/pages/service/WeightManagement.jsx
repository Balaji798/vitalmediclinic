import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/SERVICES/apple.jpg";
import young from "../../assets/SERVICES/notbook.jpg";
import bg from "../../assets/conditions/bg.png";
import windowImage from "../../assets/windowImage.jpg";
import { Helmet } from "react-helmet-async";

const WeightManagement = () => {
  return (
    <div>
      <Helmet>
        <title>
           Weight Management Bangkok, Thailand | Vital Medi Clinic
        </title>

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
            WELLNESS PROGRAM
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            WEIGHT MANAGEMENT
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>
              Achieve Your Ideal Weight with Vital Medi Clinic: Leading the Way
              in Innovative Weight Loss Therapies in Bangkok
            </span>
          </p>
          <p style={{ padding: "1rem 0" }}>
            Struggling to reach your weight loss goals? Frustrated with
            traditional diets and exercise plans that {"don't"} seem to work? At
            Vital Medi Clinic in Bangkok, we offer a fresh and effective
            approach to weight management, combining the wisdom of integrative
            medicine with cutting-edge technology to help you achieve lasting
            results.
          </p>
          <span>
            Beyond Conventional Methods: Embrace Innovative Weight Loss
            Therapies
          </span>
          <p style={{ padding: "1rem 0" }}>
            We understand that every {"individual's"} weight loss journey is
            unique. {"That's"} why we offer a range of innovative theraples
            designed to address the root causes of weight gain and support your{" "}
            {"body's"} natural ability to shed excess pounds. From personalized
            nutrition plans and exercise recommendations to cutting-edge
            treatments like the slimming pen, we have the tools and expertise to
            help you succeed.
          </p>
          <span>The Slimming Pen: A Breakthrough in Medical Weight Loss</span>
          <p style={{ paddingTop: "1rem" }}>
            The slimming pen, a revolutionary medical weight loss tool, is
            gaining popularity worldwide. It utilizes a GLP-1 receptor agonist
            medication to mimic the effects of a natural hormone that regulates
            appetite and blood sugar levels. This helps you feel fuller for
            longer, reducing cravings and promoting healthy eating habits. Under
            the guidance of our experienced medical professionals, the slimming
            pen can be a safe and effective part of your weight management plan
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
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "2rem 1rem",
          height: "100%",
          //background: "#f1f1f1",
        }}
      >
        {" "}
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
             <img loading="lazy"
              src={young}
              style={{
                maxWidth: "380px",
                marginLeft: "8.2rem",
                objectFit: "cover",
                height: "21.97rem",
              }}
            />
          </div>
        </div>
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <span>Our Comprehensive Approach to Weight Management</span>
          <p>At Vital Medi Clinic, we believe in a holistic approach to weight management that addresses your physical, mental, and emotional well-being. Our personalized plans combine:</p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Expert Medical Guidance:</span>Mur team of qualified doctors and nutritionists will assess your individual needs and create a customized plan {"that's"} right for you.
          </p>
          <p>
            <span>• Nutritional Counseling:</span> {"We'll"} help you develop healthy eating habits that are sustainable and enjoyable.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Exercise Recommendations:</span> {"We'll"} guide you on Incorporating physical activity into your lifestyle to boost your metabolism and improve your overall health.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Stress Management Techniques:</span> {"We'll"} equip you with tools to manage stress and emotional eating, promoting a healthier relationship with food.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Innovative Therapies:</span> In addition to the slimming pen, we offer a range of other Innovative weight loss therapies, such as IV nutrition and hormone balancing.
          </p>
          <span style={{paddingBottom:"5px"}}>Your Partner in Healthy Weight Management</span>
          <p>Vital Medi Clinic is your trusted partner on your weight loss Journey. {"We're"} committed to providing you with the support, guidance, and innovative solutions you need to achieve your ideal weight and maintain a healthy lifestyle.</p>
        </div>
      </div>
      <div
      style={{
        backgroundImage: `url(${windowImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxWidth: "1600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0rem 1rem",
        height:350

      }}
    >
      <div style={{ maxWidth: "920px", width: "100%" }}>
        <h2
          style={{
            paddingBottom: "0.3rem",
            fontSize:30,
            fontWeight:"bold"
          }}
        >
          Take the First Step Today
        </h2>
        <h4
          style={{
            maxWidth: "550px",
          }}
        >
          If {"you're"} ready to transform your health and well-being, contact Vital Medi Clinic today to schedule a consultation.
          Our team is excited to help you discover the power of integrative medicine and innovative weight loss therapies.
        </h4>
      </div>
    </div>
    </div>
  );
};

export default WeightManagement;
