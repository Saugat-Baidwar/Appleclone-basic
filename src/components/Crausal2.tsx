import React from "react";
import { Carousel } from "antd";
import image from "../../public/Tabbanner.png";

const contentStyle: React.CSSProperties = {
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  display: "flex",
  justifyContent: "center",
};

const contentImgStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        {" "}
        <img style={contentImgStyle} src="/Tabbanner.png" alt="" />{" "}
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {" "}
        <img style={contentImgStyle} src="/banner4.png" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        {" "}
        <img style={contentImgStyle} src="/banner3.png" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default App;
