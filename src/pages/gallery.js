import React, { useEffect } from "react";
import { getPhotosAction } from "../store/galleryAction";
import { useSelector, useDispatch } from "react-redux";
import Box from "../components/galleryCard/box";

export default function Gallery() {

  const dispatch = useDispatch();
  // get photos array from store
  const photos = useSelector((state) => state.photosList);

  // fetch data from api request first thing in the page 
  // and put it in redux store
  useEffect(() => {
    dispatch(getPhotosAction());
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="p_paragraph col-lg-12 col-xs-12 col-sm-12">Gallery</div>
      </div>
      <div className="row">
        {/* pass photos props to box component to loop over it and implement the galary */}
        <Box photos={photos} />
      </div>
    </div>
  );
}
