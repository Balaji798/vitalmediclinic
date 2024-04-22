import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import one from "../../assets/HOMEPAGE/A5ci-01.jpg";
import two from "../../assets/HOMEPAGE/A5ci-02.jpg";
import three from "../../assets/HOMEPAGE/A5ci-03.jpg";
import four from "../../assets/HOMEPAGE/A5ci-04.jpg";
import five from "../../assets/HOMEPAGE/A5ci-05.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./imageSlider.css";

const ImageSlider = () => {
  const data = [one, two, three, four, five];

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
    <div className="center slider" style={{  paddingTop:"10rem"}}>
      <Slider {...settings} className="slider-container">
        {data.map((image, i) => (
          <div className="slider-item" key={i} style={{ maxWidth: "10rem" }}>
            <img src={image} alt="/"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;