import { Link } from "react-router-dom";
import doctor1 from "../../assets/doctor/doctor-3.jpg";
import doctor2 from "../../assets/doctor/chawapon.jpg";
import doctor3 from "../../assets/doctor/kantapong.jpg";
import doctor4 from "../../assets/doctor/nithiwat.jpg";
import { FaLine } from "react-icons/fa6";
import dotes from "../../assets/SERVICES/servic-pic-18.png";

const doctorData = [
  {
    name: "DR. CHAWAPON KIDHIRUNKUL",
    degree: "MO, PRMPH, ABAARM, MSC",
    work: "Internal Medicine & Anti-Aging Doctor",
    image: doctor2,
  },
  {
    name: "DR. PHONGPHAKORN SONTANARAT",
    degree: "MD, MBA, ABAARM, FAAMFM",
    work: "Anti-Aging Medicine & Regenerative Medicine",
    image: doctor1,
  },
  {
    name: "DR. NITHIWAT SRIKANCHANAWAT",
    degree: "M.D., M.SC., MBA, ABAARM, CNW, DIP., THAI BOARD OF INTERN MED",
    work: "Internal Medicine & Anti-Aging Doctor",
    image: doctor4,
  },
  {
    name: "DR. KANTAPONG NUNCHAI",
    degree: "MD",
    work: "Applied Thai Traditional Medicine",
    image: doctor3,
  },
];

const Doctor = () => {
  return (
    <div className="center" style={{ padding: "0 1rem 4rem" }}>
      <div className="container center" style={{flexDirection:"column"}}>
        <p style={{width:"100%",paddingTop:"0.5rem"}}>Home {">"} Doctor</p>
        <h1 style={{ padding: "2rem 0", textAlign: "center" }}>
          OUR MEDICAL TEAM
        </h1>
        <p style={{ color: "#000", marginBottom: "1rem", maxWidth: "1100px" }}>
          <span>At Vital Medi Clinic,</span>we believe in a holistic approach to
          healthcare that combines the best of At Vital Medi Clinic, we are
          proud of our team of experienced physicians who share a passion for
          integrative medicine, longevity, and a commitment to providing
          personalized care. Our doctors have extensive experience in preventive
          medicine, anti-aging, and regenerative therapies, combining the best
          of Eastern and Western approaches to optimize your health and
          well-being.
        </p>
        <p style={{ color: "#000", maxWidth: "1100px",marginBottom: "1rem", }}>
          With a deep understanding of both traditional and alternative
          therapies, our certified practitioners are skilled in integrating
          these modalities to create customized treatment plans that address
          your unique needs and goals. We take the time to listen to your
          concerns, thoroughly assess your health history, and explore
          innovative longevity strategies, ensuring that every aspect of your
          well-being is considered.
        </p>
        <div
          className="wrap"
          style={{
            width: "100%",
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
                marginBottom: "2rem",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
               <img loading="lazy"
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
                <Link
                  to={`/doctor/${item.name
                    .toLocaleLowerCase()
                    .split(" ")
                    .join("-")}`}
                >
                  SHOW MORE {">>"}
                </Link>
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
              <p style={{ padding: "0.5rem 0 0", fontWeight: "bold" }}>
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
       <img loading="lazy"
        src={dotes}
         className="content-position"
        style={{
          width: "10rem",
          left: 0,
          marginLeft: "-4rem",
          marginBottom: "-50rem",
          bottom: 0,
        }}
      />
    </div>
  );
};

export default Doctor;
