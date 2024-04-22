import "./contact.css";
import qr from "../../assets/qr.png";
import fb from "../../assets/social/fb.png";
import line from "../../assets/social/line.png";
import insta from "../../assets/social/insta.png";
import phone from "../../assets/social/phone.png";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { HiClock } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import bg from "../../assets/HOMEPAGE/sevice-bg.png"

const ContactUs = () => {
  return (
    <div style={{padding:"8rem 0 3rem"}}>
    <img
          src={bg}
          style={{
            objectFit: "contain",
            width:"100%",
            position: "absolute",
            left: 0,
            top: 0,
            marginTop:"-12rem",
            zIndex:0
          }}
        />
      <h1 style={{ textAlign: "center" }}>CONTACT US</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "hidden",
        }}
        className="contact"
      >
        
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "1200px",
              width: "100%",
            }}
          >
            <div style={{display:"flex",
            alignItems:"center",flexDirection:"column",textAlign:"center"}}>
              <div
                className="center"
                style={{
                  width: "7rem",
                  height: "7rem",
                  borderRadius: "100%",
                  background: "#0a3c57",
                  color: "#fff",
                }}
              >
                <FaPhoneAlt size={65} />
              </div>
              +66 9 4263 9964
            </div>
            <div style={{display:"flex",
            alignItems:"center",flexDirection:"column",textAlign:"center"}}>
              <div
                className="center"
                style={{
                  width: "7rem",
                  height: "7rem",
                  borderRadius: "100%",
                  background: "#0a3c57",
                  color: "#fff",
                }}
              >
                <TfiEmail size={65} />
              </div>
              info@drcbdgroup.com
            </div>
            <div style={{display:"flex",
            alignItems:"center",flexDirection:"column",textAlign:"center"}}>
              <div
                className="center"
                style={{
                  width: "7rem",
                  height: "7rem",
                  borderRadius: "100%",
                  background: "#0a3c57",
                  color: "#fff",
                }}
              >
                <HiClock size={65} />
              </div>
              Monday - Friday
            </div>
            <div style={{display:"flex",
            alignItems:"center",flexDirection:"column",textAlign:"center"}}>
              <div
                className="center"
                style={{
                  width: "7rem",
                  height: "7rem",
                  borderRadius: "100%",
                  background: "#0a3c57",
                  color: "#fff",
                }}
              >
                <FaLocationDot size={65} />
              </div>
              4th Floor, The Marche<br/>
              Thong Lo Road<br/>
              Khlong Tan Nuea<br/>
              Wattana, Bangkok 10110
            </div>
            <div>
              <img
                src={qr}
                style={{ maxWidth: "8rem", marginRight: "1rem" }}
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
                  <img src={fb} style={{ width: "1.2rem" }} alt="faceBook" />{" "}
                  Vital Medi Clinic
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <img src={line} style={{ width: "1.2rem" }} alt="line" />{" "}
                  @vitalmediclinic
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <img src={insta} style={{ width: "1.2rem" }} alt="line" />{" "}
                  Vital Medi Clinic
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <img src={phone} style={{ width: "1.2rem" }} alt="line" /> +66
                  9 4263 9964
                </p>
              </div>
            </div>
        </div>
        <div style={{ maxWidth: 1200, width: "100%", padding: "50px 1rem 0" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              margin: "2rem 0",
            }}
          >
            <h1>LOCATION</h1>
            <div
              style={{ width: "100%", height: "5px", background: "#0a3c57" }}
            />
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d60810.78467790872!2d100.58209302270677!3d13.668730540013332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s255%20Bangna-Trad%203%2C%20Bangna-Trad%20Rd.%2CBangnaNeua%2C%20Bangna%2C%20Bangkok%2010260!5e0!3m2!1sen!2sin!4v1684082886671!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
