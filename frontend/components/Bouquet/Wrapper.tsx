import React from 'react';
import { 
  Box, 
  Grid,
} from '@mui/material';
import { useRecoilState } from 'recoil';
import { wrapState } from '../../states/states';


interface wrap {
  wrapSeq: number;
  wrapImage: string;
  wrapBackImage: string;
  wrapFrontImage: string;
}

interface wrapProps {
  wrapList: wrap[];
}

function Wrapper({ wrapList }: wrapProps) {
  const [wrapInfo, setWrapInfo] = useRecoilState(wrapState)
  const handleWrapInfo = (wrap: {
    wrapSeq: number;
    wrapImage: string;
    wrapBackImage: string;
    wrapFrontImage: string;
  }) => {
    setWrapInfo({
      ...wrap,
    });
  };

  const clickHandler = (
    wrap : {
      wrapSeq: number;
      wrapImage: string;
      wrapBackImage: string;
      wrapFrontImage: string;
    },
    event
  ) => {
    handleWrapInfo(wrap);
  };  

  return (
    <Box sx={{ ...style }}>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyItems="center"
        sx={{ width: 320 }}
      >
        {wrapList.map((wrap, index) => {
          return (
            <Grid
              item
              xs={4}
              key={index}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <img
                src={wrap.wrapImage}
                alt="포장지"
                style={{ width: "80px", height: "80px"}}
                onClick={(event) => {
                  clickHandler(wrap, event);
                }}
              ></img>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  )
}

export const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "20px auto",
};

export default Wrapper;