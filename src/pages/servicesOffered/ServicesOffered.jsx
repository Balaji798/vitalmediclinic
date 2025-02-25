import dotes from "../../assets/SERVICES/servic-pic-18.png";
import check from "../../assets/SERVICES/serice-pic-21.jpg";
import cannabis from "../../assets/SERVICES/servic-pic-20.jpg";
import exploring from "../../assets/SERVICES/exploring.jpg";
import individualized from "../../assets/SERVICES/individualized.jpg";
import proven from "../../assets/SERVICES/proven.jpg";
import synergistic from "../../assets/SERVICES/synergistic.jpg";
import holistic from "../../assets/SERVICES/holistic.jpg";
import herbal from "../../assets/SERVICES/herbal.jpg";
import additional from "../../assets/SERVICES/additional.jpg";
import targeted from "../../assets/SERVICES/targeted.jpg";
import medicine from "../../assets/SERVICES/medicine.jpg";
import { data, potentialFData, serviceData, ourData } from "./data";
import { Link } from "react-router-dom";

const ServiceOffered = () => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "10rem",
            height: "5px",
            background: "#0a3c57",
            marginRight: "2rem",
          }}
        />{" "}
        <h1 style={{ padding: "2rem 0" }}>SERVICE OFFERED</h1>
      </div>

      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${check})`,
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          width: "100%",
          backgroundSize: "cover",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        {" "}
        <div style={{ width: "400px" }}></div>
        <div style={{ maxWidth: "400px", width: "100%" }}>
          <h1 style={{ fontSize: "1.8rem" }}>COMPREHENSIVE HEALTH CHECKUPS</h1>
          <div
            style={{
              width: "100px",
              height: "2px",
              background: "#fff",
              margin: "0.5rem 0 1rem",
            }}
          ></div>
          <p style={{ fontSize: "12px" }}>
            We provide in-depth health assessments for men and women, including
            specialized testing like food allergy/intolerance analysis,
            micronutrient evaluation, NK cell activity, cancer biomarker
            screening, immune function profiling, and telomere length analysis.
            These tests offer actionable insights for optimizing your health.
          </p>
        </div>
      </div>
      <div
        className="center"
        style={{ display: "flex", background: "#e6e8e7", padding: "3rem 0" }}
      >
         <img loading="lazy"
          src={dotes}
           className="content-position"
          style={{ width: "10rem", left: 0 }}
        />
        <div
          style={{ maxWidth: "530px", textAlign: "center", padding: "1rem" }}
        >
          <div
            style={{
              width: "8rem",
              height: "3px",
              background: "#0a3c57",
              marginRight: "2rem",
              marginBottom: "2rem",
            }}
          />
          <h1 style={{ fontSize: "2rem" }}>
            TARGETED WELLNESS
            <br /> PROGRAMS
          </h1>
          <p>
            Our clinic offers <a style={{color:"blue",textDecoration:"underline"}} href=" https://vitalmediclinic.com/service/wellness/placenta-therapy">Placenta Therapy</a>, <a style={{color:"blue",textDecoration:"underline"}} href="https://vitalmediclinic.com/service/wellness/iv-nutrition-therapy">IV Nutrition</a>, <a style={{color:"blue",textDecoration:"underline"}} href="https://vitalmediclinic.com/service/wellness/ozone-therapy">Ozone Therapy</a>, and
            <a style={{color:"blue",textDecoration:"underline"}} href="https://vitalmediclinic.com/service/wellness/stem-therapy">Stem Cell Therapy</a> programs designed to enhance cellular
            regeneration, promote rejuvenation, and support overall well-being.
          </p>
          <p>
            Targeted Wellness Programs: Harnessing Advanced Regeneration and
            Rejuvenation Therapies
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "17.7rem",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#0a3c57",
              width: "3rem",
              height: "3rem",
              paddingLeft: "4px",
              paddingTop: "4px",
            }}
          >
            <div
              style={{ width: "100%", height: "100%", background: "#fff" }}
            />
          </div>
           <img loading="lazy"
            src={targeted}
            style={{
              maxWidth: "400px",
              position: "absolute",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          />
          <div
            style={{
              width: "380px",
              background: "#0a3c57",
              height: "",
              paddingLeft: "20px",
              paddingBottom: "15px",
            }}
          >
            <div
              style={{ width: "100%", height: "4rem", background: "#fff" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="center" style={{ padding: "2rem 0" }}>
        <div className="container">
          <p style={{ textAlign: "center", paddingBottom: "2rem" }}>
            Our clinic offers a range of specialized wellness programs designed
            to support cellular health, promote tissue repair, and enhance
            overall vitality. These programs utilize innovative therapies with
            the potential to accelerate healing and optimize your well-being
          </p>
          {serviceData.map((item, index) => (
            <Link to={item.link}
              className="item"
              key={index}
              style={{
                width: "100%",
                background: "#fff",
                display: "flex",
                flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
                marginBottom: "1rem",
                padding: "1rem 1.5rem",
                borderRadius: "1.2rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
               <img loading="lazy" src={item.image} style={{ width: "7rem" }} />
              <div
                style={{
                  maxWidth: "600px",
                  textAlign: index % 2 !== 0 ? "end" : "start",
                  paddingLeft: index % 2 === 0 ? "1rem" : "0rem",
                  paddingRight: index % 2 !== 0 ? "1rem" : "0rem",
                }}
              >
                <h4>{item.title}</h4>
                <p>{item.para}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="center"
        style={{ background: "#e6e8e7", padding: "2rem 0" }}
      >
        <div className="container center" style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "15.2rem",
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <div
              style={{
                background: "#0a3c57",
                width: "3rem",
                height: "3rem",
                paddingLeft: "4px",
                paddingTop: "4px",
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "#fff" }}
              />
            </div>
             <img loading="lazy"
              src={medicine}
              style={{
                maxWidth: "400px",
                position: "absolute",
                marginLeft: "10px",
                marginTop: "10px",
              }}
            />
            <div
              style={{
                width: "380px",
                background: "#0a3c57",
                height: "",
                paddingRight: "20px",
                paddingBottom: "12px",
                marginLeft: "2.6rem",
              }}
            >
              <div
                style={{ width: "100%", height: "4rem", background: "#fff" }}
              ></div>
            </div>
          </div>
          <div style={{ maxWidth: "500px", padding: "1rem" }}>
            <h2>OUR TARGETED WELLNESS PROGRAMS MAY BE BENEFICIAL FOR:</h2>
            <ul
              style={{ fontWeight: 300, fontSize: "0.9rem", padding: "1rem" }}
            >
              <li>Boosting energy and vitality</li>
              <li>Accelerating healing and recovery</li>
              <li>Enhancing athletic performance</li>
              <li>Supporting healthy aging</li>
              <li>Addressing chronic health conditions</li>
            </ul>
            <p style={{ fontSize: "0.9rem" }}>
              Consult with our specialists to discover the power of these
              innovative therapies and personalize a program for your unique
              goals
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "2rem", background: "#0a3c57" }} />
      <div
        className="center"
        style={{ flexDirection: "column", padding: "2rem 0" }}
      >
         <img loading="lazy"
          src={dotes}
           className="content-position"
          style={{ width: "10rem", left: 0 }}
        />
        <h2>MEDICAL CONDITIONS ADDRESSED</h2>
        <div
          className="center"
          style={{
            maxWidth: "900px",
            width: "100%",
            flexWrap: "wrap",
            paddingTop: "2rem",
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              style={{ padding: "0 1.5rem 1.5rem", textAlign: "center" }}
            >
               <img loading="lazy" src={item.image} style={{ width: "7rem" }} />
              <h4>{item.title}</h4>
              <h4>{item?.title2}</h4>
            </div>
          ))}
        </div>
      </div>
      <div
        className="center"
        style={{ background: "#e6e8e7", padding: "2rem 0" }}
      >
         <img loading="lazy"
          src={dotes}
           className="content-position"
          style={{ width: "10rem", left: 0 }}
        />
        <div className="center">
          <div style={{ maxWidth: "500px", textAlign: "center" }}>
            <div
              style={{
                width: "8rem",
                height: "3px",
                background: "#0a3c57",
                marginRight: "2rem",
                marginBottom: "2rem",
              }}
            />
            <h2>
              THAI HERBAL <br />
              MEDICINE EXPERTISE
            </h2>
            <p>
              <span>Thai Herbal Medicine Expertise:</span> Harnessing the Power
              of Ancient Healing Traditions
              <br />
              Our clinic draws upon the centuries-old wisdom of Thai Herbal
              Medicine, renowned for its potent natural remedies and holistic
              approach to healing. We meticulously select and integrate Thai
              herbal remedies into our treatment protocols, offering a unique
              and powerful approach to enhance wellness and vitality
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "18rem",
              maxWidth: "500px",
              width: "100%",
              marginLeft: "2rem",
            }}
          >
            <div
              style={{
                background: "#0a3c57",
                width: "3rem",
                height: "3rem",
                paddingLeft: "4px",
                paddingTop: "4px",
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "#fff" }}
              />
            </div>
             <img loading="lazy"
              src={herbal}
              style={{
                maxWidth: "400px",
                position: "absolute",
                marginLeft: "10px",
                marginTop: "10px",
              }}
               
            />
            <div
              style={{
                width: "380px",
                background: "#0a3c57",
                height: "",
                paddingLeft: "20px",
                paddingBottom: "15px",
              }}
            >
              <div
                style={{ width: "100%", height: "4rem", background: "#fff" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="center" style={{ padding: "2rem 0" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            KEY ELEMENTS OF OUR THAI HERBAL MEDICINE APPROACH:
          </h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                maxWidth: "550px",
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
               <img loading="lazy" src={individualized} style={{ maxWidth: "200px" }}  />
              <li style={{ maxWidth: "340px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Individualized Formulations:
                </span>{" "}
                Your dedicated practitioner carefully designs an herbal blend
                tailored to your specific needs, health conditions, and goals.
              </li>
            </div>
            <div
              style={{
                maxWidth: "550px",
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
               <img loading="lazy" src={proven} style={{ maxWidth: "200px" }}  />
              <li style={{ maxWidth: "340px" }}>
                <span style={{ fontWeight: "bold" }}>Proven Remedies:</span> We
                utiliz herbs with a long history of safe and effective use
                within Traditional Thai Medicine, backed by modern scientific
                research.
              </li>
            </div>
            <div
              style={{
                maxWidth: "550px",
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
               <img loading="lazy" src={synergistic} style={{ maxWidth: "200px" }}  />
              <li style={{ maxWidth: "340px" }}>
                <span style={{ fontWeight: "bold" }}>
                  Synergistic Integration:
                </span>{" "}
                Thai Herbal Medicine complements Western medical modalities,
                offering a multi-faceted approach to promote optimal health
                outcomes.
              </li>
            </div>
            <div
              style={{
                maxWidth: "550px",
                width: "100%",
                padding: "1rem 0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
               <img loading="lazy" src={holistic} style={{ maxWidth: "200px" }}  />
              <li style={{ maxWidth: "340px" }}>
                <span style={{ fontWeight: "bold" }}>Holistic Focus:</span> We
                address not only physical symptoms but body, mind, and spirit to
                support long-term well-being.
              </li>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            Experience the transformative benefits of Thai Herbal Medicine.
            Schedule a consultation to explore how these ancient remedies can{" "}
            <br />
            empower your journey to optimal health
          </p>
        </div>
      </div>
      <div
        style={{ padding: "2rem 0", background: "#f9f9f9",display:"flex" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "26rem",
              maxWidth: "700px",
              width: "100%",
              marginRight: "2rem",
              alignItems:"flex-end"
            }}
          >
            <div
              style={{
                background: "#0a3c57",
                width: "3rem",
                height: "3rem",
                paddingRight: "4px",
                paddingTop: "4px",
              }}
            >
              <div
                style={{ width: "100%", height: "100%", background: "#fff" }}
              />
            </div>
             <img loading="lazy"
              src={additional}
              style={{
                maxWidth: "600px",
                position: "absolute",
                marginRight: "0.5rem",
                marginTop: "8px",
              }}
               
            />
            <div
              style={{
                width: "380px",
                background: "#0a3c57",
                height: "",
                paddingRight: "20px",
                paddingBottom: "12px",
                marginLeft: "2.6rem",
              }}
            >
              <div
                style={{ width: "100%", height: "4rem", background: "#fff" }}
              ></div>
            </div>
          </div>
          <div style={{ padding: "1rem", maxWidth: "600px" }}>
            <h2>
              ADDITIONAL
              <br /> CONSIDERATION
            </h2>
            <p>
              <span>• Specific Examples:</span> We utilize potent Thai herbs
              like Plai (Zingiber cassumunar) for its anti-inflammatory
              properties, Turmeric (Curcuma longa) to support healthy joints and
              digestion, and Andrographis <span>(ฟ้า ทะลายโจร)</span> for its
              immune-boosting and antiviral effects.
            </p>
            <p>
              <span>• Quality Assurance:</span> We are committed to sourcing
              only the highest quality, authentic Thai herbs from reputable
              suppliers and carefully verifying their identity and purity.
            </p>
          </div>
        </div>
      </div>
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${cannabis})`,
          display: "flex",
          justifyContent: "flex-end",
          color: "#fff",
          width: "100%",
          backgroundSize: "cover",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        <div style={{ width: "50%" }}>
          <h2>
            CANNABIS AND KARTOM <br /> THERAPIES
          </h2>
          <p style={{ maxWidth: "480px" }}>
            Under the guidance of experienced professionals, we offer
            therapeutic interventions utilizing cannabis and kratom, responsibly
            exploring their potential benefits in pain management, mood
            regulation, sleep support, stress relief, and overall well-being
          </p>
        </div>
      </div>
      <div className="center" style={{ padding: "2rem 0" }}>
        <div style={{ maxWidth: "500px", textAlign: "end" }}>
          <h2>
            EXPLORING EMERGING <br />
            TREATMENT OPTIONS
          </h2>
          <p>
            Our clinic recognizes the growing interest in the potential
            therapeutic benefits of cannabis and kratom. We offer carefully
            guide therapeutic interventions with ther=se plant-based substances
            under the supervision of experienced healthcare professionals.
          </p>
        </div>
        <div></div>
         <img loading="lazy"
          src={exploring}
          alt="/exploring"
          style={{ maxWidth: "400px", marginLeft: "1rem" }}
           
        />
      </div>
      <div
        className="center"
        style={{
          width: "100%",
          flexDirection: "column",
          padding: "2rem 0",
          background: "#0a3c57",
        }}
      >
        <h2 style={{ color: "#fff" }}>
          POTENTIAL APPLICATIONS OF CANNABIS AND KRATOM THERAPIES
        </h2>
        <div className="container" style={{ maxWidth: "1000px" }}>
          {potentialFData.map((item, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
              }}
            >
              <div
                style={{
                  width: "90%",
                  background: "#fff",
                  display: "flex",
                  marginBottom: "1rem",
                  padding: "1rem 1.5rem",
                  borderRadius: "1.2rem",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                  flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
                }}
              >
                 <img loading="lazy" src={item.image} style={{ width: "7rem" }}  />
                <div
                  style={{
                    maxWidth: "600px",
                    textAlign: index % 2 !== 0 ? "end" : "start",
                    paddingLeft: index % 2 === 0 ? "1rem" : "0rem",
                    paddingRight: index % 2 !== 0 ? "1rem" : "0rem",
                  }}
                >
                  <h2>{item.title}</h2>
                  <p>{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="center" style={{ padding: "3rem 0" }}>
         <img loading="lazy"
          src={dotes}
           className="content-position"
          style={{
            width: "10rem",
            left: 0,
            marginLeft: "-3rem",
            marginTop: "-10rem",
          }}
           
        />
        <div className="container">
          <h2 style={{ textAlign: "center", padding: "1rem 0" }}>
            OUR RESPONSIBLE APPROACH
          </h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              color: "#000",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {ourData.map((item, index) => (
              <div key={index} style={{ maxWidth: "380px" }}>
                 <img loading="lazy"
                  src={item.image}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    marginBottom: "1rem",
                  }}
                   
                />
                <h3>{item.title}</h3>
                <p>{item.para}</p>
              </div>
            ))}
          </div>
          <p style={{ paddingTop: "1rem" }}>
            <span style={{ fontWeight: "bold" }}>Important Note:</span> Cannabis
            and kratom therapies are evolving fields of medicine. We emphasize
            transparency, ongoing monitoring, aand patient
            <br />
            education to ensure safe and responsible exploration of their
            potential benefits
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceOffered;
