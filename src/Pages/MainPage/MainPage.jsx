import React from "react";
import "./styles.css";
import Header from "../../Components/Header/Header";
import ImageCollection from "../../Components/ImageCollection/ImageColletcion";
import laptop from "../../assets/laptop.png";
import Footer from "../../Components/Footer/Footer";

export const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="container">
        <Header />
        <div className="page-title">
          <div className="text">
            <div className="text-title">Lorem ipsum dolor sit amet</div>
            <div className="text-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div>
              <button className="toPictures_btn">
                <a href="#image-container">To pictures</a>
              </button>
            </div>
          </div>
          <div className="image">
            <img className="image-laptop" src={laptop} alt="laptop" />
          </div>
        </div>
        <div>
          <ImageCollection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
