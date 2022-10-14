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
            Plan yout next vacation on the most amazing <br /> places in
            Kyrgyzstan
          </p>
          <img className={home.img1} src={image} alt="" />
          <div className={home.content}>
            <div className={home.box}>
              Wonderful Issyk Kul Lake <br /> Watch the video
            </div>
            <img className={home.img2} src={image1} alt="" />
            <p className={home.underimg}>
              The largest lake in Kyrgyzstan, one of the 25 largest lakes in the
              world in terms <br /> of area and in sixth place in the list of
              deepest lakes ...{" "}
              <button
                className={home.btn}
                onClick={() =>
                  window.open("https://en.wikipedia.org/wiki/Issyk-Kul")
                }
              >
                Learn More
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
