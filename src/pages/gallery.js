import React, { useEffect } from "react";
import { getPhotosAction } from "../store/galleryAction";
import { useSelector, useDispatch } from "react-redux";
import Box from "../components/galleryCard/box";

export default function Gallery() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photosList);
  useEffect(() => {
    dispatch(getPhotosAction());
  }, []);

  console.log("taaaaags in : ", photos);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="p_paragraph col-lg-12 col-xs-12 col-sm-12">Gallery</div>
      </div>
      <div className="row">
        <Box photos={photos} />
      </div>
    </div>
  );
}
