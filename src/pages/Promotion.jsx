//import promotion from "../assets/promotion.jpg";
import dotes from "../assets/SERVICES/servic-pic-18.png";
import one from "../assets/HOMEPAGE/promotion-01.jpg";
import two from "../assets/HOMEPAGE/promotion-02.jpg";
import three from "../assets/HOMEPAGE/promotion-03.jpg";
import four from "../assets/HOMEPAGE/promotion-04.jpg";

const Promotion = () => {
  return (
    <div style={{ paddingBottom: "4rem", textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "2rem 0" }}>
        <div
          style={{
            width: "12rem",
            height: "5px",
            background: "#0a3c57",
            marginRight: "10rem",
          }}
        />
        <h1 style={{ maxWidth: "100px", width: "100%", textAlign: "center" }}>
          PROMOTIONS
        </h1>
      </div>
      <div
        style={{
          width: "6rem",
          height: "20rem",
          border: "2px solid #0a3c57",
          position: "absolute",
          left: 0,
          top: 0,
          marginLeft: "-0.5rem",
          marginTop: "42rem",
        }}
      />
      <div className="center">
        <div className="wrap" style={{ maxWidth: "1000px" }}>
          <img
            src={one}
            style={{ maxWidth: "450px", width: "100%", marginBottom: "2rem" }}
          />
          <img
            src={two}
            style={{ maxWidth: "450px", width: "100%", marginBottom: "2rem" }}
          />
          <img
            src={three}
            style={{ maxWidth: "450px", width: "100%", marginBottom: "2rem" }}
          />
          <img
            src={four}
            style={{ maxWidth: "450px", width: "100%", marginBottom: "2rem" }}
          />
        </div>
      </div>

      <div
        style={{
          width: "6rem",
          height: "15rem",
          background: "#0a3c57",
          position: "absolute",
          right: 0,
          top: 0,
          marginTop: "16rem",
        }}
      />
      <div
        style={{
          width: "4rem",
          height: "13rem",
          border: "2px solid #0a3c57",
          position: "absolute",
          right: 0,
          top: 0,
          marginRight: "-0.5rem",
          marginTop: "20rem",
        }}
      />
      <img
        src={dotes}
         className="content-position"
        style={{
          width: "10rem",
          right: 0,
          marginRight: "-0.5rem",
          marginBottom: "-60rem",
          bottom: 0,
        }}
      />
    </div>
  );
};

export default Promotion;
