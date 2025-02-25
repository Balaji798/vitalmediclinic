import search from "../../assets/service/search.png";
import hand from "../../assets/service/hand.png";
import pot from "../../assets/service/pot.png";
import cannabis from "../../assets/service/cannabis.png";
import heart from "../../assets/service/heart.png";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import DoctorSlider from "../../components/doctorSlider/DoctorSlider";
import promotion from "../../assets/promotion1.jpg";
import windowImage from "../../assets/windowImage.jpg";
import vitalLogo from "../../assets/vital-logo.png";
import group from "../../assets/group.jpg";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const data = [
  {
    title: "Health Checkup",
    image: search,
  },
  {
    title: "Health Checkup",
    image: heart,
  },
  {
    title: "Health Checkup",
    image: hand,
  },
  {
    title: "Health Checkup",
    image: pot,
  },
  {
    title: "Health Checkup",
    image: cannabis,
  },
];

const Home = () => {
  return (
    <div className="" style={{ width: "100%" }}>
      <Helmet>
        <title>
          Trusted International Medical Clinic by Vital Medi Clinic Bangkok,
          Thailand
        </title>

        <meta
          name="keywords"
          content="Medical Clinic, med clinic, medi center, medical centers, medicare clinic, central medical clinic, med consult clinic, international medical clinic, health care center, health care clinic, family healthcare clinic, chinese medicine clinic"
        />

        <meta
          name="description"
          content="A top international medical clinic specializes in family healthcare and Chinese medicine across top medical healthcare clinic centre in Thailand, Bangkok by Vital Medi Clinic."
        />
      </Helmet>
      <div className="banner">
        <div style={{ maxWidth: "1100px", width: "100%",display:"flex",flexDirection:"column",alignItems:"flex-start" }}>
           <img loading="lazy"
            src={vitalLogo}
            style={{ objectFit: "contain", maxWidth: "29rem", width: "100%" }}
            alt="logo"
          />
          <h2 style={{ paddingBottom: "10px" }}>
            #1 Integrative Medical Approach
          </h2>
          <h2 style={{ fontWeight: "bold",fontSize:30 }}>
            THE MEDICAL CROSSROAD
          </h2>
          <h2 style={{ fontWeight: "bold", paddingBottom: "20px",fontSize:30 }}>BETWEEN EAST & WEST</h2>
          <Link to="/about-us"><button>READ MORE</button></Link>
        </div>
      </div>
      <div
        className="banner_home"
        style={{ maxHeight: "30rem", alignItems: "flex-end" }}
      >
      <div className="bluer"/>
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            textAlign: "left",
            padding:"0 10px",
            zIndex:1
          }}
          className="content-para"
        >
          <h2
            style={{
              borderBottom: "2px solid",
              maxWidth: "200px",
            }}
          >
            Vital Medi Clinic
          </h2>
          <p style={{ maxWidth: "400px" }}>
            <span style={{ fontWeight: 600 }}>Vital Medi Clinic</span> is a
            leading integrative medicine clinic dedicated to optimizing your
            health and well-being, with a primary focus on longevity. We combine
            the best of Eastern and Western practices, seamlessly integrating
            ancient wisdom with modern science to offer comprehensive and
            innovative therapies designed to extend your vitality and enhance
            your quality of life for years to come.
          </p>
        </div>
      </div>
      <div className="banner_second">
        <div className="content">
          <h2>ABOUT US</h2>
          <p style={{padding:"0px"}}>
            Vital Medi Clinic : Pioneering integrative medicine in Bangkok, we focus on enhancing your healthcare and <br/> promoting longevity through a blend of Eastern and Western therapies,<br/>
            including Thai Traditional Medicine and Cannabis treatment.<br/>Our personalized approach optimizing your physical, mental, and emotional well-being for a vibrant, fulfilling life.
          </p>
        </div>
        <div className="our-service">
          <h2>OUR SERVICE</h2>
          <div>
            {data.map((item, index) => (
              <div key={index}>
                 <img loading="lazy"
                  src={item.image}
                  style={{ maxWidth: "10rem", objectFit: "cover" }}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="PROMOTION"
        style={{
          backgroundImage: `url(${promotion})`,
        }}
      >
        <h2
          style={{
            letterSpacing: "10px",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          PROMOTION
        </h2>
      </div>

      <ImageSlider />
      <div className="specialist">
        <h2>CONSULT SPECIALIST</h2>
        <button>CONTACT US</button>
      </div>
      <div
        className="center"
        style={{
          backgroundImage: `url(${windowImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          objectFit: "cover",
          padding: "5rem 0",
        }}
      >
        {" "}
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            paddingLeft: "2rem",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              borderBottom: "2px solid",
              maxWidth: "300px",
            }}
          >
            AREA OF EXPERTS
          </h2>
          <p style={{ maxWidth: "400px" }}>
            <span style={{ fontWeight: 600 }}>
              Our tema of experienced healthcare professionals includes
              physicians specializing in preventive care, anti-aging, and
              regenerative medicine, along with holistic practitioners and
              specialists in various fields.
            </span>{" "}
            We work collaboratively to develop personalized treatment plans that
            address your unique needs and goals, with a focus on promoting
            long-term health and vitality.
          </p>
        </div>
      </div>
      <DoctorSlider />
      <div
        className="center"
        style={{
          backgroundImage: `url(${group})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          objectFit: "cover",
          padding: "5rem 0",
        }}
      >
        {" "}
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            textAlign: "left",
            padding: "0 10px",
          }}
        >
          <h2
            style={{
              borderBottom: "2px solid",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            INTEGRATIVE MEDICINE CLINIC
          </h2>
          <p style={{ maxWidth: "420px" }}>
            <span style={{ fontWeight: 600 }}>
              In addition to our comprehensive health check-ups and personalized
              wellness programs, we offer a range of cutting-edge therapies,
              such as stem cell therapy and IV nutrition, that can help unlock
              your {"body's"} full potential and slow down the aging process.
            </span>
            Whether {"you're"} seeking to manage a chronic condition, prevent
            future health issues, or simply fell your best at every age, Vital
            Medi Clinic is committed to empowering you on your journey to a
            longer, healthier life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
