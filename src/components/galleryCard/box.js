import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import icon from "../../static/zoom.png";
import "./box.css";
import Modal from "./modal/modal";
import './popup/popup.css'
export default function Box(props) {
  
  let [photoClicked, setPhoto] = useState();
  let [counterClicked, setCounter] = useState();

  const resetCounter = (photoState, index) => {
    setPhoto(photoState);
    setCounter(index);
    console.log("hello from clickedd")
  }
  return (
    <>

      <div className="container">
        <div className="row">

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

                  <a href="#popup1" className="hidden_img" onClick={() => resetCounter(photo, index)}>
                    <img
                      src={icon}
                      alt="zoom icon"
                      data-modal="true"
                      height={50}
                      width={50}
                    />
                  </a>
                </div>
               
              </div>
            );
          })}
           <div id="popup1" className="overlay">
                  <div className="popup">
                    <a className="close" href="/GalleryApp">&times;</a>
                    <div className="container">
                      <Modal photos={props.photos} init_counter={counterClicked} init_photo={photoClicked} />
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </>
  );
}
