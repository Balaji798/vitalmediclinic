import { useState } from "react";
import { navData } from "./navData";
import "./secondNave.css";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SecondeNave = ({ openNav, setOpenNav }) => {
  const [menusIndex, setMenusIndex] = useState(-1);
  const [secondIndex, setSecondIndex] = useState(-1);
  console.log(secondIndex);
  return (
    <>
      <div
        className={`${openNav ? "second-nave nav-active" : "second-nave"}`}
        // style={{ transform: openNav ? "translateX(145%)" : "translateX(45%)" }}
      >
        {menusIndex > -1 && (
          <div
            className="back-button"
            style={{ background: "transparent" }}
            onClick={() => {
              if (secondIndex >= 0) {
                setSecondIndex(-1);
              } else {
                setMenusIndex(-1);
              }
            }}
          >
            {" "}
            {"<"}Back
          </div>
        )}
        {secondIndex >= 0 ? (
          <ul>
            {navData[menusIndex]?.options[secondIndex].options.map(
              (item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    onClick={() => {
                      setOpenNav(!openNav);
                      setMenusIndex(-1);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        ) : menusIndex < 0 ? (
          <ul>
            {navData.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <Link
                    to={item.link}
                    onClick={() => {
                      setOpenNav(!openNav);
                      setMenusIndex(-1);
                    }}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <p>{item.title}</p>
                )}
                {item.options.length > 0 && (
                  <MdArrowForwardIos
                    onClick={() => {
                      setMenusIndex(index);
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {navData[menusIndex]?.options.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={() => {
                    setOpenNav(!openNav);
                    setMenusIndex(-1);
                  }}
                >
                  {item.title}
                </Link>
                {item?.options?.length > 0 && (
                  <MdArrowForwardIos
                    onClick={() => {
                      setSecondIndex(index);
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SecondeNave;
