import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DetailsModal({open,handleClose,photo}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Image details:
          </Typography>
         
           {photo && <Grid >
             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Downloads: {photo.downloads}
             </Typography>
        
             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Likes: {photo.likes}
             </Typography>
             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Comments: {photo.comments}
             </Typography>
             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Tags: {photo.tags}
             </Typography>
             </Grid>
}
         
        </Box>
      </Modal>
    </div>
  );
}