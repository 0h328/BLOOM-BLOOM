/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import DaumPostcode from "react-daum-postcode";
import { saveStore } from '../apis/storeRegister';
import MapContainer from './MapContainer';
import { storeState } from '../../states/states';
import { useRecoilState } from 'recoil';
import axios from 'axios';

const StoreRegister: React.FC = () => {

  // 사업자명, 연락처, 사업자 등록 번호, 사업자 등록 주소
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [regNum, setRegNum] = useState<string>('');
  const [address, setAddress] = useState({
    postcode: '', // 우편번호
    addr: '',     // 주소
    extraAddr: '' // 상세주소
  });
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const [mapId, setMapId] = useState<string>('');
  const [blogId, setBlogId] = useState<string>('');
  const [instagramId, setInstagramId] = useState<string>('');
  const [mainImage, setMainImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [storeInfo, setStoreInfo] = useRecoilState(storeState);
  const [imageData, setImageData] = useState<FormData>();



	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }


  useEffect(() => {
    console.log('test')
    if (selectedImage) {
      setMainImage(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handlePost = async () => {
    // e.preventDefault();
    console.log(selectedImage)

    const file = new Blob([selectedImage], { type: "image/png" })
    const fileName = "canvas_img_" + new Date().getMilliseconds() + ".png"
    const formData = new FormData();
    formData.append('file', file, fileName);
    // key, 보낼 파일, 파일이름

    // formData.get('file');      
    // console.log(window.URL.createObjectURL(file))
    // console.log(formData.get('file'))

    const data = {
      // storeName: storeInfo.storeName,
      // storeContact: storeInfo.storeContact,
      // storeAddress: storeInfo.storeAddress,
      // storeRegNum: storeInfo.storeRegNum,
      // storeMapId: storeInfo.storeMapId,
      // storeBlogId: storeInfo.storeBlogId,
      // storeInstagramId: storeInfo.storeInstagramId,
      storeName:'ㅁ',
      storeContact: 'ㅁ',
      storeAddress: 'ㅁ',
      storeRegNum: 'ㅁ',
      storeMapId: 'ㅁ',
      storeBlogId: 'ㅁ',
      storeInstagramId: 'ㅁ',
    };
    console.log(data);
    formData.append(
      "request",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    console.log(formData.get('request'))
    setImageData(formData);
    const res = await saveStore(imageData)
    console.log(res)

    // try {
    //   const res = await axios.post('/admin', formData, {
    //     headers: { 
    //       Authorization: localStorage.getItem("accessToken"),
    //     },
    //   });
    //   console.log(res)
    //   alert('성공')
    // }
    // catch (e) {
    //   alert('실패')
    //   console.log(e);
    // }
    // saveStore(formData)
    // .then(res => {
    //   console.log(res)
    //   alert('성공')
    // })
    // .catch(err => {
    //   console.log(err)
    //   alert('실패')
    // })
  }

  // 사업자명
  const onChangeName = (e: any) => {
    setName(e.target.value)
  }

  // 연락처 
  const onChangeContact = (e: any) => {
    const contactRegex = /^[0-9\b -]{0,13}$/;
    if (contactRegex.test(e.target.value)) {
      setContact(e.target.value);
    }
  }
  useEffect(() => {
    if (contact.length === 10) {
      setContact(contact.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (contact.length === 13) {
      setContact(contact.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [contact]);

  // 사업자 등록 번호
  const onChangeRegNum = (e: any) => {
    setRegNum(e.target.value)
  }

  // 사업자 등록 주소
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
    // console.log(data)
    // console.log(fullAddress)
    // console.log(data.zonecode)
    // props.onClose()
    setAddress({
      ...address,
      postcode: data.zonecode,
      addr: fullAddress,
    })
  }  

  // 네이버 지도
  const onChangeMapId = (e: any) => {
    setMapId(e.target.value)
  }

  // 네이버 블로그
  const onChangeBlogId = (e: any) => {
    setBlogId(e.target.value)
  }
  
  // 인스타그램
  const onChangeInstagramId = (e: any) => {
    setInstagramId(e.target.value)
  }


  return (
    <Box 
      sx={{ ...pageWrapper }}
      component="form"
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
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant='h5'>
            사업자 신규 등록
          </Typography>
          <Box style={{ display: "flex", justifyContent: "flex-end", marginRight: "2rem" }}>
            <Link href="/admin" passHref>
              <Button
                variant="contained"
                type="submit"
                style={{
                  width: 180, 
                  height: 40,
                  backgroundColor: "#BAD7DF"
                }}
                onClick={handlePost}
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
            </Link>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            {/* 사업자명 */}
            <Box sx={{ display: "flex", marginTop: "2rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "12rem" }}>
                사업자명
              </Typography>
              <TextField
                type="text"  
                name="name"        
                placeholder="사업자명을 입력해주세요"
                size="small"
                style={{ width: "30rem" }}
                value={name}
                onChange={onChangeName}
              />
            </Box>
            {/* 사업자명 */}
            {/* 연락처 */}
            <Box sx={{ display: "flex", marginTop: "2rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "12rem" }}>
                연락처
              </Typography>
              <TextField
                type="text"  
                name="contact"        
                placeholder="연락처를 입력해주세요"
                size="small"
                style={{ width: "30rem" }}
                value={contact}
                onChange={onChangeContact}
              />
            </Box>
            {/* 연락처 */}
            {/* 사업자 등록 번호 */}
            <Box sx={{ display: "flex", marginTop: "2rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "12rem" }}>
                사업자 등록 번호
              </Typography>
              <TextField          
                placeholder="사업자 등록 번호를 입력해주세요"
                name="email"
                size="small"
                style={{ width: "30rem" }}
                value={regNum}
                onChange={onChangeRegNum}
              />
            </Box>
            {/* 사업자 등록 번호 */}
            {/* 사업자 등록 주소 */}
            <Box sx={{ display: "flex", marginTop: "2rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "12rem" }}>
                사업자 등록 주소
              </Typography>
              <TextField          
                name="address"
                size="small"
                style={{ width: "10rem", marginRight: "1rem" }}
                value={address.postcode}
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
                  <Box>
                    <Button title="닫기" onClick={() => setIsPopupOpen(false)}>닫기</Button>
                    <DaumPostcode 
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "20%",
                        left: "40%",
                        width: "600px",
                        height: "600px",
                        padding: "7px",
                        backgroundColor: "rgba(255, 250, 250, 75%)",
                        zIndex: 900,
                      }}
                      autoClose
                      onComplete={handlePostCode}
                    />
                  </Box>
                  : null
                }                
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <TextField          
                name="address"
                size="small"
                style={{ width: "30rem", marginLeft: "12rem" }}
                value={address.addr}
              /> 
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem", alignItems: "center" }}>
              <TextField          
                name="address"
                size="small"
                style={{ width: "30rem", marginLeft: "12rem" }}
                value={address.extraAddr}
              /> 
            </Box>
            {/* 사업자 등록 주소 */}
            {/* 네이버 지도 */}
            <Box sx={{ display: "flex", marginTop: "2rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "12rem" }}>
                네이버 지도
              </Typography>
              <TextField          
                placeholder="네이버 지도 정보를 입력해주세요"
                name="email"
                size="small"
                style={{ width: "30rem" }}
                value={mapId}
                onChange={onChangeMapId}
              />
            </Box>
            {/* 네이버 지도 */}
            {/* 네이버 블로그 */}
            <Box sx={{ display: "flex", marginTop: "2rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "12rem" }}>
                네이버 블로그
              </Typography>
              <TextField          
                placeholder="네이버 블로그 주소를 입력해주세요"
                name="email"
                size="small"
                style={{ width: "30rem" }}
                value={blogId}
                onChange={onChangeBlogId}
              />
            </Box>
            {/* 네이버 블로그 */}
            {/* 인스타그램 */}
            <Box sx={{ display: "flex", marginTop: "2rem", alignItems: "center" }}>
              <Typography variant="subtitle1" style={{ fontSize: "1.2rem", width: "12rem" }}>
                인스타그램
              </Typography>
              <TextField          
                placeholder="인스타그램 주소를 입력해주세요"
                name="email"
                size="small"
                style={{ width: "30rem" }}
                value={instagramId}
                onChange={onChangeInstagramId}
              />
            </Box>
            {/* 인스타그램 */}
          </Box>
          <Box sx={{ display: "flex", margin: "2rem 2rem" }}>
            <Typography 
              variant="subtitle1"
              style={{
                fontSize: "1.2rem",
                width: "10rem",
                marginLeft: "8rem",
              }}
            >
              대표이미지
            </Typography>
            <Box>
              {/* 대표이미지 */}
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
              {/* 대표이미지 */}
              <Box style={{ marginTop: "1rem"}}>
                <MapContainer/>
              </Box>
            </Box>                        
          </Box>
        </Box>
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

export default StoreRegister;