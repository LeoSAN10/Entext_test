import React, { useState, useEffect } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export const ImagePage = () => {
  const imageId = useParams();

  const [ImageInfo, setImageInfo] = useState([]);

  useEffect(() => {
    fetch(`https://picsum.photos/id/${imageId.imageId}/info`)
      .then((res) => res.json())
      .then((json) => {
        setImageInfo(json);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [imageId.imageId]);
  console.log(ImageInfo);

  return (
    <div className="imagePage">
      <Header />
      <div className="image-info">
        <div id="image-details-container">
          <div key={ImageInfo.id}>
            <img
              src={ImageInfo.download_url}
              alt={ImageInfo.author}
              className="img-details"
            />
          </div>
        </div>
        <div className="image-info-details">
          <div className="image-info-details-title">Details</div>
          <div className="image-info-details-settings">
            <div className="image-info-details-settings-block">Resolution</div>
            <div className="image-info-details-settings-block">Author</div>
            <div className="image-info-details-settings-block">Id</div>
          </div>
          <div className="image-info-details-props">
            <div className="image-info-details-props-block">
              {ImageInfo.width} x {ImageInfo.height}
            </div>
            <div className="image-info-details-props-block">
              {ImageInfo.author}
            </div>
            <div className="image-info-details-props-block">{ImageInfo.id}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImagePage;
