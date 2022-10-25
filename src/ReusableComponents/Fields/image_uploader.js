import React, { useState } from "react";
import { Box, IconButton } from '@mui/material';
import sx from "mui-sx";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import containerStyles from '../../CSS/container.module.css';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styles from '../../CSS/icon.module.css'

export default function UploadImage({ setImage }){

  const [hasImage, setHasImage] = useState(false)
  const sxStyles = {
    width: '200px',
    height: '32px',
    backgroundColor: '#2a1463',
    border: 'none',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '15px',
    margin: 'auto',
    marginTop: '3%',
    cursor: 'pointer',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    borderRadius: '15px',
    '&:hover': {
        backgroundColor: '#694cb5',
        color: 'white',
    },
  }

  const className = hasImage ? styles.checkIcon : styles.checkIconHidden

  return (
    <Box className={ `${containerStyles.displayRow} ${containerStyles.imageUploader}` } >
      <label htmlFor="upload-photo">
        <input
          style={{ display: 'none' }}
          id="upload-photo"
          name="upload-photo"
          type="file"
          onChange={e => {setImage(e.target.value); setHasImage(true)}}
        />
        <IconButton sx={sx(sxStyles)} component="span" >
          <ImageSearchIcon />
            Imagen de Perfil
        </IconButton>
      </label>
      <CheckCircleOutlineIcon className={className}/>
    </Box>
  )
}