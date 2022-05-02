import React, { useState } from 'react';
import Layout from './styles';
import Link from 'next/link';
import { 
  Card,
  CardMedia,
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Box,
 }
from '@mui/material';
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

    if (newAlignment === '2') {
      // 리본 선택 페이지로 이동

    }

    if (newAlignment === '3') {
      // 꽃줄기 선택 페이지로 이동

    }
  }

  return (
    <Layout>
      {alignment === '1' && <WrapperChooseText></WrapperChooseText>}
      {alignment === '2' && <RibbonChooseText></RibbonChooseText>}
      {alignment === '3' && <StalkChooseText></StalkChooseText>}
      {/* 선택한 포장지를 확인할 수 있는 곳 */}
      <Card 
        className="main_image" 
        sx={{ 
          maxWidth: 200,
          border: '1px solid #FFC0D0'
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image="/images/flower.png" //포장지를 먼저 default로 보여주고, 누적되는 식으로 리본 default 보여주고 해야하나? // z-index
        />
      </Card>
      {/* 선택한 포장지를 확인할 수 있는 곳 */}
    <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        sx={{ marginTop: "30px", display: "flex", justifyContent: "space-evenly" }}
      >
        <ToggleButton 
          value="1" 
          style={{ 
            backgroundColor: "#EFDFBF", 
            color: "black", 
            marginLeft: "20px",
            border: "1px solid #EFDFBF"
          }} 
        >
          포장지
        </ToggleButton>
        <ToggleButton 
          value="2"
          style={{ 
            backgroundColor: "#EFDFBF", 
            color: "black",
            border: "1px solid #EFDFBF"
          }} 
        >
          리본
        </ToggleButton>
        <ToggleButton 
          value="3"
          style={{ 
            backgroundColor: "#EFDFBF", 
            color: "black", 
            marginRight: "20px",
            border: "1px solid #EFDFBF"
          }} 
        >
          꽃줄기
        </ToggleButton>
      </ToggleButtonGroup>
      {/* <ButtonGroup 
        variant="outlined" 
        value={alignment}
        onChange={handleAlignment}
        sx={{ 
          marginTop: "30px", 
          display: "flex", 
          justifyContent: "space-evenly" 
        }}
      >
        <Button
          variant="contained"
          value="1"
          style={{ 
            backgroundColor: "#EFDFBF", 
            color: "black", 
            marginLeft: "20px" 
          }}
        >
          포장지
        </Button>
        <Button 
          variant="contained"
          value="2"
          style={{ 
            backgroundColor: "#EFDFBF", 
            color: "black", 
            marginLeft: "20px" 
          }}
        >
          리본
        </Button>
        <Button
          variant="contained"
          value="3"
          style={{ 
            backgroundColor: "#EFDFBF", 
            color: "black", 
            marginLeft: "20px" 
          }}
        >
          부속꽃
        </Button>
      </ButtonGroup> */}
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
              backgroundColor: "#EFDFBF",
              color: "black",
              width: '380px'          
            }}
            variant="contained"
          >
              꽃 선택하기
          </Button>
        </Link>
      </Box>
      {/* 꽃을 선택하러갈 수 있는 버튼 */}

    </Layout>
    

  )
}

export default BouquetContainer;