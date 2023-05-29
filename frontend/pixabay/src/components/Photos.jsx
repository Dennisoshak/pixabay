import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CategoryModal from "./CategoriesModal";
import DetailsModal from "./DetailsModal";

export default function Photos() {
  const [category, setCategory] = useState("art");
  const [page, setPage] = useState(0);
  const [openCModal, setOpenCModal] = useState(false);
  const [openDModal, setOpenDModal] = useState(false);
  const [photo, setPhoto] = useState(null);

  //Fuctionality for modals handling
  const handleOpenCModal = () => setOpenCModal(true);
  const handleCloseCModal = () => setOpenCModal(false);
  const handleOpenDModal = () =>  setOpenDModal(true);  
  const handleCloseDModal = () => setOpenDModal(false);

  //use dispatch hook and dispatch the fetch action to redux
  const dispatch = useDispatch();
  console.log(category);
  useEffect(() => {
    dispatch(fetchPhotos(category));
  }, [dispatch, category]);
  //get the values from the redux store
  const { photos } = useSelector((state) => state.photos);
  const error = useSelector((state) => state.photos.error);

  const nextPage = () => {
    setPage(page + 1);
  };
  const previewsPage = () => {
    setPage(page - 1);
  };
  return (
    <div className="images-container">
      <Button variant="outlined" onClick={handleOpenCModal}>
        Choose Category
      </Button>
      <div className="prev-next">
        <Button
          disabled={page < 1}
          onClick={() => {
            previewsPage();
          }}
        >
          {"<< prev"}
        </Button>
        <Button
          disabled={page > 1}
          onClick={() => {
            nextPage();
          }}
        >
          {"next >>"}
        </Button>
      </div>
      <div className="grid-container">
        {!error &&
          photos.slice(page * 9, page * 9 + 9).map((element) => (
            <div
              onClick={() => {
                setPhoto(element);
                handleOpenDModal();
              }}
              className="grid-item"
              key={element.id}
            >
              <img className="image" src={element.largeImageURL} alt="" />
            </div>
          ))}
      </div>
      <CategoryModal
        open={openCModal}
        handleClose={handleCloseCModal}
        setCategory={setCategory}
        setPage={setPage}
      />
      <DetailsModal
        open={openDModal}
        handleClose={handleCloseDModal}
        photo={photo}
      />
    </div>
  );
}
