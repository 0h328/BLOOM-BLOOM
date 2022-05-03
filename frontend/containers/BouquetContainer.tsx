import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Card,
  CardMedia,
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


function BouquetContainer() {

  const [alignment, setAlignment] = useState('1');
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  }

  const BouquetLayout = {
    position: "relative",
    top: "100px"
  };

  return (
    <Box sx={{ ...BouquetLayout }}>
      {alignment === '1' && <WrapperChooseText></WrapperChooseText>}
      {alignment === '2' && <RibbonChooseText></RibbonChooseText>}
      {alignment === '3' && <StalkChooseText></StalkChooseText>}

      {/* 선택한 포장지를 확인할 수 있는 곳 */}
      <Card 
        sx={{ 
          maxWidth: 180,
          border: '1px solid #FFC0D0',
          margin: '0 auto'
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image="/images/Bouquet.png" //포장지를 먼저 default로 보여주고, 누적되는 식으로 리본 default 보여주고 해야하나? // z-index
        />
      </Card>
      {/* 선택한 포장지를 확인할 수 있는 곳 */}
    
      {/* 포장지, 리본, 꽃줄기 버튼 */}
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        sx={{ marginTop: "30px", display: "flex", justifyContent: "space-evenly" }}
      >
        <ToggleButton 
          value="1" 
          style={{ 
            backgroundColor: "#FFE0E0", 
            color: "black", 
            marginLeft: "20px",
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
            border: "1px solid #FFE0E0"
          }} 
        >
          꽃줄기
        </ToggleButton>
      </ToggleButtonGroup>
      {/* 포장지, 리본, 꽃줄기 버튼 */}

      {/* 버튼 클릭 시, 포장지/리본/꽃줄기를 종류별로 확인 가능*/}
      {alignment === '1' && <Wrapper></Wrapper>}
      {alignment === '2' && <Ribbon></Ribbon>}
      {alignment === '3' && <Stalk></Stalk>}
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
  )
}

export default BouquetContainer;