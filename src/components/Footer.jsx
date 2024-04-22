import { Link } from "react-router-dom";
import logo from "../assets/logo-color.png";
import qr from "../assets/qr.png";
import fb from "../assets/social/fb.png";
import line from "../assets/social/line.png";
import insta from "../assets/social/insta.png";
import phone from "../assets/social/phone.png";
import blueBack from "../assets/HOMEPAGE/pic-clinic.jpg";

const Footer = () => {
  return (
    <div
      className="center"
      style={{
        background: "#e6e8e7",
        color: "#000",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{ backgroundImage: `url(${blueBack})`,display: "flex",
        justifyContent: "center",
        flexDirection:"column",
        width: "100%",
        backgroundSize: "cover",
        alignItems: "center",
        padding: "2rem 0", }}
      >
        <h1 style={{color: "#fff",}}>ARE YOU READY FOR OPTIMUM HEALTH</h1>
        <Link to="/appointments" style={{background:"#fff",borderRadius:"10px",padding:"10px 2rem",marginTop:"2rem",color:"#0a3c57",fontWeight:"bold",fontSize:"1.2rem"}}>START NOW</Link>
      </div>
      <div className="between" style={{ maxWidth: "1300px", width: "100%",padding: "2rem 0", }}>
        <div style={{ maxWidth: "450px" }}>
          <img
            src={logo}
            style={{ objectFit: "contain", maxWidth: "26rem" }}
            alt="logo"
          />
          <p>
            Vital Medi Clinic is an Integrated Healthcare Center that practices
            Integrative Medicine, Regenerative Medicine and Micro Biology by
            combining the beauty of East & West approach
          </p>
        </div>
        <div
          style={{
            maxWidth: "200px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p style={{ textDecoration: "underline" }}>USEFUL LINKS</p>
          <Link style={{ color: "#000" }} to="/about-us">
            About Us
          </Link>
          <Link style={{ color: "#000" }} to="/service">
            Service
          </Link>
          <Link style={{ color: "#000" }} to="/package">
            Package
          </Link>
          <Link style={{ color: "#000" }} to="/doctor">
            Doctor
          </Link>
          <Link style={{ color: "#000" }} to="/contact-us">
            Contact Us
          </Link>
        </div>
        <div style={{ maxWidth: "220px" }}>
          <p style={{ textDecoration: "underline" }}>CONTACT US</p>
          <p>
            4Th Floor, The Marche, Thong Lo Rd., Khlong Tan Nuea, Wattana,
            Bangkok 10110
          </p>
          <p>info@drcbdgroup.com</p>
          <p>+66 9 4263 9964</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={qr}
            style={{ maxWidth: "12rem", marginRight: "1rem" }}
            alt="qr-code"
          />
          <div>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <img src={fb} style={{ width: "1.6rem" }} alt="faceBook" /> Vital
              Medi Clinic
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <img src={line} style={{ width: "1.6rem" }} alt="line" />{" "}
              @vitalmediclinic
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <img src={insta} style={{ width: "1.6rem" }} alt="line" /> Vital
              Medi Clinic
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <img src={phone} style={{ width: "1.6rem" }} alt="line" /> +66 9
              4263 9964
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#2d2d2e",
          color: "#fff",
          width: "100%",
          padding: "1rem 0",
        }}
      >
        <div className="flex-center" style={{flexWrap:"wrap"}}>
          <p>Vital Medi Clinic</p> | <p>Copyright 2023-2024</p> |{" "}
          <p>ALL Rigth Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
