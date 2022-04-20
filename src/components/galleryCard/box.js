import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../../static/zoom.png";
import "./box.css";
import Modal from "./modal/modal";
import './popup/popup.css'
export default function Box(props) {
  // declare states
  let [photoClicked, setPhoto] = useState();
  let [counterClicked, setCounter] = useState();
  let [modelVisible, setModalVisible] = useState(false);

  // function to initialize states on click
  const setPhotoStates = (photoState, index) => {
    setModalVisible(true);
    setPhoto(photoState);
    setCounter(index);
    // console.log("hello from clickedd")
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {/* loop over props array to list all photos on gallery page */}
          {props.photos.map((photo, index) => {
            return (
              <div
                key={photo.uuid}
                className="container mt-4 col-lg-4 col-xs-4 col-sm-6"
              >
                <div className="row container-one">
                  <img
                    src={photo.url}
                    alt={photo.name}
                    height={250}
                    width={250}
                  />

                  {/* button to set photo states on click */}
                  <button className="hidden_img" onClick={() => setPhotoStates(photo, index)}>
                    <img
                      src={icon}
                      alt="zoom icon"
                      data-modal="true"
                      height={50}
                      width={50}
                    />
                  </button>
                </div>

              </div>
            );
          })}
          {/* if modal visible then show popup slider */}
          {modelVisible &&
            <div className="overlay">
              <div className="popup">
                <a className="close" href="/GalleryApp">&times;</a>
                <div className="container">
                  {/* pass props to modal component to fill the slider */}
                  <Modal photos={props.photos} init_counter={counterClicked} init_photo={photoClicked} />
                </div>
              </div>
            </div>}
        </div>
      </div>
    </>
  );
}
