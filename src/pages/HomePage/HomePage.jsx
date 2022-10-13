import React from "react";
import home from "./HomePage.module.css";
import image from "../../img/image.svg";
import image1 from "../../img/image1.svg";
const HomePage = () => {
  return (
    <>
      <div className={home.container}>
        <div className={home.texts}>
          <p className={home.welcome}>
            Ready to Explore The Beauty of <br /> Wonderful Kyrgyzstan
          </p>
          <p className={home.extra}>
            Plan yout next vacation on the most amazing places in Kyrgyzstan
          </p>
          <div className={home.content}>
            <img src={image} alt="" />
            <div>
              Wonderful Issyk Kul Lake <br /> Watch the video
            </div>
            <img width={1000} src={image1} alt="" />
            <p>
              The largest lake in Kyrgyzstan, one of the 25 largest lakes in the
              world in terms of area and in sixth place in the list of deepest
              lakes ... Learn More
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
