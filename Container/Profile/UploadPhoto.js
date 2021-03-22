
import styles from './styleProfile.module.css'
import classNames from 'classnames'
import BackupIcon from '@material-ui/icons/Backup';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import { IconButton } from '@material-ui/core';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { baseURL } from '../../Redux/config';

function UploadPhoto() {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const {currentUser} = useSelector(state => state.auth)
    const fileInputRef = useRef();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (image) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(image);
        } else {
          setPreview(null);
        }
      }, [image]);

      const handleClick = () =>{
        const fd = new FormData();

        const config = {
          headers: {
            'Content-Type': "multipart/form-data",
             "Accept" : "*/*",
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
        fd.append('file', image, image.name);
        axios.post(`${baseURL}Profiles/upload-avatar`, fd, config)
          .then(res =>{
            console.log(res)
            enqueueSnackbar('Success, Photo has been Uploaded',{variant : 'success'} );
          })
          .catch(error =>{
            console.log(error)
            enqueueSnackbar('Oops, Sorry try again :)',{variant : 'error'} );
          })
      }

    return(
        <div className={styles.container}>
      <form>
        {preview ? (
          <img
            src={preview}
            className={styles.img}
            style={{ objectFit: "cover" }}
            onClick={() => {
              setImage(null);
            }}
          />
        ) : (
          <button
             className={classNames(styles.btn, 'flex_col')}
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
             <BackupIcon  fontSize='large'/>
             Add  Image
          </button>
        )}
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file ) {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
      </form>
      {
      <button className={styles.uploadBtn}>
         <IconButton onClick={()=>handleClick()}>
             <CheckCircleIcon fontSize='large' style={{color: 'white'}} />
         </IconButton>
      </button>}
    </div>

    )
}

export default UploadPhoto