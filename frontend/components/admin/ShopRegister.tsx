import React, { useState } from 'react'
import Link from 'next/link';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import DaumPostcode from "react-daum-postcode";
// import MapContainer from './MapContainer';

const ShopRegister = (props) => {
  const [state, setState] = useState({
    shop: '',
    name: '',
    tel: '',
    postcode: '',
    addr: '',
    extraAddr: '',
    email: '',
  });
  const [email, setEmail] = useState(''); 
  const [emailWarning, setEmailWarning] = useState(true);
  const [tel, setTel] = useState('');
  const [telWarning, setTelWarning] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [inputValue, setInputValue] = useState('');
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


  const handlePostCode = (data) => {
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

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "20%",
    left: "20%",
    width: "600px",
    height: "600px",
    padding: "7px",
    backgroundColor: "rgba(255, 250, 250, 75%)",
    zIndex: 900,
  };

  // const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const rules = [
  //     { key: "shop", required: true, label: "업체명" },
  //     { key: "name", required: true, label: "담당자명" },
  //     { key: "tel", required: true, label: "연락처" },
  //     { key: "address", required: true, label: "주소" },
  //     { key: "email", required: true, label: "이메일" },
  //   ];
  //   validator(
  //     formValue,
  //     rules,
  //     (errors: any): any => {
  //       if (noErrors(errors)) {
  //         props.onRegisterShop(formValue);
  //         setFormValue(createShopInfo);
  //         return false;
  //       }
  //       setErrors(errors);
  //     }
  //   )
    
  //   if (telWarning || emailWarning) {
  //     if(telWarning) {
  //       toast.error("연락처 형식에 맞지 않습니다")
  //     }
  //     if(emailWarning) {
  //       toast.error("이메일 형식에 맞지 않습니다")
  //     }
  //     return;
  //   }
  // }

  // const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormValue({ ...formValue, [name]: value});
  // };

  // useEffect(() => {
  //   if (selectedImage) {
  //     setMainImage(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);

  // const onChangeEmail = (e) =>{  
  //   var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  //   if(!reg_email.test(e.target.value)) {     
  //     setEmailWarning(true);
  //   }   
  //   else {
  //     setEmailWarning(false);
  //     setEmail(e.target.value);
  //   }
  // }  
  
  // const onChangeTel = (e) => {
  //   const regex = /^[0-9\b -]{0,13}$/;
  //   if (regex.test(e.target.value)) {
  //     setInputValue(e.target.value);
  //   }
  // }

  // useEffect(() => {
  //   if (inputValue.length === 10) {
  //     setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
  //   }
  //   if (inputValue.length === 13) {
  //     setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  //   }
  // }, [inputValue]);

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
                value={state.shop}
                onChange={handleChange}
              />
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
                value={state.name}
                onChange={handleChange}
              />
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
                value={state.tel}
                onChange={handleChange}
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
                value={state.email}
                onChange={handleChange}
              />
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
                      onComplete={handlePostCode}/>
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
            {/* 주소 */}

            {/* <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <TextField          
                name="address"
                size="small"
                style={{ width: "30rem", marginLeft: "10rem" }}
                value={state.extraAddr}
              /> 
            </Box> */}
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