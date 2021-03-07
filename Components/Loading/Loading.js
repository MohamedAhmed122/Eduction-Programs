import { Backdrop } from '@material-ui/core'
import Lottie from 'react-lottie';

import loading from './loading.json'


export default function Loading({...props}) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loading,
      };
    return (
        <Backdrop style={{zIndex: 100, color: '#fff', backgroundColor: '#eaf7ff', }}{...props} open={true}>
            <Lottie options={defaultOptions}
              height={300}
              width={300}
              />
        </Backdrop>
    )
}
