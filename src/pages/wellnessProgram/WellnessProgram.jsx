import targeted from "../../assets/SERVICES/targeted.jpg";
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import medicine from "../../assets/SERVICES/medicine.jpg";
import { serviceData } from "../servicesOffered/data";
import { Link } from "react-router-dom";

const WellnessProgram = () => {
  return (
    <div>
      <div
        className="center"
        style={{ display: "flex", background: "#e6e8e7", padding: "3rem 0",flexWrap:"wrap" }}
      >
        <img
          src={dotes}
          style={{ width: "10rem", position: "absolute", left: 0 }}
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
          {/*<p>
            Our clinic offers Placenta Therapy, IV Nutrition, Ozone Therapy, and
            Stem Cell Therapy programs designed to enhance cellular
            regeneration, promote rejuvenation, and support overall well-being.
          </p>*/}
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
          <img
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
      <div className="center" style={{ padding: "2rem 1rem" }}>
        <div className="container">
          <p style={{ textAlign: "center", paddingBottom: "2rem" }}>
            Our clinic offers a range of specialized wellness programs designed
            to support cellular health, promote tissue repair, and enhance
            overall vitality. These programs utilize innovative therapies with
            the potential to accelerate healing and optimize your well-being
          </p>
          {serviceData.map((item, index) => (
            <Link to={`/service${item.link}`}
              className="item"
              key={index}
              style={{
                width: "100%",
                background: "#fff",
                display: "flex",
                flexWrap:"wrap",
                flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
                marginBottom: "1rem",
                padding: "1rem 1.5rem",
                borderRadius: "1.2rem",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <img src={item.image} style={{ width: "7rem" }} />
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
      <div className="container center" style={{flexWrap:"wrap"}}>
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
          <img
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
              marginLeft:"2.6rem"
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
            goals.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WellnessProgram;
