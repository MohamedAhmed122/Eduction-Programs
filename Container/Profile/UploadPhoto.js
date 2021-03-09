
import styles from './styleProfile.module.css'
import classNames from 'classnames'
import BackupIcon from '@material-ui/icons/Backup';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useEffect, useRef, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {updateAvatar} from '../../Redux/profile/profileAction'

function UploadPhoto() {
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const dispatch = useDispatch()
    const fileInputRef = useRef();

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
          dispatch(updateAvatar(image.name))
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
      <button className={styles.uploadBtn}>
         <IconButton onClick={()=>handleClick()}>
             <CheckCircleIcon fontSize='large' style={{color: 'white'}} />
         </IconButton>
      </button>
    </div>

    )
}

export default UploadPhoto