import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'material-react-toastify';
import Link from 'next/link';
import {
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import Swal from 'sweetalert2';
import { useRecoilState } from 'recoil';
import { adminState, storeImageState } from '../../states/states';

export default function ShopRegister() {
  const [store, setStore] = useState(''); // 업장명
  const [email, setEmail] = useState(''); 
  const [emailWarning, setEmailWarning] = useState(true);
  const [telNo, setTelNo] = useState('');
  const [telNoWarning, setTelNoWarning] = useState(false);
  const [mainImage, setMainImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [adminInfo, setAdminInfo] = useRecoilState(adminState);

  const [storeImageLink, setStoreImageLink] = useRecoilState(storeImageState);

  useEffect(() => {
    if (selectedImage) {
      setMainImage(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);



  const onSubmit = async (e) => {
    e.preventDefault();
    if (telNoWarning || emailWarning) {
      if(telNoWarning) {
        toast.error("연락처 형식에 맞지 않습니다")
      }
      if(emailWarning) {
        toast.error("이메일 형식에 맞지 않습니다")
      }
      return;
    }


  }

  const onChangeEmail = (e) =>{  
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(!reg_email.test(e.target.value)) {     
      setEmailWarning(true);
    }   
    else {
      setEmailWarning(false);
      setEmail(e.target.value);
    }
  }  
  
  const onChangeTelNo = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  }

  useEffect(() => {
    if (inputValue.length === 10) {
      setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (inputValue.length === 13) {
      setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [inputValue]);

  return (
    <Box 
      sx={{ ...pageWrapper }}
      component="form"
      onSubmit={onSubmit}
    >
      <Box>
        <Link href="/admin" passHref>
          <Box sx={{ "&:hover": { cursor: "pointer" } }}>
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "JuliusSansOne",
                fontSize: "3rem",
              }}
            >
              BLOOM BLOOM
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box sx={{ ...infoWrapper }}>
        <Typography variant='h5'>
          사업자 신규 등록
        </Typography>
        <Box
          sx={{
            display: "flex"
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
              }}
            >
              <Typography 
                variant="subtitle1"
                style={{ 
                  fontSize: "1.2rem",
                  width: "10rem",
                }}
              >
                사업자명
              </Typography>
              <TextField          
                placeholder="사업자명을 입력해주세요"
                size="small"
                style={{ 
                  width: "30rem",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
              }}
            >
              <Typography 
                variant="subtitle1"
                style={{ 
                  fontSize: "1.2rem",
                  width: "10rem",
                }}
              >
                담당자
              </Typography>
              <TextField          
                placeholder="담당자를 입력해주세요"
                size="small"
                style={{ 
                  width: "30rem",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
              }}
            >
              <Typography 
                variant="subtitle1"
                style={{ 
                  fontSize: "1.2rem",
                  width: "10rem",
                }}
              >
                연락처
              </Typography>
              <TextField          
                placeholder="연락처를 입력해주세요"
                size="small"
                style={{ 
                  width: "30rem",
                }}
                value={inputValue}
                onChange={onChangeTelNo}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
              }}
            >
              <Typography 
                variant="subtitle1"
                style={{ 
                  fontSize: "1.2rem",
                  width: "10rem",
                }}
              >
                주소
              </Typography>
              <TextField          
                placeholder="주소를 입력해주세요"
                size="small"
                style={{ 
                  width: "30rem",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
              }}
            >
              <Typography 
                variant="subtitle1"
                style={{ 
                  fontSize: "1.2rem",
                  width: "10rem",
                }}
              >
                이메일
              </Typography>
              <TextField          
                placeholder="이메일을 입력해주세요"
                size="small"
                style={{ 
                  width: "30rem",
                }}
                onChange={onChangeEmail}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
              }}
            >
              <Typography 
                variant="subtitle1"
                style={{ 
                  fontSize: "1.2rem",
                  width: "10rem",
                }}
              >
                네이버 지도
              </Typography>
              <TextField          
                // placeholder=""
                size="small"
                style={{ 
                  width: "30rem",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
              }}
            >
              <Typography 
                variant="subtitle1"
                style={{ 
                  fontSize: "1.2rem",
                  width: "10rem",
                }}
              >
                네이버 블로그
              </Typography>
              <TextField          
                // placeholder=""
                size="small"
                style={{ 
                  width: "30rem",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "2rem",
                alignItems: "center",
              }}
            >
              <Typography 
                variant="subtitle1"
                style={{ 
                  fontSize: "1.2rem",
                  width: "10rem",
                }}
              >
                인스타그램
              </Typography>
              <TextField          
                // placeholder=""
                size="small"
                style={{ 
                  width: "30rem",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              margin: "2rem 2rem",
            }}
          >
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
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "4rem 12em 0rem 0rem"
        }}
      >
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