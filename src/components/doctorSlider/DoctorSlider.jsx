/* eslint-disable react/prop-types */
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { doctorData } from "../../assets/doctorData";
import "./doctorSlider.css";
import { Link } from "react-router-dom";

const DoctorSlider = () => {
  const PreviousBtn = ({ onClick }) => {
    return (
      <div className="prev" onClick={onClick}>
        <MdArrowBackIosNew style={{ fontSize: "75px", color: "#28504d" }} />
      </div>
    );
  };

  const NextBtn = ({ onClick }) => {
    return (
      <div className="next" onClick={onClick}>
        <MdArrowForwardIos style={{ fontSize: "75px", color: "#28504d" }} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div
      className="center"
      style={{
        flexDirection: "column",
        textAlign: "center",
        background: "#e6e6e6",
        padding:"2rem 0"
      }}
    >
      <h2>Medical professionals</h2>
      <h3 style={{color:"black"}}>Meet Our Expert Team</h3>
      <p style={{ paddingBottom: "2rem",color:"black" }}>
        Our expert team consist of certified practitioners, doctors, nurses with
        skill and knowledge, we provide an accurate
        <br /> results and best solutions to our customers
      </p>
      <div className="center">
        <Slider {...settings} className="slider-container">
          {doctorData.map((item, i) => (
            <Link to={`/doctor/${item.name
              .split(" ")
              .join("-")
              .toLocaleLowerCase()}`}
              className="doctor-slider-item"
              key={i}
              style={{backgroundColor: "#fff" }}
            >
               <img loading="lazy"
                src={item.image}
                alt="/"
                style={{ width: "100%", height: "20rem",marginBottom:"0.5rem" }}
                 
              />
              <h4 style={{color:"black"}}>{item.name}</h4>
              <p style={{fontSize:"12px",color:"black"}}>{item.expert}</p>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DoctorSlider;
