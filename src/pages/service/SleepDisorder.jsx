import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/conditions/sleep.jpg";

const SleepDisorder = () => {
  return (
    <div
className="service"
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
        <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>SLEEP DISORDER</h2>
        <p style={{ padding: "1rem 0" }}>
          Sleep disorders disrupt healthy sleep patterns, impacting quality of
          life, energy levels, and overall health. Common types include:
        </p>
        <p style={{ fontWeight: "bold", padding: "0.5rem 0" }}>
          {'" The Key to Uncovering Hidden Food Sensitivities"'}
        </p>
        <p style={{ paddingTop: "1rem" }}>
          <span>• Insomnia:</span> Difficulty falling asleep, staying asleep, or
          waking too early.
        </p>
        <p>
          <span>• Sleep Apnea:</span> Breathing interruptions during sleep,
          often causing snoring and daytime fatigue.
        </p>{" "}
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Narcolepsy:</span> Excessive daytime sleepiness and sudden,
          uncontrollable sleep attacks.
        </p>
        <span>Factors that may contribute to sleep disorders include:</span>
        <p style={{ paddingBottom: "0.5rem" }}>
          {" "}
          <span>• Stress and Anxiety:</span> Racing thoughts and worries can
          disrupt sleep.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Medical Conditions:</span> Pain, hormonal imbalances,
          respiratory problems, and more can interfere with sleep.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Medications:</span> Certain medications may have
          sleep-disrupting side effects.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>• Lifestyle Factors:</span> Irregular schedules, poor sleep
          environment, and excessive caffeine or alcohol can worsen sleep
          quality.
        </p>
        <span>Our Integrative Approach to Sleep Disorder Treatment:</span>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>1. Root Cause Identification:</span> We conduct a thorough
          evaluation to uncover any underlying medical, psychological, or
          lifestyle factors disrupting your sleep.
        </p>
        <p style={{ paddingBottom: "0.5rem" }}>
          <span>2. Personalized Treatment Plan:</span> Your plan is
          custom-tailored and may integrate:
        </p>
        <p style={{ paddingBottom: "0.5rem", marginLeft: "10px" }}>
          <span>o Western Medicine:</span>Where appropriate, we may recommend
          medications, sleep studies, or therapies like Cognitive. Behavioral
          Therapy for Insomnia (CBT)
        </p>
        <p style={{ paddingBottom: "0.5rem", marginLeft: "10px" }}>
          <span>o Thai Herbal Medicine:</span> Gentle, natural remedies may aid
          in relaxation and promote better sleep patterns.
        </p>
        <p style={{ paddingBottom: "0.5rem", marginLeft: "10px" }}>
          <span>o Cannabis Under Guidance:</span> * Carefully exploring the
          potential role of cannabis in addressing certain sleep
          disorder symptoms.
        </p>
        <p style={{ paddingBottom: "0.5rem", marginLeft: "10px" }}>
          <span>o Relaxation Techniques:</span> Thai massage techniques might be recommended.
        </p>
        <p style={{ paddingBottom: "0.5rem", marginLeft: "10px" }}>
          <span>o Lifestyle Optimization:</span> We provide guidance on sleep hygiene, nutrition, stress management, and creating a sleep-conducive environment.
        </p>
        <p style={{ paddingBottom: "0.5rem"}}><span>Restorative Sleep, Renewed Vitality:</span>Our goal is to empower you to achieve lasting improvements in your sleep quality for overall health and well-being.</p>
        <span>Schedule a consultation to start your journey towards peaceful nights and refreshed days</span>
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
            src={doctorConsultation}
className="service-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SleepDisorder;
