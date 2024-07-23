import navBanner from "../assets/HOMEBAR/pic-clinic-01.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <p className="different">
          <a>ABOUT US</a>
        </p>
        <div className="dropdown-content">
          <div
            style={{
              maxWidth: "300px",
              width: "100%",
              padding: "0 10px",
            }}
          >
            {" "}
            <Link
              to="/about-us"
              className="title"
              style={{
                fontSize: 16,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                paddingRight: "-2rem",
                display: "flex",
                justifyContent: "space-between",
                margin: "1rem 0",
                maxWidth: "450px",
              }}
            >
              <h2 style={{ width: "60%" }}>ABOUT US</h2>
              <div
                style={{
                  width: "10rem",
                  height: "1rem",
                  borderBottom: "2px solid#000",
                  marginLeft: "0rem",
                  marginTop: "0.7rem",
                }}
              />
            </Link>
            <div
              className="dropdown-item"
              onClick={() => {
                window.location.reload();
              }}
            >
              <Link
                to="/about-us"
                style={{ cursor: "pointer" }}
                className="sub-menu"
              >
                ABOUT US
              </Link>
             {/*<Link
                to="/philosophy"
                style={{ cursor: "pointer" }}
                className="sub-menu"
              >
                PHILOSOPHY
              </Link>
              <Link
                to="/core-value"
                style={{ cursor: "pointer" }}
                className="sub-menu"
              >
                CORE VALUE
              </Link>
              <Link
                to="/differentiation"
                style={{ cursor: "pointer" }}
                className="sub-menu"
              >
                KEY POINTS OF DIFFERENTIATION
              </Link>*/}
            </div>
          </div>
          <img src={navBanner} style={{ width: "50%" }} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
