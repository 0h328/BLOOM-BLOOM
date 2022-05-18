import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import DaumPostcode from "react-daum-postcode";
// import MapContainer from './MapContainer';

const ShopRegister = () => {

  // 우편번호, 주소, 상세주소
  const [state, setState] = useState({
    postcode: '',
    addr: '',
    extraAddr: '',
  });

  // 사업자명, 담당자명, 이메일, 연락처
  const [shop, setShop] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>(''); 
  const [tel, setTel] = useState<string>('');

  // 에러 경고
  const [shopWarning, setShopWarning] = useState<string>('');
  const [nameWarning, setNameWarning] = useState<string>('');
  const [emailWarning, setEmailWarning] = useState<string>('');
  const [telWarning, setTelWarning] = useState<string>('');

  // 유효성 검사
  const [isShop, setIsShop] = useState<boolean>(false);
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isTel, setIsTel] = useState<boolean>(false);

  // 대표이미지, 이미지 선택, 주소 팝업창
  const [mainImage, setMainImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false)

 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // onSaveData(state)
    console.log(state);
    // setForm({
    //   shop: '',
    //   name: '',
    //   tel: '',
    //   address: '',
    //   email: '',
    //   zoneCode: '',
    //   fullAddress: ''
    // })
  } 


  const handlePostCode = (data: { 
    address: any; 
    addressType: string; 
    bname: string; 
    buildingName: string; 
    zonecode: any; 
  }) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)
    // props.onClose()
    setState({
      ...state,
      postcode: data.zonecode,
      addr: fullAddress,
      extraAddr: extraAddress      
    })
  }    

  // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormValue({ ...formValue, [name]: value});
  // };

  // useEffect(() => {
  //   if (selectedImage) {
  //     setMainImage(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);

  const onChangeShop = (e: any) => {
    setShop(e.target.value)
    if (e.target.value.length < 1 || e.target.value.length > 12) {
      setShopWarning('1글자 이상 12글자 이하로 입력해주세요')
      setIsShop(false)
    } else {
      setShopWarning('올바른 형식입니다.')
      setIsShop(true)
    }
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameWarning('2글자 이상 5글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameWarning('올바른 형식입니다.')
      setIsName(true)
    }
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
    setEmail(e.target.value)
    if (!emailRegex.test(e.target.value)) {
      setEmailWarning('이메일 형식을 확인해주세요.')
      setIsEmail(false)
    } else {
      setEmailWarning('올바른 이메일 형식입니다.')
      setIsEmail(true)
    }
  }
  
  const onChangeTel = (e: any) => {
    const telRegex = /^[0-9\b -]{0,13}$/;
    if (telRegex.test(e.target.value)) {
      setTel(e.target.value);
    }
  }

  useEffect(() => {
    if (tel.length === 10) {
      setTel(tel.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (tel.length === 13) {
      setTel(tel.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [tel]);

  // console.log(formValue)
  return (
    <Box 
      sx={{ ...pageWrapper }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Box>
        <Link href="/admin" passHref>
          <Box sx={{ "&:hover": { cursor: "pointer" } }}>
            <Typography sx={{ textAlign: "center", fontFamily: "JuliusSansOne", fontSize: "3rem" }}>
              BLOOM BLOOM
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ ...infoWrapper }}>
        <Typography variant='h5'>
          사업자 신규 등록
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box>
            {/* 사업자명 */}
            <Box sx={{ display: "flex", marginTop: "2rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "10rem" }}>
                사업자명
              </Typography>
              <TextField
                type="text"  
                name="shop"        
                placeholder="사업자명을 입력해주세요"
                size="small"
                style={{ width: "30rem" }}
                value={shop}
                onChange={onChangeShop}
              />
            </Box>
            <Box style={{ margin: "0.3rem 0rem 0rem 10rem" }}>
              {shop.length > 0 && isShop ? 
                <Typography style={{ color: "blue" }}>
                  {shopWarning}
                </Typography> 
              : 
                <Typography style={{ color: "red" }}>
                  {shopWarning}
                </Typography>}
            </Box>
            {/* 사업자명 */}
            {/* 담당자명 */}
            <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "10rem" }}>
                담당자명
              </Typography>
              <TextField
                type="text"  
                name="name"        
                placeholder="담당자명을 입력해주세요"
                size="small"
                style={{ width: "30rem" }}
                value={name}
                onChange={onChangeName}
              />
            </Box>
            <Box style={{ margin: "0.3rem 0rem 0rem 10rem" }}>
              {name.length > 0 && isName ? 
                <Typography style={{ color: "blue" }}>
                  {nameWarning}
                </Typography> 
              : 
                <Typography style={{ color: "red" }}>
                  {nameWarning}
                </Typography>}
            </Box>
            {/* 담당자명 */}
            {/* 연락처 */}
            <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "10rem" }}>
                연락처
              </Typography>
              <TextField
                type="text"  
                name="tel"        
                placeholder="연락처를 입력해주세요"
                size="small"
                style={{ width: "30rem" }}
                value={tel}
                onChange={onChangeTel}
              />
            </Box>
            {/* 연락처 */}
            {/* 이메일 */}
            <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "10rem" }}>
                이메일
              </Typography>
              <TextField          
                placeholder="이메일을 입력해주세요"
                name="email"
                size="small"
                style={{ width: "30rem" }}
                value={email}
                onChange={onChangeEmail}
              />
            </Box>
            <Box style={{ margin: "0.3rem 0rem 0rem 10rem" }}>
              {email.length > 0 && isEmail ? 
                <Typography style={{ color: "blue" }}>
                  {emailWarning}
                </Typography> 
              : 
                <Typography style={{ color: "red" }}>
                  {emailWarning}
                </Typography>}
            </Box>
            {/* 이메일 */}
            {/* 주소 */}
            <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "10rem" }}>
                주소
              </Typography>
              <TextField          
                name="address"
                size="small"
                style={{ width: "10rem", marginRight: "1rem" }}
                value={state.postcode}
              />      
              <Box>
                <Button 
                  type='button' 
                  style={{ 
                    width: 120, 
                    height: 40, 
                    backgroundColor: "#BAD7DF" 
                  }} 
                  onClick={openPostCode}
                >
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "black"
                    }}
                  >
                    우편번호 검색
                  </Typography>
                </Button>
                { 
                  isPopupOpen ?
                    <DaumPostcode 
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "20%",
                        left: "20%",
                        width: "600px",
                        height: "600px",
                        padding: "7px",
                        backgroundColor: "rgba(255, 250, 250, 75%)",
                        zIndex: 900,
                      }}
                      autoClose
                      onComplete={handlePostCode}
                    />
                  : null
                }
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <TextField          
                name="address"
                size="small"
                style={{ width: "30rem", marginLeft: "10rem" }}
                value={state.addr}
              /> 
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <TextField          
                name="address"
                size="small"
                style={{ width: "30rem", marginLeft: "10rem" }}
                value={state.extraAddr}
              /> 
            </Box>
            {/* 주소 */}
            {/* <MapContainer/> */}
          </Box>
          <Box sx={{ display: "flex", margin: "2rem 2rem" }}>
            <Typography 
              variant="subtitle1"
              style={{
                fontSize: "1.2rem",
                width: "10rem",
                marginLeft: "10rem",
              }}
            >
              대표이미지
            </Typography>
            <Box>
              <div
                style={{
                  backgroundColor: "#efefef",
                  width: 500,
                  height: 300,
                }}
              >
                <img src={mainImage} alt={selectedImage} height="100%" width="100%"/>         
              </div>
              <Box 
                style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  marginTop: "2rem" 
                }}
              >
                <label htmlFor="imgFile">
                  <input 
                    accept="image/*" 
                    id="imgFile" 
                    type="file"
                    style={{ display: "none" }}
                    name="imgFile"
                    onChange={e => setSelectedImage(e.target.files[0])}
                  />
                  <Button
                    variant="contained" 
                    component="span"                
                    sx={{
                    my: "auto", 
                    width: 180, 
                    height: 40, 
                    backgroundColor: '#BAD7DF'
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      style={{
                        color: "black"
                      }}
                    >
                      사진 업로드
                    </Typography>
                  </Button> 
                </label>
              </Box>
              <Box>
                <Typography 
                  variant="body2"
                  style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    color : "#b0b0b0",
                  }}
                >
                  ※ 사진은 500KB 이하의 jpg, png 형식만 등록이 가능합니다.
                </Typography>
              </Box>
            </Box>            
          </Box>
        </Box>
      </Box>
      <Box style={{ display: "flex", justifyContent: "flex-end", margin: "4rem 12em 0rem 0rem" }}>
        <Button
          variant="contained"
          type="submit"
          style={{
            width: 180, 
            height: 40,
            backgroundColor: "#BAD7DF"
          }}
        >
          <Typography
            variant="subtitle1"
            style={{
              color: "black"
            }}            
          >
            등록
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export const pageWrapper = {
  position: "absolute",
  top: "2%",
  left: "10%",
}

export const infoWrapper = {
  marginTop: "2rem"
}

export const textInput = {
  display: "flex",
  marginTop: "30px",
}

export default ShopRegister;