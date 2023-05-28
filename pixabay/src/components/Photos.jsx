import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store";
import { useEffect, useState } from "react";
import {Button} from "@mui/material"

export default function Photos() {
const [category,setCategory]=useState('art')
const [page,setPage] = useState(0)
  //use dispatch hook and dispatch the fetch action to redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos(category));
  }, [dispatch]);
//get the values from the redux store
  const photos = useSelector((state) => state.photos.photos);
  console.log(photos);
  const error = useSelector((state) => state.photos.error);
console.log(page)
  return (
    <div>
      <div className="prev-next">
      <Button onClick={()=>setPage(page+1)}>{'<< prev'}</Button><Button onClick={()=>{page>1&&setPage(page-1)}}>{'next >>'}</Button>
      </div>
    <div className="grid-container">
      {!error &&
        photos.slice(page*9, page*9+9).map((element) => (
          <div className="grid-item">
            <img className="image" src={element.previewURL} alt="" />
          </div>
        ))}
    </div>
    </div>
  );
}
