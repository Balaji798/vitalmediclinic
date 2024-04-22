import search from "../../assets/service/search.png";
import hand from "../../assets/service/hand.png";
import pot from "../../assets/service/pot.png";
import cannabis from "../../assets/service/cannabis.png";
import heart from "../../assets/service/heart.png";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import DoctorSlider from "../../components/doctorSlider/DoctorSlider";
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
      <div className="banner">
        <h2 style={{paddingBottom:"10px",}}>#1 Integrative Medical Approach</h2>
        <h1 style={{ fontWeight: "bold",paddingBottom:"20px" }}>
          THE MEDICAL CROSSROAD
          <br />
          BETWEEN EAST & WEST
        </h1>
        <button>READ MORE</button>
      </div>
      <div className="banner banner_second">
        <div>
          <h2>ABOUT US</h2>
          <p style={{ maxWidth: "1050px", fontWeight: "bold" }}>
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
          <div
            style={{
              display: "flex",
              maxWidth: "1200px",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "3rem",
              flexWrap:"wrap"
            }}
          >
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
          <div
            style={{
              background: "#0a3c57",
              textAlign: "center",
              padding: "2rem 0",
              width: "100%",
              color: "#fff",
              marginTop: "2rem",
            }}
          >
            <h2>PACKAGE</h2>
          </div>
        </div>
      </div>
       <ImageSlider/>
      <div className="specialist">
        <h2>CONSULT SPECIALIST</h2>
        <button>CONTACT US</button>
      </div>
      <DoctorSlider/>
    </div>
  );
};

export default Home;
