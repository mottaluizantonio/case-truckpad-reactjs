import { Carousel } from "antd";
import React, { useContext } from "react";
import { DriversContext } from "../../providers/drivers";
// import "./style.css";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const DriversCarousel = () => {
  const { drivers } = useContext(DriversContext);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      {drivers.map((driver) => (
        <div>
          <h3 style={contentStyle}>{driver}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default DriversCarousel;
