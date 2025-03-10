import search from "../../assets/service/search.png";
import hand from "../../assets/service/hand.png";
import cannabis from "../../assets/service/cannabis.png";
import heart from "../../assets/service/heart.png";
import DoctorSlider from "../../components/doctorSlider/DoctorSlider";
import vitalLogo from "../../assets/vital-logo.png";
import woman from "../../assets/HOMEPAGE/woman.webp";
import attm from "../../assets/HOMEPAGE/ATTM.webp";
import min_60 from "../../assets/HOMEPAGE/60min.webp";
import min_90 from "../../assets/HOMEPAGE/90min.webp";
import min_120 from "../../assets/HOMEPAGE/120min.webp";
import relax from "../../assets/HOMEPAGE/relax.webp";
import group from "../../assets/HOMEPAGE/group.webp";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const data = [
  {
    title: "Health Checkup",
    image: search,
  },
  {
    title: "Wellness Program",
    image: heart,
  },
  {
    title: "Medical Conditions",
    image: hand,
  },
  {
    title: "Cannabis & Thai Herbal Medicine",
    image: cannabis,
  },
];
const data2 = [min_60, min_90, min_120];

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
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            maxHeight: "500px",
            height: "100%",
          }}
        >
          <img
            loading="lazy"
            src={vitalLogo}
            style={{ objectFit: "contain", maxWidth: "29rem", width: "100%" }}
            alt="logo"
          />
          <h2 style={{ paddingBottom: "10px" }}>
            #1 Integrative Medical Approach
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: 40 }}>
            THE MEDICAL CROSSROAD
          </h2>
          <h2
            style={{ fontWeight: "bold", paddingBottom: "20px", fontSize: 40 }}
          >
            BETWEEN EAST & WEST
          </h2>
          <Link to="/about-us">
            <button>READ MORE</button>
          </Link>
        </div>
      </div>
      <div className="center" style={{ flexWrap: "wrap" }}>
        <img className="woman" src={woman} />
        <div className="discover">
          <div
            style={{
              border: "4px solid",
              borderRadius: "20px",
              padding: "2rem",
            }}
          >
            <div className="line-1" />
            <h3
              style={{
                textAlign: "left",
                maxWidth: "400px",
                width: "100%",
              }}
            >
              Vital Medi Clinic
            </h3>
            <p style={{ maxWidth: "400px" }}>
              <span style={{ fontWeight: 600 }}>Vital Medi Clinic</span> is a
              leading integrative medicine clinic dedicated to optimizing your
              health and well-being, with a primary focus on longevity. We
              combine the best of Eastern and Western practices, seamlessly
              integrating ancient wisdom with modern science to offer
              comprehensive and innovative therapies designed to extend your
              vitality and enhance your quality of life for years to come.
            </p>
            <div className="line-2" />
          </div>
        </div>
      </div>
      <div className="banner_second">
        <div className="content">
          <h2>ABOUT US</h2>
          <p style={{ padding: "0px" }}>
            Our team of experienced healthcare professionals includes physicians
            specializing in preventive care, anti-aging, and regenerative
            medicine, along with holistic practitioners and specialists in
            various fields, <br /> including expert{" "}
            <span>Thai Traditional Medicine practitioners.</span>
            <br />
            We work collaboratively to develop personalized treatment plans that
            address your unique needs and <br /> goals, with a focus on
            promoting long-term health, vitality, and the art of traditional
            Thai healing.
          </p>
          <button
            style={{
              backgroundColor: "#fff",
              color: "#093B56",
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "20px",
            }}
          >
            DISCOVER MORE
          </button>
        </div>
        <div className="our-service">
          <span style={{fontSize: '30px'}}>OUR SERVICE</span>
          <div style={{ paddingTop: '2rem'}}>
            {data.map((item, index) => (
              <div key={index} style={{textAlign: 'center'}}>
                <img
                  loading="lazy"
                  src={item.image}
                  style={{ maxWidth: "10rem", objectFit: "cover" }}
                />
                {index === 3 ? <p>Cannabis <br/>& Thai Herbal Medicine</p>:<p>{item.title}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="center discover-more"
        style={{
          backgroundColor: "#D2AF8F",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div
          className="PROMOTION"
          style={{
            backgroundImage: `url(${attm})`,
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <h1
            style={{
              letterSpacing: "10px",
              fontWeight: "bold",
              fontSize: "40px",
              color: "#D2AF8F",
            }}
          >
            ATTM TREATMENTS <br />
            AT VITAL MEDI CLINIC
          </h1>
          <p>
            Our skilled and certified ATTM practitioners offer a range of
            traditional therapies
          </p>
          <button
            style={{
              backgroundColor: "rgba(210, 175, 143, 0.3)",
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "20px",
              borderRadius: "20px",
            }}
          >
            DISCOVER MORE
          </button>
        </div>
        <h2 style={{ color: "#fff", padding: "20px 0" }}>
          TRADITIONAL THAI MASSAGE <br />
          PROMOTIONS
        </h2>
        <div className="wrap">
          {data2.map((item) => (
            <img
              src={item}
              style={{ objectFit: "contain", maxWidth: "400px" }}
              key={item}
            />
          ))}
        </div>
        <button
          style={{
            backgroundColor: "#9B8169",
            fontWeight: "bold",
            fontSize: "16px",
            marginTop: "20px",
            borderRadius: "20px",
          }}
        >
          BOOKING NOW
        </button>
      </div>
      <div className="specialist">
        <h2>CONSULT SPECIALIST</h2>
        <button>CONTACT US</button>
      </div>
      <div
        className="center"
        style={{
          backgroundImage: `url(${relax})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          objectFit: "cover",
          padding: "5rem 0",
          color: "#fff",
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
          padding: "5rem 10px",
          flexDirection: "column",
          color: "#fff",
        }}
      >
        <h2
          style={{
            borderBottom: "2px solid",
          }}
        >
          INTEGRATIVE MEDICINE CLINIC
        </h2>
        <p style={{ maxWidth: "700px", textAlign: "center" }}>
          <span style={{ fontWeight: 600 }}>
            In addition to our comprehensive health check-ups and personalized
            wellness programs, we offer a range of cutting-edge therapies, such
            as stem cell therapy and IV nutrition, that can help unlock your{" "}
            {"body's"} full potential and slow down the aging process.
          </span>
          Whether {"you're"} seeking to manage a chronic condition, prevent
          future health issues, or simply fell your best at every age, Vital
          Medi Clinic is committed to empowering you on your journey to a
          longer, healthier life.
        </p>
      </div>
    </div>
  );
};

export default Home;
