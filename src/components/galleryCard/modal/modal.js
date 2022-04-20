import React from "react";
import { useState, useEffect } from "react";
import "./modal.css";

export default function Modal(props) {
    // let photos = props.photos;
    const [photos, setPhotos] = useState();
    let [photo, setPhoto] = useState();
    let [counter, setCounter] = useState();
  
    useEffect(() => {
        setPhoto(props.init_photo);
        setCounter(props.init_counter);
        setPhotos(props.photos);
    });
    useEffect(() => {
        setPhoto(photo);
        setCounter(counter);
    },[photo,counter]);

    let getNextImage = () => {
        counter === photos.length - 1 ? (counter = 0) : counter++;

        setCounter(counter);
        setPhoto(photos[counter]);

    };
    let getPreviousImage = () => {
        counter === 0 ? (counter = 0) : counter--;

        setCounter(counter);
        setPhoto(photos[counter]);
    };

    return (
        photo !== undefined ? (
                <div className="row">
                    <h2 className="paragraph ">{photo.name}</h2>

                    <div className="carousel" data-carousel>
                        <button
                            className="carousel-button prev"
                            data-carousel-button="prev"
                            onClick={() => getPreviousImage()}
                        >
                            &#8656;
                        </button>
                        <button
                            className="carousel-button next"
                            data-carousel-button="next"
                            onClick={() => getNextImage()}
                        >
                            &#8658;
                        </button>
                        <ul data-slides>
                            <li className="slide" data-active>

                                <img src={photo.url} alt={photo.name} />


                            </li>

                        </ul>

                    </div>
                    <div className="container">
                    <div className="paragraph ">{`${counter+1}/${photos.length}`}</div>
                    </div>
                </div>
          
        ) : null
    );
}
