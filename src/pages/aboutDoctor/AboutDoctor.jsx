import { useParams } from "react-router-dom";
import { doctorData } from "../../assets/doctorData";
import doctorBg from "../../assets/doctor/doctorBg.png";
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import { FaLine } from "react-icons/fa6";

const AboutDoctor = () => {
  const { doctorName } = useParams();
  const doctor = doctorData.filter(
    (item) =>
      item?.name?.toLocaleLowerCase() === doctorName?.split("-").join(" ")
  );

  console.log(doctor);
  return (
    <div className="center" style={{ marginBottom: "2rem",padding:"1rem 1rem 0" }}>
      <div className="container">
        <p>
          Home {">"} Doctor {">"} {doctor[0]?.name}
        </p>
        <div style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ maxWidth: "600px", width: "100%" }}>
              <div
                className="backgroundImage"
                style={{
                  backgroundImage: `url(${doctorBg})`,
                  maxWidth: "600px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  height: "30rem",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  paddingTop: "2rem",
                }}
              >
                 <img loading="lazy"
                  src={doctor[0]?.image}
                 className="doctor-img"
                  
                />
              </div>
            </div>
            <div style={{ maxWidth: "580px", width: "100%" }}>
              <h1>{doctor[0]?.name}</h1>
              <p style={{ fontWeight: "bold", paddingBottom: "0.5rem" }}>
                {doctor[0]?.degree}
              </p>
              <p
                style={{
                  borderTop: "1px solid",
                  borderBottom: "1px solid",
                  padding: "0.5rem 0",
                }}
              >
                {doctor[0]?.expert}
              </p>
              <h4>EDUCATION</h4>
              {doctor[0]?.eduction.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ maxWidth: "580px", width: "100%" }}>
              <h4>CERTIFICATION</h4>
              {doctor[0]?.CERTIFICATION.map((item, index) => (
                <p key={index} style={{ padding: "0.5 0", fontSize: "0.9rem" }}>
                  {item}
                </p>
              ))}
            </div>
{    /*        <div style={{ maxWidth: "580px", width: "100%" }}>
              <h4>WORK EXPERTISE</h4>
              {doctor[0]?.experience.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>*/}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              borderRight: "5px solid",
            }}
          >
            <div
              style={{
                background: "#0a3c57",
                color: "#fff",
                padding: "0.6rem 1rem",
                display: "flex",
                alignItems: "center",
                maxWidth: "400px",
                marginRight: "2rem",
              }}
            >
              <FaLine size={45} style={{ marginRight: "1rem" }} /> ADD LINE:
              @VITALMEDICLINIC
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <p style={{ padding: "0.5rem 0 0" }}>
                CONSULT YOUR HEALTH CONCERNS AND ENJOY EXCLUSIVE PRIVIEGES HERE.
              </p>
              <div
                style={{
                  maxWidth: "150px",
                  width: "100%",
                  height: "5px",
                  background: "#0a3c57",
                }}
              />
            </div>
          </div>
        </div>
      </div>
       <img loading="lazy"
      src={dotes}
       className="content-position"
      style={{ width: "10rem", right: 0,bottom:0 }}
       
    />
    </div>
  );
};

export default AboutDoctor;
