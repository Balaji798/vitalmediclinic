import navBanner from "../assets/HOMEBAR/pic-clinic-03.jpg";
import { Link } from "react-router-dom";

const Doctor = () => {
  const doctorData = [
    {
      name: "DR.CHAWAPON KIJHIRANKUL",
      expert: "PREVENTIVE MEDICINE,",
      expert1: "ANTI - AGING MEDICINE",
    },
    {
      name: "DR.PHONGPHAKORN SONTANARAT",
      expert: "ANTI - AGING MEDICINE,",
      expert1: "REGENERATIVE MEDICINE",
    },
    {
      name: "DR.NITHIWAT SRIKANCHANAWAT",
      expert: "INTERNAL MEDICINE,",
      expert1: "ANTI-AGING MEDICINE",
    },
    {
      name: "DR.WASINEE VITHAYAVEROJ",
      expert: "ANTI - AGING MEDICINE",
      expert1: "",
    },
    {
      name: "DR. ΚΑΝΤΑΡΟNG NUNCHAI",
      expert: "APPLIED THAI TRADITIONAL MEDICINE",
      expert1: "",
    },
  ];
  return (
    <div className="navbar">
      <div className="dropdown">
        <p className="different">
          <a>DOCTOR</a>
        </p>
        <div
          className="dropdown-content"
          style={{ justifyContent: "flex-start" }}
        >
           <img loading="lazy" src={navBanner} style={{ width: "40%" }} alt="/"  />
          <div
            style={{
              maxWidth: "800px",
              width: "100%",
              padding: "0 10px",
            }}
          >
            <Link
              to="/doctor"
              className="title"
              style={{
                fontSize: 16,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                paddingRight: "-2rem",
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem 0",
                maxWidth: "300px",
              }}
            >
              <h2>DOCTOR</h2>
              <div
                style={{
                  width: "10rem",
                  height: "1rem",
                  borderBottom: "2px solid#000",
                  marginLeft: "0.5rem",
                  marginTop: "0.7rem",
                }}
              />
            </Link>
            <div
              className="dropdown-item"
              onClick={() => {
                window.location.reload();
              }}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              {doctorData.map((item, index) => (
                <Link
                  to={`/doctor/${item.name
                    .split(" ")
                    .join("-")
                    .toLocaleLowerCase()}`}
                  style={{
                    cursor: "pointer",
                    maxWidth: "300px",
                    minHeight: "100px",
                  }}
                  className="sub-menu"
                  key={index}
                >
                  <h3>{item.name}</h3>
                  <p>{item.expert}</p>
                  <p>{item.expert1}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
