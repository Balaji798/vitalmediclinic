import doctor1 from "../../assets/about-us/pic-clinic-30.jpg";
import doctor2 from "../../assets/about-us/pic-clinic-31.jpg";
import doctor3 from "../../assets/about-us/pic-clinic-32.jpg";
import doctor4 from "../../assets/about-us/pic-clinic-33.jpg";
import doctor5 from "../../assets/about-us/pic-clinic-34.jpg";
import location from "../../assets/about-us/pic-clinic-26.png";
import person from "../../assets/about-us/pic-clinic-25.png";
import hand from "../../assets/about-us/pic-clinic-23.png";
import leaf from "../../assets/about-us/pic-clinic-24.png";
import injunction from "../../assets/about-us/pic-clinic-22.png";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "2rem 0" }}>AboutUs</h1>
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
          }}
        >
          <h1>VINSON</h1>
          <p style={{ maxWidth: "600px" }}>
            <span>Vital Medi Clinic</span> envisions a revolutionized healthcare
            landscape where Eastern wisdom and Western innovation converge to
            achieve optimal wellness. We strive to empower individuals on their
            health journeys through personalized care and groundbreaking
            therapies
          </p>
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
          <h1>MISSION</h1>
          <p style={{ maxWidth: "600px", textAlign: "end" }}>
            <span>Vital Medi Clinic</span> envisions a revolutionized healthcare
            landscape where Eastern wisdom and Western innovation converge to
            achieve optimal wellness. We strive to empower individuals on their
            health journeys through personalized care and groundbreaking
            therapies
          </p>
        </div>
      </div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${doctor3})` }}
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
          <h1>PHILOSOPHY</h1>
          <p style={{ maxWidth: "600px" }}>
            <span>Vital Medi Clinic</span> envisions a revolutionized healthcare
            landscape where Eastern wisdom and Western innovation converge to
            achieve optimal wellness. We strive to empower individuals on their
            health journeys through personalized care and groundbreaking
            therapies
          </p>
        </div>
      </div>
      <div
        className="backgroundImage"
        style={{ backgroundImage: `url(${doctor4})` }}
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
          <h1>CORE VALUES</h1>
          <p style={{ maxWidth: "600px", textAlign: "end" }}>
            <span>Vital Medi Clinic</span> envisions a revolutionized healthcare
            landscape where Eastern wisdom and Western innovation converge to
            achieve optimal wellness. We strive to empower individuals on their
            health journeys through personalized care and groundbreaking
            therapies
          </p>
        </div>
      </div>
      <div className="center" style={{ backgroundImage: `url(${doctor5})` }}>
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "4rem 1rem",
          }}
        >
          <h1 style={{ textAlign: "center" }}>OUR DISTINCTIVE APPROACH</h1>
          <h1 style={{ fontWeight: 100, textAlign: "center" }}>
            (How Are We Different From Others)
          </h1>
          <div
            style={{
              background: "#fff",
              width: "100%",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              borderRadius: "1.2rem",
              display: "flex",
            }}
          >
            <img src={location} style={{ width: "10rem",marginRight:"1rem" }} />
            <div>
              <h4>
                HARNESSING ANCIENT WISDOM & MODERN SCIENCE EASTERN_WESTERN
                INTEGRATION
              </h4>
              <p>
                Vital Medi Clinic uniquely combines Eastern medical philosophies
                and practices with Western medical advancements to offer a
                holistic approach that addresses the root causes of health
                issues while incorporating evidence-based treatments from both
                traditions.
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
              textAlign:"end"
            }}
          >
            <div>
              <h4>PERSONALIZED CARE, TAILORED SOLUTIONS</h4>
              <p>
                Each client receives a customized treatment plan designed around
                their individual health needs, goais, and preferences,
                incorporating the most beneficial blend of Eastern and Western
                therapies
              </p>
            </div>
            <img src={person} style={{ width: "10rem",marginLeft:"1rem" }} />
          </div>
          <div
            style={{
              background: "#fff",
              width: "100%",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              borderRadius: "1.2rem",
              display: "flex",
            }}
          >
            <img src={hand} style={{ width: "10rem",marginRight:"1rem" }} />
            <div>
              <h4>SIGNATURE THERAPIES & MODALITIES</h4>
              <p>
                Thai Herbal Medicine Expertise: We harness the centuries-old
                wisdom and medicinal properties of Thai herbal remedies,
                carefully integrating them into our treatment protocols for
                enhanced wellness and vitality
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
            }}
          >
            <div>
              <h4>EXPLORING CANNABIS & KRATOM THERAPIES</h4>
              <p>
                Our clinic offers therapeutic interventions utilieing cannabis
                and kratom, leveraging their patential benefits in pain
                management, sleep support, maod regulation, stress relief, and
                overall well-being under the guidance of experienced healthcare
                professionals
              </p>
            </div>
            <img src={leaf} style={{ width: "10rem",marginLeft:"1rem" }} />
          </div>
          <div
            style={{
              background: "#fff",
              width: "100%",
              marginTop: "2rem",
              padding: "1rem 1.5rem",
              borderRadius: "1.2rem",
              display: "flex",
              justifyContent:"space-between"
            }}
          >
            <img src={injunction} style={{ width: "10rem",height:"10rem",marginRight:"1rem" }} />
            <div style={{maxWidth:"720px"}}>
              <h4>ADVANCED WESTERN MODALITIES</h4>
              <p>
                Our clinic integrates a range of cutting-edge Western medical
                techniques to accelerate healing, optimize health, and support
                your {"body's"} innate regenerative abilities. These include:
              </p>
              <ul style={{marginLeft:"2rem"}}>
                <li>
                  <span>IV Nutrient Therapy:</span> Intravenous (IV) delivery of
                  essential vitamins, minerals, and antioxidants ensures maximum
                  absorption and rapid cellular replenishment for enhanced
                  energy, immune function, and overall vitality.
                </li>
                <li>
                  <span>Stem Cell Therapy:</span> We utilize the latest
                  regenerative medicine techniques, harnessing the potential of
                  stem cells to promote tissue repair, reduce inflammation, and
                  support healing across a wide range of health conditions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
