import { Typography } from '@mui/material';
import Storecardsmall from '../components/storecard_small'



export default function order() {
  return(
    <div style={{
      width: "400px",
      height: "900px",
      margin: "auto"
    }}>
      <Storecardsmall></Storecardsmall>
      <Typography>의뢰내역</Typography>
    </div>

  );
}