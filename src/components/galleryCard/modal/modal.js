import React from "react";
import { useState, useEffect } from "react";
import "./modal.css";

export default function Modal(props) {
    // declare states
    const [photos, setPhotos] = useState();
    let [photo, setPhoto] = useState();
    let [counter, setCounter] = useState();
  
    // initialize state 
    useEffect(() => {
        setPhoto(props.init_photo);
        setCounter(props.init_counter);
        setPhotos(props.photos);
    });

    // change states values after any change of one of them
    useEffect(() => {
        setPhoto(photo);
        setCounter(counter);
    },[photo,counter]);

    // function to get next image on click next button
    let getNextImage = () => {
        // if counter equal to length that means we at the end of array
        // then set it to 0 again 
        // else plus one on counter and get next image
        counter === photos.length - 1 ? (counter = 0) : counter++;

        // set new values of counter and photo
        setCounter(counter);
        setPhoto(photos[counter]);

    };

    // function to get previous image on click previous button
    let getPreviousImage = () => {
        // if counter equal to 0 that means we at the beginning of array
        // then let it also 0 to begin at 0 
        // else minus one on counter and get previous image
        counter === 0 ? (counter = 0) : counter--;

         // set new values of counter and photo
        setCounter(counter);
        setPhoto(photos[counter]);
    };

    return (
        // if photo has a value and not undefined show jsx
        // else null "show nothing"
        photo !== undefined ? (
                <div className="row">
                    <h2 className="paragraph ">{photo.name}</h2>

                    <div className="carousel" data-carousel>
                        {/* button to get previous image */}
                        <button
                            className="carousel-button prev"
                            data-carousel-button="prev"
                            onClick={() => getPreviousImage()}
                        >
                            &#8656;
                        </button>

                        {/* button to get next image */}
                        <button
                            className="carousel-button next"
                            data-carousel-button="next"
                            onClick={() => getNextImage()}
                        >
                            &#8658;
                        </button>

                        {/* add css attribute to style the slider */}
                        <ul data-slides>

                            {/* pass state data to jsx image */}
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
