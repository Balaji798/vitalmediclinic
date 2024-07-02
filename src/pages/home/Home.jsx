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
console.log(window.innerWidth);
const Home = () => {
  return (
    <div className="" style={{ width: "100%" }}>
      <div className="banner">
        <img
          src={vitalLogo}
          style={{ objectFit: "contain", maxWidth: "26rem", width: "100%" }}
          alt="logo"
        />
        <h2 style={{ paddingBottom: "10px" }}>
          #1 Integrative Medical Approach
        </h2>
        <h1 style={{ fontWeight: "bold", paddingBottom: "20px" }}>
          THE MEDICAL CROSSROAD
          <br />
          BETWEEN EAST & WEST
        </h1>
        <button>READ MORE</button>
      </div>
      <div
        className="banner banner_home"
        style={{ maxHeight: "30rem", alignItems: "flex-end" }}
      >
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            textAlign: "left",
            paddingLeft: "2rem",
          }}
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
          <p style={{fontWeight:"bold"}}>
            Vital Medi Clinic is an Integrative Medical clinic which combines
            Preventive Medical, Applied Thai Traditional Medical (ATTM) and
            Traditional Chinese Medicine (TCM) altogether. We believe every
            patient is unique, health condition, especially at the biological
            level. Therefore, we personalized treatment plans individually to
            reach practical and sustainable optimum health. We also offer
            alternative holistic care for patients who need to improve the
            quality of life.
          </p>
        </div>
        <div className="our-service">
          <h2>OUR SERVICE</h2>
          <div>
            {data.map((item, index) => (
              <div key={index}>
                <img
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
            padding: "0 2rem",
          }}
        >
          <h2
            style={{
              borderBottom: "2px solid",
              width: "100%",
            }}
          >
            INTEGRATIVE MEDICINE CLINIC
          </h2>
          <p>
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
