import exploring from "../../assets/SERVICES/exploring.jpg";
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import { ourData, potentialFData } from "../servicesOffered/data";

const KartomTherapies = () => {
  return (
    <div>
      {" "}
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
        <img
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
                <img src={item.image} style={{ width: "7rem" }} />
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
        <img
          src={dotes}
          style={{
            width: "10rem",
            position: "absolute",
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
                <img
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

export default KartomTherapies;
