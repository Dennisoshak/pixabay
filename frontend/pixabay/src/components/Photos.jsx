import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../store";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CategoryModal from "./CategoriesModal";
import DetailsModal from "./DetailsModal";

export default function Photos() {
  const [category, setCategory] = useState("art");
  const [page, setPage] = useState(1);
  const [openCModal, setOpenCModal] = useState(false);
  const [openDModal, setOpenDModal] = useState(false);
  const [photo, setPhoto] = useState(null);

  //Fuctionality for modals handling
  const handleOpenCModal = () => setOpenCModal(true);
  const handleCloseCModal = () => setOpenCModal(false);
  const handleOpenDModal = () => setOpenDModal(true);
  const handleCloseDModal = () => setOpenDModal(false);

  //use dispatch hook and dispatch the fetch action to redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPhotos({ category: category, page: page }));
  }, [dispatch, category, page]);

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
      <Button variant="outlined" color="info" onClick={handleOpenCModal}>
        Choose Category
      </Button>
      <div className="prev-next">
        <Button
          disabled={page < 2}
          onClick={() => {
            previewsPage();
          }}
        >
          {"<< prev"}
        </Button>
        <Button
          disabled={page > 9}
          onClick={() => {
            nextPage();
          }}
        >
          {"next >>"}
        </Button>
      </div>
      <div className="grid-container">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          //map true the photos recieved from the API
          photos.map((element) => (
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
          ))
        )}
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
