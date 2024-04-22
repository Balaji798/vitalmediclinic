import navBanner from "../assets/HOMEBAR/pic-clinic-02.jpg";
import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <p className="different">
          <a>PACKAGE</a>
        </p>
        <div className="dropdown-content" style={{justifyContent:"flex-start"}}>
          <img src={navBanner} style={{ width: "70%" }} alt="/" />
          <div
            style={{
              maxWidth:"300px",
              width: "100%",
              padding: "0 10px",
            }}
          >
                <Link
                  to="/package"
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
                  <h2>PACKAGE</h2>
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
              >
                <Link
                  to="/health-checkup-package"
                  style={{ cursor: "pointer" }}
                  className="sub-menu"
                >
                  HEALTH CHECKUP PACKAGE
                </Link>
                <Link
                  to="/package/promotion"
                  style={{ cursor: "pointer" }}
                  className="sub-menu"
                >
                  PROMOTIONS
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
