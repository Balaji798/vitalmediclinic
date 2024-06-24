import { Link } from "react-router-dom";
import doctor1 from "../../assets/doctor/doctor-3.jpg";
import doctor2 from "../../assets/doctor/chawapon.jpg";
import doctor3 from "../../assets/doctor/kantapong.jpg";
import doctor4 from "../../assets/doctor/nithiwat.jpg";
import { FaLine } from "react-icons/fa6";
import dotes from "../../assets/SERVICES/servic-pic-18.png";

const doctorData = [
  {
    name: "NITHIWAT SRIKANCHANAWAT",
    degree: "M.D., M.SC., MBA, ABAARM, CNW, DIP., THAI BOARD OF INTERN MED",
    work: "Internal Medicine & Anti-Aging Doctor",
    image: doctor2,
  },
  {
    name: "PHONGPHAKORN SONTANARAT",
    degree: "MD, MBA, ABAARM, FAAMFM",
    work: "Anti-Aging Medicine & Regenerative Medicine",
    image: doctor1,
  },
  {
    name: "CHAWAPON KIDHIRUNKUL",
    degree: "MO, PRMPH, ABAARM, MSC",
    work: "Internal Medicine & Anti-Aging Doctor",
    image: doctor4,
  },
  {
    name: "KANTAPONG NUNCHAI",
    degree: "MD",
    work: "Apply Thu Tational",
    image: doctor3,
  },
];

const Doctor = () => {
  return (
    <div className="center" style={{paddingBottom:"4rem"}}>
      <div className="container">
        <p>Home {">"} Doctor</p>
        <h1 style={{padding:"2rem 0",textAlign:"center"}}>OUR MEDICAL TEAM</h1>
        <div
          className="wrap"
          style={{
            width:"100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {doctorData.map((item, index) => (
            <div
              className="center"
              key={index}
              style={{
                maxWidth: "400px",
                width: "100%",
                marginBottom: "6rem",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <img
                src={item.image}
                style={{ maxWidth: "19rem", width: "100%", height: "22rem" }}
              />
              <h4
                style={{
                  maxWidth: "19rem",
                  width: "100%",
                  padding: "0.5rem 0",
                }}
              >
                {item.name}
              </h4>
              <p
                style={{
                  maxWidth: "19rem",
                  width: "100%",
                  fontSize: "0.9rem",
                  minHeight: "2.5rem",
                  borderBottom: "1px solid",
                }}
              >
                {item.degree}
              </p>
              <p
                style={{
                  maxWidth: "19rem",
                  width: "100%",
                  fontSize: "0.9rem",
                  padding: "0.5rem 0",
                }}
              >
                {item.work}
              </p>
              <div
                style={{
                  maxWidth: "19rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Link to={`/doctor/${item.name.toLocaleLowerCase().split(" ").join("-")}`}>SHOW MORE {">>"}</Link>
              </div>
            </div>
          ))}
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
            borderRight: "10px solid",
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
            <p style={{ padding: "0.5rem 0 0",fontWeight:"bold" }}>
              CONSULT YOUR HEALTH CONCERNS AND ENJOY EXCLUSIVE PRIVIEGES HERE.
            </p>
            <div
              style={{
                maxWidth: "150px",
                width: "100%",
                height: "10px",
                background: "#0a3c57",
              }}
            />
          </div>
        </div>
      </div>
      </div>
      <img
      src={dotes}
      style={{ width: "10rem", position: "absolute", left: 0,
      marginLeft: "-4rem",
      marginBottom:"-50rem",
      bottom:0 }}
    />
    </div>
  );
};

export default Doctor;
