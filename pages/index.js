import HomeUser from "../components/HomeUser"
import ScanBarcode from "../components/ScanBarcode"
import React, {useEffect, useState} from 'react';
import { QR_TYPE, useDispatchQR, useQR } from "../hooks/qr";

const Index = () => {
  const qr = useQR();
  const dispatch = useDispatchQR();
  const [data, setData] = useState('No result');
  const [isSet, setIsSet] = useState();

  useEffect(() => {
    if(qr) setIsSet(true);
  }, [qr]);

  useEffect(()=>{
    if(data && data !== 'No result') {
      dispatch({
        type: QR_TYPE.SET,
        payload: data
      });
      setIsSet(true);
    } ;
  }, [data, dispatch]);
  return isSet ? <HomeUser/> : <ScanBarcode data={data} setData={setData}/>;
}

export default Index