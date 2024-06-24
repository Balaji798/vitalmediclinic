import dotes from "../../assets/SERVICES/servic-pic-18.png";
import bgImage from "../../assets/SERVICES/bgImage.png";
import doctorConsultation from "../../assets/wellness/molecule-water.jpg";
import therapy from "../../assets/wellness/sevice-pic-43.jpg";

const NKTherapy = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem 0",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "15rem",
            height: "10px",
            background: "#0a3c57",
            marginTop: "3.4rem",
          }}
        />
        <img
          src={dotes}
          style={{
            width: "10rem",
            position: "absolute",
            left: 0,
            marginLeft: "-3rem",
            marginTop: "20rem",
          }}
        />
        <div style={{ maxWidth: "660px", width: "100%" }}>
          <h2 style={{ color: "#d9e1e4", fontWeight: "bold" }}>
            WELLNESS PROGRAM
          </h2>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem" }}>
            NK CELL THERAPY
          </h2>
          <p style={{ padding: "1rem 0" }}>
            <span>NK Cell Therapy:</span> Empowering Your Immune Surveillance
            Against Disease.
          </p>
          <p style={{ padding: "1rem 0" }}>
            Natural Killer (NK) cells are a powerful type of white blood cell
            that form a critical part of your {"body's"} innate immune system.
            They act as a first-line defense, rapidly identifying and
            eliminating potentially harmful cells, including cancer cells and
            virus-infected cells. NK Cell Therapy aims to boost the quantity and
            effectiveness of your NK cells to enhance your {"body's"} ability to
            fight disease.
          </p>
          <span>How NK Cell Therapy Works:</span>
          <p style={{ paddingTop: "1rem" }}>
            <span>• NK Cell Enhancement:</span> NK cell Therapy involves
            collecting a {"patient's"} NK cells, enhancing their numbers and
            activity in a laboratory setting, and then reinfusing them back into
            the patient.
          </p>
          <p>
            <span>• Targeted Attack:</span> These supercharged NK cells are
            better equipped to seek out and destroy cancerous or infected cells,
            bolstering your natural immune defenses.
          </p>
          <span>Potential Benefits of NK Cell Therapy:</span>
          <p>
            <span>• Cancer Treatment:</span> Can be used as a standalone
            treatment or alongside traditional cancer therapies for various
            malignancies, including leukemia, lymphoma, and solid tumors.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            {" "}
            <span>• Enhanced Immunity:</span> May strengthen overall immune
            function, potentially reducing the risk of infections.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Reduced Inflammation:</span>May decrease inflammation
            associated with chronic diseases.
          </p>
          <p style={{ paddingBottom: "0.5rem" }}>
            <span>• Improved Outcomes:</span>Research suggests potential for
            increased survival rates and improved healing and recovery for
            patients with certain cancer types.
          </p>
        </div>
        <div style={{ maxWidth: "500px", width: "100%" }}>
          <div
            className="backgroundImage"
            style={{
              backgroundImage: `url(${bgImage})`,
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              justifyContent: "center",
              height: "28rem",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              paddingTop: "2rem",
            }}
          >
            <img
              src={doctorConsultation}
              style={{
                maxWidth: "312px",
                marginLeft: "-7.01rem",
                objectFit: "cover",
                height: "22rem",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${therapy})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxWidth: "1600px",
          objectFit: "cover",
          padding: "4rem 0rem 4rem 50rem",
        }}
      >
        <span
          style={{ paddingBottom: "0.5rem", maxWidth: "400px", fontSize: "18px" }}
        >
          Important Considerations:
        </span>
        <p
          style={{ paddingBottom: "0.5rem", maxWidth: "500px", fontSize: "14px" }}
        >
          <span>• Personalized Approach:</span>NK Cell Therapy protocols are
          tailored to the individual {"patient's"} needs and health conditions.
        </p>
        <p
          style={{ paddingBottom: "0.5rem", maxWidth: "500px", fontSize: "14px" }}
        >
          <span>• Evolving Therapy:</span>This is a rapidly developing field of
          medicine with continuous research into its potential benefits and
          applications.
        </p>
        <p style={{ fontWeight: "bold", maxWidth: "500px", fontSize: "14px" }}>
          Consult with a specialist to determine if NK Cell Therapy may be a
          suitable option to support your health goals and treatment plan
        </p>
      </div>
    </div>
  );
};

export default NKTherapy;
