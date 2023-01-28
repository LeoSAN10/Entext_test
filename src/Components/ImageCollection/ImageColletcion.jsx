import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes/routes";
import { useEffectOnce } from "react-use";

export const ImageCollection = () => {
  const [Collection, setCollection] = useState([]);

  useEffectOnce(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=12")
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
      });
  });

  return (
    <div className="collection">
      <div className="image-title">All Images</div>
      <div id="image-container">
        {Collection.map((img) => (
          <div key={img.id}>
            <Link to={`${ROUTES.IMAGE_PAGE}/${img.id}`}>
              <img src={img.download_url} alt={img.author} className="img" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCollection;
