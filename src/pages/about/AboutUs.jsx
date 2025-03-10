import doctor1 from "../../assets/about-us/pic-clinic-30.webp";
import doctor2 from "../../assets/about-us/vision.webp";
import doctor3 from "../../assets/about-us/mission.webp";
//import doctor4 from "../../assets/about-us/pic-clinic-33.jpg";
import doctor5 from "../../assets/about-us/pic-clinic-34.jpg";
import location from "../../assets/about-us/pic-clinic-26.png";
import person from "../../assets/about-us/pic-clinic-25.png";
import hand from "../../assets/about-us/pic-clinic-23.png";
import leaf from "../../assets/about-us/pic-clinic-24.png";
import injunction from "../../assets/about-us/pic-clinic-22.png";
import write from "../../assets/about-us/write.webp";
import doctorConsultation from "../../assets/wellness/female-doctor.jpg";
import consultation from "../../assets/SERVICES/doctor-consultation.jpg";
import attend from "../../assets/doctor-attend.jpg";
import midsection from "../../assets/midsection.jpg";
import about1 from "../../assets/icons/about-12.png";
import about2 from "../../assets/icons/about-13.png";
import about3 from "../../assets/icons/about-14.png";
import about4 from "../../assets/icons/about-15.png";
import about5 from "../../assets/icons/about-16.png";
import about6 from "../../assets/icons/about-17.png";
import about7 from "../../assets/about-us/about-09.jpg";
import about8 from "../../assets/about-us/about-10.jpg";
import blueBack from "../../assets/about-us/about-us-BG.webp";
import massage from "../../assets/about-us/massage.webp";
import mellness from "../../assets/about-us/wellness.webp";
import attm from "../../assets/about-us/attm-treatment.webp";
import cannabis from "../../assets/about-us/cannabis.webp";
import commitment from "../../assets/about-us/commitment.webp";
import logo from "../../assets/logo.png";
import earth from "../../assets/about-us/earth.webp";
import wellness from "../../assets/about-us/wellness-plan.webp";
import proactive from "../../assets/about-us/proactive.webp";
import compassionate from "../../assets/about-us/compassionate.webp";
import evidence from "../../assets/about-us/evidence.webp";
import integrative from "../../assets/about-us/integrative.webp";
import "./aboutUs.css";

