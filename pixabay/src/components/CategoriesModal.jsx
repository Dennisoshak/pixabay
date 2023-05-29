import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

export default function CategoryModal({open,handleClose,setCategory,setPage}) {
    const categories = ["art", "music", "pets", "tech", "wild"]
//a function for category selection
const handleClick=()=>{
   
    setPage(0)
    handleClose()
}
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Choose a category
          </Typography>
        <Grid>
            {categories.map((element)=>(
                <Button key={element} onClick={()=>{setCategory(element);handleClick()}}>{element}</Button>
            ))}
        </Grid>
        </Box>
      </Modal>
    </div>
  );
}