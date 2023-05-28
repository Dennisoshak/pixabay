import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store";
import { useEffect } from "react";

export default function Photos() {

  //use dispatch hook and dispatch the fetch action to redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector((state) => state.photos.photos);
  console.log(photos);
  const error = useSelector((state) => state.photos.error);

  return (
    <div className="grid-container">
      {!error &&
        photos.slice(0, 9).map((element) => (
          <div className="grid-item">
            <img className="image" src={element.previewURL} alt="" />
          </div>
        ))}
    </div>
  );
}
