import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Box,
} from '@mui/material';
import WrapperChooseText from '../components/Choose/WrapperChooseText';
import RibbonChooseText from '../components/Choose/RibbonChooseText';
import StalkChooseText from '../components/Choose/StalkChooseText';
import Wrapper from '../components/Bouquet/Wrapper';
import Ribbon from '../components/Bouquet/Ribbon';
import Stalk from '../components/Bouquet/Stalk';
import { useRecoilState } from "recoil";
import { wrapState, decoState, flowerState } from "../states/states";


function BouquetContainer(props: { src: any; }) {
  const { src } = props;
  const [imgSrc, setImgSrc] = useState(src);
  const [wrapInfo, setWrapInfo] = useRecoilState(wrapState);
  const [decoInfo, setDecoInfo] = useRecoilState(decoState);
  const [flowerInfo, setFlowerInfo] = useRecoilState(flowerState);
  const [alignment, setAlignment] = useState('1');
  const handleAlignment = (event: any, newAlignment: React.SetStateAction<string>) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }
  const handleError = () => {
    setImgSrc('/img/bouquet0.png')
  }

  const wrapList = [
    { wrapSeq: 1, wrapImage: "/img/wrapOrange.png" },
    { wrapSeq: 2, wrapImage: "/img/wrapIvory.png" },
    { wrapSeq: 3, wrapImage: "/img/wrapNavy.png" },
    { wrapSeq: 4, wrapImage: "/img/wrapLightgreen.png" },
    { wrapSeq: 5, wrapImage: "/img/wrapPink.png" },
    { wrapSeq: 6, wrapImage: "/img/wrapPurple.png" },
    { wrapSeq: 7, wrapImage: "/img/wrapSkyblue.png" },
    { wrapSeq: 8, wrapImage: "/img/wrapYellow.png" },
  ]
  // 포장지 뒤, 앞 두개 더 불러오기
  // z-index
  // 크기는 그대로

  const flowerList = [
    { flowerSeq: 1, flowerImage: "/img/flower1.png" },
    { flowerSeq: 2, flowerImage: "/img/flower2.png" },
    { flowerSeq: 3, flowerImage: "/img/flower3.png" },
  ]

  const decoList = [
    { decoSeq: 1, decoImage: "/img/ribbonDeepPink.png" },
    { decoSeq: 2, decoImage: "/img/ribbonDeepBrown.png" },
    { decoSeq: 3, decoImage: "/img/ribbonPurple.png" },
    { decoSeq: 4, decoImage: "/img/ribbonNavy.png" },
    { decoSeq: 5, decoImage: "/img/ribbonMixBrown.png" },
    { decoSeq: 6, decoImage: "/img/ribbonMixPink.png" },
    { decoSeq: 7, decoImage: "/img/ribbonMixRed.png" },
    { decoSeq: 8, decoImage: "/img/ribbonMixYellow.png" },
  ]

  useEffect(() => {
    console.log(wrapInfo)
  }, [wrapInfo])


  return (    
    <Box sx={{ ...BouquetPage }}>
      {alignment === '1' && <WrapperChooseText></WrapperChooseText>}
      {alignment === '2' && <RibbonChooseText></RibbonChooseText>}
      {alignment === '3' && <StalkChooseText></StalkChooseText>}

      {/* 선택한 포장지를 확인할 수 있는 곳 */}
      <Box sx={{ ...BouquetLayout }}>
        <Box 
          sx={{ 
            position: "absolute", 
            top: "8%", 
          }}
        >
          <Image
            src={wrapInfo.wrapImage}
            alt="포장지"
            width={330}
            height={330}
            onError={handleError}
          ></Image>
        </Box>
        <Box
          sx={{ 
            position: "absolute", 
            top: "205px", 
          }}
        >
          <Image
            src={decoInfo.decoImage}
            alt="리본"
            width={100}
            height={100}
          ></Image>
        </Box>
        <Box
          sx={{ 
            position: "absolute", 
            top: "50px", 
          }}
        >
          <Image
            src={flowerInfo.flowerImage}
            alt="부속꽃"
            width={200}
            height={200}
          ></Image>
        </Box>
      </Box>     
      {/* 선택한 포장지를 확인할 수 있는 곳 */}
    
      {/* 포장지, 리본, 꽃줄기 버튼 */}
      <Box sx={{ position: "absolute", top: "350px", left: '12%' }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          sx={{ marginTop: "30px", display: "flex", justifyContent: "space-between" }}
        >
          <ToggleButton 
            value="1" 
            style={{ 
              backgroundColor: "#FFE0E0", 
              color: "black", 
              marginLeft: "20px",
              width: "80px",
              border: "1px solid #FFE0E0",
            }} 
          >
            포장지
          </ToggleButton>
          <ToggleButton 
            value="2"
            style={{ 
              backgroundColor: "#FFE0E0", 
              color: "black",
              width: "80px",
              border: "1px solid #FFE0E0"
            }} 
          >
            리본
          </ToggleButton>
          <ToggleButton 
            value="3"
            style={{ 
              backgroundColor: "#FFE0E0", 
              color: "black", 
              marginRight: "20px",
              width: "80px",
              border: "1px solid #FFE0E0"
            }} 
          >
            꽃줄기
          </ToggleButton>
        </ToggleButtonGroup>
        {/* 포장지, 리본, 꽃줄기 버튼 */}

        {/* 버튼 클릭 시, 포장지/리본/꽃줄기를 종류별로 확인 가능*/}
        {alignment === '1' && <Wrapper wrapList={wrapList}></Wrapper>}
        {alignment === '2' && <Ribbon decoList={decoList}></Ribbon>}
        {alignment === '3' && <Stalk flowerList={flowerList}></Stalk>}
        {/* 버튼 클릭 시, 포장지/리본/꽃줄기를 종류별로 확인 가능*/}

        {/* 꽃을 선택하러갈 수 있는 버튼 */}
        <Box textAlign='center'>
          <Link href="/flower" passHref>
            <Button 
              style={{
                backgroundColor: "#FFE0E0",
                color: "black",
                width: '330px'          
              }}
              variant="contained"
            >
              꽃 선택하기
            </Button>
          </Link>
        </Box>
        {/* 꽃을 선택하러갈 수 있는 버튼 */}
      </Box>
    </Box>
  )
}

export const BouquetPage = {
  position: "relative",
  top: "100px"
};

export const BouquetLayout = {
  position: "relative",
  display: "flex",
  justifyContent: "center",

};

export default BouquetContainer;