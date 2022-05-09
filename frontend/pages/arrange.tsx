import React, { useState, useRef } from 'react';
import Header from "../components/common/Header";
import FlowerArrangeText from '../components/Choose/FlowerArrangeText';
import ConfirmBtn from "../components/Button/ConfirmPageBtn";
import DecoConfirmModal from "../components/modal/DecoConfirmModal";
import FlowerArrange from '../components/Bouquet/FlowerArrange';
import MakingFlowerImage from '../components/Bouquet/MakingFlowerImage';
import Image from 'next/image';
import { 
  Box,
  ImageList, 
  ImageListItem 
} from '@mui/material';
import Draggable from "react-draggable"; 

export default function Arrange() {
  const [decoModal, setDecoModal] = useState<boolean>(false);

  const makingFlowerImg = "/img/Wrapper1.png";

  const handleDecoModal = (e: any) => {
    openDecoModal();
  };
  const openDecoModal = () => {
    setDecoModal(true);
  }
  const closeDecoModal = () => {
    setDecoModal(false);
  }

  const nodeRef = useRef(null);
  const [Opacity, setOpacity] = useState(false);
  const handleStart = () => {
    setOpacity(true);
  };
  const handleEnd = () => {
    setOpacity(false);
  };
  const [position, setPosition] = useState({ x: 0, y: 0})
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y })
  }

  return (
      <Box
        sx={{
          mx: "auto",
          width: 420,
          position: "relative",
          backgroundColor: "#FFFAFA",
          height: "840px",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ position: "absolute", top: "30px" }}>
          <Header></Header>
        </Box>
        <DecoConfirmModal
          openDecoModal={openDecoModal}
          closeDecoModal={closeDecoModal}
          decoModal={decoModal}
        ></DecoConfirmModal>
        <FlowerArrangeText></FlowerArrangeText>
        <Box sx={{ position: "absolute", top: "150px", left: "30px" }}>
          {/* <MakingFlowerImage makingFlowerImg={makingFlowerImg}></MakingFlowerImage> */}

          <Image
            id="img"
            src={makingFlowerImg}
            alt="꽃다발"
            width={360}
            height={450}
          ></Image>
        {/* </Box> */}
        {/* <Box sx={{ position: "absolute", top: "600px", left: "30px" }}> */}
        {/* <Box sx={{ ...style }}> */}
          <ImageList sx={{ width: 320, height: 180 }} cols={4} rowHeight={70}>
            {FlowerImageData.map((item) => (
              <ImageListItem key={item.img} >
                <Draggable
                  nodeRef={nodeRef}
                  onDrag={(e, data) => trackPos(data)}
                  onStart={handleStart}
                  onStop={handleEnd}
                >
                  <img ref={nodeRef} style={{ ...imagestyle }} src={`${item.img}`}/>
                </Draggable>
              </ImageListItem>
            ))}
          </ImageList>
        {/* </Box> */}
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "100px",
            left: "45px",
            alignItems: "center",
          }}
        >
          <ConfirmBtn
            click={(e: any) => handleDecoModal(e)}
            title="완료"
            text=""
          ></ConfirmBtn>
        </Box>
      </Box>
  )
};

export const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 auto",
  width: "360px",
}

export const imagestyle = {
  width: '80px',
  height: '90px',
  zindex: '500px',
}


export const FlowerImageData = [
  {
    id: 1,
    img: "/img/rosePink.png"
  },
  {
    id: 2,
    img: "/img/rosePink.png"
  },
  {
    id: 3,
    img: "/img/roseRed.png"
  },
  {
    id: 4,
    img: "/img/carnationOrange.png"
  },
  {
    id: 5,
    img: "/img/carnationOrange.png"
  },
  {
    id: 6,
    img: "/img/freesiaPurple.png"
  },
  {
    id: 7,
    img: "/img/carnationPink.png"
  },
  {
    id: 8,
    img: "/img/roseRed.png"
  },
];