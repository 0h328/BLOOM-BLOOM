import React from 'react';
import { 
  Box, 
  Grid,
} from '@mui/material';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { decoState } from '../../states/states';

interface deco {
  decoSeq: number;
  decoImage: string;
}

interface decoProps {
  decoList: deco[];
}

function Ribbon({ decoList }: decoProps) {
  const [decoInfo, setDecoInfo] = useRecoilState(decoState)
  const handleDecoInfo = (deco: {
    decoSeq: number;
    decoImage: string;
  }) => {
    setDecoInfo({
      ...deco,
    });
  };

  const clickHandler = (
    deco : {
      decoSeq: number;
      decoImage: string;
    },
    event
  ) => {
    handleDecoInfo(deco);
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
        {decoList.map((deco, index) => {
          return (
            <Grid
              item
              xs={4}
              key={index}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <Image
                src={deco.decoImage}
                alt="포장지"
                width={80}
                height={80}
                onClick={(event) => {
                  clickHandler(deco, event);
                }}
              ></Image>
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
  margin: "20px auto"
};

export default Ribbon;