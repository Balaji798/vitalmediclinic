import { Link } from "react-router-dom";
import dotes from "../../assets/SERVICES/servic-pic-18.png";
import report from "../../assets/report.jpg";
import { data } from "../servicesOffered/data";

const ConditionAddress = () => {
  return (
    <div
      className="center"
      style={{ flexDirection: "column", padding: "2rem 0" }}
    >
      <div className="container center" style={{ flexDirection: "column" }}>
        <img src={report} style={{ width: "100%" }} />
        <h2 style={{ padding: "2rem 0" }}>MEDICAL CONDITIONS ADDRESSED</h2>
        <div
          className="center"
          style={{
            maxWidth: "900px",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {data.map((item, index) => (
            <Link
              to={`/service${item.link}`}
              key={index}
              style={{ padding: "0 1.5rem 1.5rem", textAlign: "center" }}
            >
              <img src={item.image} style={{ width: "7rem" }} />
              <h4>{item.title}</h4>
              <h4>{item?.title2}</h4>
            </Link>
          ))}
        </div>
      </div>
      <img
        src={dotes}
         className="content-position"
        style={{
          width: "10rem",
          left: 0,
          marginTop: "-20rem",
          marginLeft: "-4rem",
        }}
      />
      <img
        src={dotes}
         className="content-position"
        style={{
          width: "10rem",
          right: 0,
          marginBottom: "-30rem",
          marginRight: "-3.8rem",
        }}
      />
    </div>
  );
};

export default ConditionAddress;