const AboutUs = () => {
  const data = [
    {
      title: "Health Check-ups",
      para: "Our comprehensive health check-ups provide in-depth insights into your current health status, identifying potential risks and areas for improvement, allowing for early intervention and personalized treatment plans.",
      image: consultation,
    },
    {
      title: "Longevity & Wellness Programs",
      para: "We believe that prevention is the best medicine. Our customized wellness programs are designed to help you maintain a healthy lifestyle, prevent chronic diseases, and enhance your overall well-being",
      image: doctorConsultation,
    },
    {
      title: "Medical Treatment",
      para: "Our experienced physicians provide expert care for a wide range of medical conditions, including skin disorders, sleep disorders, neurological disorders, immune disorders, non-communicable diseases and cancer.",
      image: attend,
    },
    {
      title: "Cannabis Treatment",
      para: "We Offer Personalized Cannabis-Based Therapies, Under The Guidance Of Our Medical Professionals, To Explore Potential Benefits For Pain Management, Mood Regulation, Sleep Support, And Overall Well-Being.",
      image: midsection,
    },
  ];
  const data2 = [
    {
      title: "INTEGRATIVE MEDICINE FOR LONGEVITY",
      para: "We embrace the wisdom of both Eastern and Western medical traditions, blending the best of both worlds to offer comprehensive and effective care that not only addresses current health concerns but also focuses on extending your healthspan and maximizing your vitality in the years to come.",
      icon: about1,
    },
    {
      title: "PERSONALIZED CARE",
      para: "We recognize that every individual is unique, with their own set of health goals, genetic predispositions, and lifestyle factors. We take the time to listen to your story, understand your aspirations for longevity, and develop a personalized treatment plan that addresses your specific needs and optimizes your long-term well-being.",
      icon: about2,
    },
    {
      title: "PREVENTIVE FOCUS",
      para: "We believe that prevention is the key to a long and healthy life. Through comprehensive health checkups, advanced diagnostics, and proactive wellness programs, we aim to identify potential health risks early on, empowering you with the knowledge and tools to make informed decisions and take charge of your health trajectory.",
      icon: about3,
    },
    {
      title: "PATIENT EMPOWERMENT",
      para: "We strive to educate and empower our patients, providing them with the information and resources they need to understand their health conditions, make informed choices about their treatment options, and actively participate in their journey towards optimal health and longevity",
      icon: about4,
    },
    {
      title: "INNOVATIVE THERAPIES FOR LONGEVITY",
      para: "We are committed to staying at the forefront of medical advancements, incorporating innovative and scientifically-backed therapies into our practice. We offer cutting-edge treatments such as stem cell therapy, IV nutrition, and cannabis-based therapies, carefully selected and administered to promote longevity and enhance your quality of life.",
      icon: about5,
    },

    {
      title: "COMPASSIONATE CARE",
      para: "We understand that health challenges can be stressful and overwhelming. Our compassionate team of healthcare professionals is dedicated to providing you with a supportive and nurturing environment throughout your wellness journey, ensuring you feel heard, understood, and empowered to achieve your longevity goals.",
      icon: about6,
    },
  ];

  const data3 = [
    {
      title: "Health Check-up Programs",
      para: [
        "Men's and Women's Health",
        "Food Allergy and Intolerance Testing",
        "Micronutrient Analysis",
        "Natural Killer (NK) Cell Activity Tes",
        "Cancer Biomarker Testing",
      ],
      image: write,
    },
    {
      title: "Wellness programs",
      para: [
        "Vital After party IV Drip",
        "Vital Mayer IV Drip",
        "Vital White Booster+ IV Drip",
        "Vital NMN Booster+ IV Drip",
        "Vital Immune Booster IV Drip",
        "Vital Weight Loss Control IV Drip",
        "Vital White Radiance IV Drip",
        "Vital Alpha-Lipoic accid IV Drip",
        "Vital Curcumin IV Drip",
        "Vital Resveratrol IV Drip",
        "Vital Detoxify (Chelation) IV Drip",
        "Vital Plaque Cleanse IV Drip",
        "Stem cell Therapy",
        "NK Cell Therapy",
        "Weight Management",
      ],
      image: mellness,
    },
    {
      title: "ATTM Treatments",
      para: [
        "Acupressure",
        "Migraine Massage",
        "Office Syndrome Massage",
        "Neck, Shoulder, and Upper Back Massage",
        "Constipation Massage",
        "Plantar Fasciitis Massage",
        "Prenatal Massage",
        "Thai Traditional Oil Pourtice",
        "Herbal Inhalation",
        "Cupping Therapy",
      ],
      image: attm,
    },
  ];
  const data4 = [
    {
      title: "Personalized Wellness Plans",
      title2: "",
      para: "We believe in treating the individual, not just the condition. Our Doctors, with his extensive experience in preventive, anti-aging, and regenerative medicine, will personally assess your health history, lifestyle, and goals. This detailed evaluation allows us to create a unique plan tailored to your specific needs.",
      image: wellness,
    },
    {
      title: "Integrative Expertise",
      title2: "",
      para: "Our Doctors are training in both conventional and alternative medicine bridges the gap between ancient wisdom and modern science. He expertly combines Thai herbal medicine, the full spectrum of Applied Thai Traditional Medicine therapies, cutting-edge treatments like stem cell therapy, and personalized nutritional guidance to create a synergistic approach that maximizes your body's natural healing potential.",
      image: integrative,
    },
    {
      title: "Proactive Health Management ",
      title2: "",
      para: "Our comprehensive health check-ups go beyond standard screenings. We delve deeper into your unique biochemistry to identify potential risks early on, allowing us to develop proactive strategies to prevent disease and optimize your well-being for years to come.",
      image: proactive,
    },
    {
      title: "Evidence-Based and",
      title2: "Innovative Therapies",
      para: "We are committed to offering the most effective, scientifically-backed treatments available. Our team stays at the forefront of medical advancements, incorporating innovative therapies like IV nutrition and ozone therapy, while carefully researching emerging options like cannabis and kratom under strict medical supervision. We are equally committed to the time-tested effectiveness of Applied Thai Traditional Medicine, offering a wide range of therapies to address various health concerns.",
      image: evidence,
    },
    {
      title: "Compassionate,",
      title2: "Patient-Centered Care",
      para: "We believe in empowering you with knowledge and support throughout your health journey. Dr. CHAWAPON KIDHIRUNKUL and our team prioritize clear communication, patient education, and a collaborative approach to ensure you feel informed and confident in your treatment choices.",
      image: compassionate,
    },
  ];

  return (
    <div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${doctor1})` }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingBottom: "5rem",
          }}
        >
          <h1 style={{ textAlign: "center", padding: "2rem 0" }}>ABOUT US</h1>
          <h2 style={{ fontSize: "35px" }}>WHO WE ARE</h2>
          <p style={{ maxWidth: "700px", width: "100%" }}>
            <span>Vital Medi Clinic</span> s a leading integrative medicine clinic dedicated to optimizing your health<br/> and well-being, with a primary focus on<span>longevity</span>and a deep respect for the healing power<br/> of <span>Applied Thai Traditional Medicine (ATTM).</span>We seamlessly combine the best of Eastern<br/> and Western practices, integrating ancient wisdom with modern science to offer<br/> comprehensive and innovative therapies designed to extend your vitality and enhance your<br/> quality of life for years to come.
          </p>
        </div>
      </div>
      <div
        className="backgroundImage"
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "2rem",
          textAlign: "center",
        }}
      >
        <img src={write} style={{ objectFit: "contain", maxWidth: "600px" }} />
        <p style={{ maxWidth: "1000px", padding: "1rem 0px" }}>
          <span style={{ fontWeight: "bold" }}>
            Our team of experienced healthcare professionals
          </span>{" "}
          includes physicians specializing in preventive care,<br/> anti-aging, and regenerative medicine, along with holistic practitioners and specialists in various fields, <br/>including expert <span>Thai Traditional Medicine practitioners.</span>
        </p>
        <p style={{ maxWidth: "1000px" }}>
        We work collaboratively to develop personalized treatment plans that address your unique needs and<br/> goals, with a focus on promoting long-term health, vitality, and the art of traditional Thai healing.
        </p>
      </div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${blueBack})` }}
      >
        <div className="center" style={{ padding: "0 1rem" }}>
          <div style={{ maxWidth: "950px", width: "100%" }}>
            <h2 style={{ textAlign: "center", color: "#fff" }}>
              WHAT DO WE DO?
            </h2>
            <p style={{ textAlign: "center", width: "100%", color: "#fff", fontWeight: 'bold' }}>
            Vital Medi Clinic: Your Partner in Holistic Health and Longevity
            </p>
            <p style={{ textAlign: "center", width: "100%", color: "#fff", fontSize: '14px' }}>
            We offer a comprehensive approach to wellness, focusing on four key pillars, enhanced by the ancient wisdom of ATTM, to help you achieve<br/> optimal health and longevity
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
                gap: "40px",
              }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    maxWidth: "430px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    color: "#000",
                    backgroundColor: "#fff",
                    textAlign: "center",
                  }}
                >
                  <img
                    loading="lazy"
                    src={item.image}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "16rem",
                    }}
                  />
                  <h3 style={{ textAlign: "center" }}>{item.title}</h3>
                  <p style={{ padding: "10px 20px 20px" }}>{item.para}</p>
                </div>
              ))}
            </div>
            <div className="center">
              <div
                style={{
                  maxWidth: "530px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  color: "#000",
                  backgroundColor: "#fff",
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
                <img
                  loading="lazy"
                  src={massage}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    height: "16rem",
                  }}
                />
                <h3 style={{ textAlign: "center" }}>
                  Applied Thai Traditional Medicine (ATTM)
                </h3>
                <p style={{ padding: "10px 20px 20px" }}>
                  Experience the profound healing power of tradition Thai
                  therapies. Our skilled practitioners offer a range of
                  treatments, including acupressure, therapeutic messages (for
                  migraines, office syndrome, constipation, plantar fasciitis,
                  prenatal care, and more), oil pourtice, and herbal
                  inhalations, to restore, balance pain, relieve pain, and
                  promote deep relaxation
                </p>
              </div>
            </div>
            <div
              className="center"
              style={{ width: "100%", padding: "1.5rem 0px" }}
            >
              <button
                style={{
                  backgroundColor: "#fff",
                  color: "#0a3c57",
                  fontWeight: "bold",
                  fontSize: "22px",
                  paddingTop: "15px",
                }}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="center"
        style={{ backgroundColor: "#fff", padding: "2rem  1rem 0" }}
      >
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <p style={{ textAlign: "center" }}>
            In addition to our comprehensive health check-ups and personalized
            wellness programs,
            <br /> we offer a range of cutting-edge therapies, such as stem cell
            therapy and IV nutrition, <br /> alongside a suite of authentic ATTM
            treatments.
          </p>
          <h2 style={{ textAlign: "center" }}>
            OUR COMPREHENSIVE SERVICES ENCOMPASS:
          </h2>
          {data3.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: index == 1 ? "row-reverse" : "row",
                alignItems: "center",
                paddingBottom: "3rem",
              }}
            >
              <img src={item.image} style={{ maxWidth: "430px", width:'100%' }} />
              <div
                style={{
                  paddingLeft: index !== 1 ? "30px" : "0px",
                  paddingRight: index === 1 ? "30px" : "0px",
                }}
              >
                <h4>{item.title}</h4>
                <ul style={{ listStyle: "none" }}>
                  {item.para.map((i, j) => (
                    <li key={j}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="center" style={{ flexDirection: "column" }}>
            <div
              style={{
                maxWidth: "630px",
                textAlign: "center",
                margin: "40px 0px",
              }}
            >
              <img
                loading="lazy"
                src={cannabis}
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <h3 style={{ textAlign: "center" }}>Cannabis Treatment</h3>
              <p style={{ padding: "0px" }}>
                We offer personalized cannabis-based therapies, under the
                guidance of our medical professionals, to explore potential
                benefits for pain management, mood regulation, sleep support,
                and overall well-being.
              </p>
            </div>
            <div
              style={{
                maxWidth: "700px",
                width: "100%",
                textAlign: "center",
                margin: "40px 0px",
                backgroundColor: "#093b56",
                color: "#fff",
                padding: "20px 0px",
                borderRadius: "25px",
              }}
              className="center"
            >
              <p style={{ maxWidth: "560px",padding:'10px' }}>
                Whether {"you're"} seeking to manage a chronic condition,
                prevent future health issues, explore the benefits of Thai
                Traditional Medicine, or simply feel your best at everry age,
                Vital Medi Clinic is committed to empowering you on your journey
                to a longer, healthier life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${doctor2})` }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <h2 style={{ fontSize: "35px" }}>VISION:</h2>
          <p style={{ maxWidth: "300px", textAlign: "end" }}>
            To be the leading integrative medicine clinic empowering individuals
            to achieve optimal health, longevity, and a vibrant life through
            personalized care and innovative therapies that seamlessly blend
            ancient wisdom withe modern science
          </p>
        </div>
      </div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${doctor3})`, backgroundSize: "cover" }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <h2 style={{ fontSize: "35px" }}>MISSION:</h2>
          <p>We are committed to:</p>
          <div style={{ maxWidth: "600px" }}>
            <p>
              <span>1. Providing Comprehensive Care:</span> Offering a holistic
              approach to healthcare that addresses the physical, mental, and
              emotional aspects of well- being, with a focus on preventing
              chronic diseases and promoting longevity.
            </p>

            <p>
              <span>2. Empowering Patients:</span> Equipping individuals with
              the knowledge, tools, and support they need to make informed
              decisions about their health and actively participate in their
              healing journey.
            </p>
            <p>
              <span>3. Integrating Eastern and Western Medicine:</span>{" "}
              Combining the best of both worlds, seamlessly integrating
              time-tested traditional therapies with cutting- edge medical
              advancements to deliver comprehensive and effective care.
            </p>
            <p>
              <span>4. Pioneering Innovative Therapies:</span> Continuously
              exploring and implementing innovative treatments, such as stem
              cell therapy, IV nutrition, and cannabis-based therapies, to
              improve health outcomes and enhance quality of life.
            </p>
            <p>
              <span>5. Fostering a Compassionate Environment:</span> Creating a
              welcoming, supportive, and nurturing environment where patients
              feel heard, respected, and empowered to achieve their wellness
              goals.
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${about7})`,
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
        <div style={{ maxWidth: "1000px" }}>
          <div style={{ maxWidth: "900px" }}>
            <span>Our Integrative Approach:</span>
            <br />
            At Vital Medi Clinic, we combine the best of Eastern and Western
            medicine, integrating traditional Thai herbal remedies and{" "}
            <span>time-honored ATTM practices</span> with innovative medical
            technologies. We offer a variety of treatments, including IV
            Nutrition, PRP Therapy,{" "}
            <span>
              {" "}
              and a comprehensive suite of Thai Traditional Medicine therapies,
            </span>{" "}
            to support your {"body's"} natural healing processes and promote
            optimal health
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              textAlign: "right",
              paddingTop: "50px",
            }}
          >
            <span>Your Journey to a Healthier, Longer Life:</span>
            <p>
              Our mission is to empower you to take control of your health and
              well-being. We believe that by focusing on prevention,
              personalized treatment, a holistic approach to wellness,{" "}
              <span>
                {" "}
                and the integration of Applied Thai Traditional Medicine,
              </span>{" "}
              We can help you achieve your goals and live a longer, more
              fulfilling life.
            </p>
          </div>
        </div>
      </div>
      <div
        className="center"
        style={{ backgroundColor: "#e9e9e7", padding: "2rem 10px 1rem" }}
      >
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <h2>OUR PHILOSOPHY & CORE VALUES:</h2>
          <p>
            A HOLISTIC PATH TO LIFELONG VITALITY & LONGEVITY, ROOTED IN THAI
            TRADITION
          </p>
          <p style={{ padding: "1rem 0" }}>
            At Vital Medi Clinic, we believe that true wellness is a lifelong
            journey, not a destination. Our approach to healthy and healing is
            rooted in the following core principles:
          </p>
          {data2.map((item, index) => (
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
            >
              <img
                loading="lazy"
                src={item.icon}
                style={{ width: "7rem", height: "7rem", objectFit: "contain" }}
              />
              <div
                style={{
                  padding: "0 1rem",
                  textAlign: index % 2 === 0 ? "left" : "right",
                  maxWidth: "600px",
                }}
              >
                <h4>{item.title}</h4>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="backgroundImage center"
        style={{
          backgroundImage: `url(${commitment})`,
          backgroundSize: "cover",
          color: "#fff",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "35px" }}>OUR COMMITMENT</h2>
        <p style={{ fontWeight: "lighter" }}>
          At Vital Clinic, we are more than just a healthcare provider.
          <br />
          We are your partners in health, dedicated to helping you achieve
          optimal well-being and longevity. <br /> We are committed to providing
          you with the highest quality care, <br />
          utilizing a holistic and personalized approach that empowers you to
          live your best life.
        </p>
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "2px",
            borderRadius: "2px",
            backgroundColor: "#fff",
            margin: "2rem 0",
          }}
        />
        <img loading="lazy" src={logo} className="logo" />
      </div>
      <div
        style={{
          backgroundImage: `url(${earth})`,
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
        <div
          className="center"
          style={{
            maxWidth: "1000px",
            width: "100%",
            flexDirection: "column",
            backgroundColor: "#fff",
            padding: "2rem 10px",
            borderRadius: "40px",
          }}
        >
          <h2>
            HOW WE APPROACH <br /> YOUR HEALTH JOURNEY
          </h2>
          <p>
            At Vital Medi Clinic, we are more than just a medical facility; we
            are your partners in a <br /> personalized journey lifelong
            wellness. Our approach is rooted in the following:
          </p>
          {data4.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
                alignItems: "center",
                paddingBottom: "3rem",
              }}
            >
              <img src={item.image} style={{ maxWidth: "430px", width:'100%' }} />
              <div
                style={{
                  paddingLeft: index % 2 !== 0 ? "0px" : "30px",
                  paddingRight: index % 2 !== 0 ? "30px" : "0px",
                  maxWidth: "450px",
                  textAlign: index % 2 !== 0 ? "right" : "left",
                }}
              >
                <h4>{item.title}</h4>
                <h4>{item.title2}</h4>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${about8})`,
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
        <div style={{ maxWidth: "1000px" }}>
          <p>
            <span>Your Path to Optimal Well-being Starts Here:</span>
            <br />
            By combining Vital Medi Clinic’s Doctors expertise with our
            integrative philosophy and commitment to personalized care,Vital
            Medi Clinic provides a unique path to achieving your health and
            longevity goals
          </p>
          <p>
            <span>Call to Action:</span>
            <br />
            Contact us today to schedule a consultation and experience the
            transformative power of our holistic approach to wellness.
          </p>
        </div>
      </div>
      <div className="center" style={{ backgroundImage: `url(${doctor5})`, flexDirection: 'column' }}>
        <div
          style={{
            maxWidth: "950px",
            width: "100%",
            padding: "4rem 1rem",
          }}
        >
          <h2 style={{ textAlign: "center" }}>OUR DISTINCTIVE APPROACH</h2>
          <h2 style={{ fontWeight: 100, textAlign: "center", fontSize: 34 }}>
            Pioneering Integrative Medicine For A Longer, Healthier Life <br />
            (Key Point Of Differentiated)
          </h2>
          <p style={{ width: "100%", margin: "2rem 0" }}>
            At Vital Medi Clinic, we stand apart in the field of integrative
            medicine through our unwavering commitment to longevity,
            personalized care, and innovative therapies. Here’s what sets us
            apart:
          </p>
          <div
            style={{
              background: "#fff",
              width: "100%",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              borderRadius: "1.2rem",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <img
              loading="lazy"
              src={hand}
              style={{ width: "10rem", marginRight: "1rem" }}
            />
            <div style={{ maxWidth: "600px" }}>
              <h4>LONGEVITY AS A CORNERSTONE</h4>
              <p>
                We go beyond simply treating symptoms; we prioritize extending
                your healthspan and enhancing your vitality for years to come.
                Our approach centers on proactive prevention, early detection,
                and personalized interventions that address the root causes of
                aging and disease.
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              width: "100%",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              borderRadius: "1.2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              textAlign: "end",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <h4>EXPERTISE IN INTEGRATIVE MEDICINE</h4>
              <p>
                Our team of experienced physicians and holistic practitioners
                possesses a deep understanding of both Eastern and Western
                medical traditions. We seamlessly blend ancient wisdom with
                cutting-edge science to provide comprehensive care that
                optimizes your well-being at every stage of life.
              </p>
            </div>
            <img
              loading="lazy"
              src={injunction}
              style={{ width: "10rem", marginLeft: "1rem" }}
            />
          </div>
          <div
            style={{
              background: "#fff",
              width: "100%",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              borderRadius: "1.2rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <img
              loading="lazy"
              src={leaf}
              style={{ width: "10rem", height: "9rem", marginRight: "1rem" }}
            />
            <div style={{ maxWidth: "600px" }}>
              <h4>PERSONALIZED LONGEVITY PLANS</h4>
              <p>
                We recognize that your journey to longevity is unique. Our
                expert team takes the time to listen to your goals, assess your
                individual needs, and develop a customized plan that combines
                the most effective therapies for you, including:
              </p>
              <ul style={{ marginLeft: "40px" }}>
                <li>
                  <span>Thai Herbal Medicine:</span>Harnessing the power of
                  traditional Thai remedies to promote balance and vitality.
                </li>
                <li>
                  <span>Cutting-Edge Therapies:</span>Utilizing advanced
                  treatments like stem cell therapy, IV nutrition, and ozone
                  therapy to rejuvenate your body and slow down the aging
                  process.
                </li>
                <li>
                  <span>Cannabis-Based Therapies (where applicable):</span>
                  Exploring the potential benefits of cannabis under medical
                  supervision for pain management, mood regulation, and overall
                  well-being
                </li>
                <li>
                  <span>Comprehensive Health Check-ups:</span>Utilizing advanced
                  diagnostics to uncover hidden imbalances and identify
                  potential risks early on, allowing for targeted interventions
                  that promote longevity.
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              width: "100%",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              borderRadius: "1.2rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <img
              loading="lazy"
              src={person}
              style={{ width: "10rem", marginRight: "1rem" }}
            />
            <div style={{ maxWidth: "600px" }}>
              <h4>PATIENT EMPOWERMENT</h4>
              <p>
                We believe that knowledge is power. We empower you with
                education, resources, and ongoing support, so you can make
                informed decisions about your health and actively participate in
                your journey toward a longer, healthier life.
              </p>
            </div>
          </div>
          <div
            style={{
              background: "#fff",
              width: "100%",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              borderRadius: "1.2rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              textAlign: "end",
            }}
          >
            <div style={{ maxWidth: "600px" }}>
              <h4>
              COMMITMENT TO INNOVATION
              </h4>
              <p>
              We constantly strive to stay at the forefront of medical advancements, researching and incorporating the latest evidence-based therapies to provide you with the most effective solutions for achieving your longevity goals.
              </p>
            </div>
            <img
            loading="lazy"
            src={location}
            style={{ width: "10rem", marginLeft: "1rem" }}
          />
          </div>
        </div>
        <span>Vital Medi Clinic is not just a clinic; it’s a community dedicated to helping you live a longer, healthier, and more fulfilling life. </span>
        <p style={{marginBottom: '2rem'}}>Our unique blend of expertise, personalized care, and innovative therapies sets us apart as leaders in integrative medicine and longevity.</p>
      </div>
    </div>
  );
};

export default AboutUs;
