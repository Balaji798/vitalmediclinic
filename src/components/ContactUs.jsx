import navBanner from "../assets/HOMEBAR/pic-clinic-04.jpg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <p className="different">
          <a>CONTACT US</a>
        </p>
        <div className="dropdown-content" style={{justifyContent:"flex-start"}}>
         <img loading="lazy" src={navBanner} style={{ width: "65%" }} alt="/"  />
          <div
            style={{
              maxWidth:"400px",
              width: "100%",
              padding: "0 10px",
            }}
          >
              
                {" "}
                <Link
                  to="/contact-us"
                  className="title"
                  style={{
                    fontSize: 16,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    paddingRight: "-2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "1rem 0",
                    maxWidth: "360px",
                  }}
                >
                  <h2>CONTACT US</h2>
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
                  to="/vision-mission"
                  style={{ cursor: "pointer" }}
                  className="sub-menu"
                >
                 <h3>GOOGLE MAP</h3>
                </Link>
                <Link
                  to="/philosophy"
                  style={{ cursor: "pointer" }}
                  className="sub-menu"
                >
                <h3>TELEPHONE</h3>
                </Link>
                <Link
                  to="/vision-mission"
                  style={{ cursor: "pointer" }}
                  className="sub-menu"
                >
                <h3>EMAIL</h3>
                </Link>
                <Link
                  to="/core-value"
                  style={{ cursor: "pointer" }}
                  className="sub-menu"
                >
                <h3>OA</h3>
                </Link>
                <Link
                  to="/differentiation"
                  style={{ cursor: "pointer" }}
                  className="sub-menu"
                >
                <h3>SOCIAL MEDIA</h3>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs