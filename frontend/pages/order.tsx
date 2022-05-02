import { Typography } from '@mui/material';
import Storecardsmall from '../components/order/storecard_small'



export default function order() {
  return(
    <div style={{
      width: "420px",
      height: "926px",
      margin: "auto"
    }}>
      <Storecardsmall></Storecardsmall>
      <Typography>의뢰내역</Typography>
    </div>

  );
}