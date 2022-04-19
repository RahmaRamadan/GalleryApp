import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../../static/zoom.png";
import "./box.css";

export default function Box(props) {
  console.log("iconn: ", icon);
  return (
    <div className="container">
      <div className="row">
        {props.photos.map((photo, index) => {
          return (
            <div
              key={photo.uuid}
              className="container mt-4 col-lg-3 col-xs-4 col-sm-6"
            >
              <div className="row container-one">
                <img
                  src={photo.url}
                  alt={photo.name}
                  height={250}
                  width={250}
                />

                <a href="#" className="hidden_img">
                  <img src={icon} alt="zoom icon" height={50} width={50} />
                </a>
              </div>
              {/* <div className="card-body">{photo.name}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
