import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useRecoilState } from 'recoil';
import { storeState } from '../../states/states';

function createData(id: number, regNum: string, name: string, contact: string, address: string) {
  return { id, regNum, name, contact, address, }
}

const dummy = [
  createData(1, 'A100001', '미래플라워샵', '010-4348-1377', '경기도 수원시 영통구 매탄3동 1265-4'),
  createData(2, 'B200002', '담이 플라워', '010-4623-7488', '경기도 용인시 수지구 성복동 70-1 모던프라자 데이파크 C동 118호'),
  createData(3, 'C300003', '순수플라워', '010-7242-6145', '서울특별시 강남구 논현로 412 GS25옆 1층 103호'),
  createData(4, 'D400004', '정진순플라워샵', '010-5172-3092', '서울특별시 은평구 응암1동 110-9'),
  createData(5, 'E500005', '은초롱플라워샵', '010-8572-4971', '서울특별시 성북구 장위3동 115-32'),
  createData(6, 'F600006', '판교플라워', '010-1840-9205', '경기도 성남시 분당구 백현동 410-1'),
  createData(7, 'G700007', '유레스플라워샵', '010-8822-9257', '경기도 성남시 수정구 신흥동 2464-5번지 B1층 성남시 경기도 KR'),
  createData(8, 'H800008', '플라워샵향기나라', '010-6726-2343', '서울특별시 동대문구 답십리2동 66-48'),
  createData(9, 'I900009', '메이플라워샵', '010-8402-5072', '서울특별시 강서구 외발산동 426'),
  createData(10, 'J101010', '플라워샵로지', '010-3833-8922', '서울특별시 송파구 방이2동 60-6'),
  createData(11, 'K202020', '하나플라워샵', '010-1994-7985', '서울특별시 강남구 수서동 725'),
  createData(12, 'L303030', '더플라워샵', '010-1046-2349', '서울특별시 송파구 거여동 1-14'),
]

interface storeInfo {
  regNum: string;
  name: string;
  contact: string;
  address: string;
  lat: number;
  lng: number;
  mapId: string;
  blogId: string;
  instagramId: string;
}

interface storeInfoProps {
  storeInfoList: storeInfo[];
}

function Board({ storeInfoList }: storeInfoProps) {
  const [test, setTest] = useState(dummy)
  const [info, setInfo] = useRecoilState(storeState);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const nextId = useRef(11);

  const handleInfo = (storeInfo: {
    storeRegNum: string;
    storeName: string;
    storeContact: string;
    storeAddress: string;
    storeLat: number;
    storeLng: number;
    storeMapId: string;
    storeBlogId: string;
    storeInstagramId: string;
  }) => {
    setInfo({
      ...storeInfo,
    });
  };

  const onInfo = (
    storeInfo: {
      storeRegNum: string;
      storeName: string;
      storeContact: string;
      storeAddress: string;
      storeLat: number;
      storeLng: number;
      storeMapId: string;
      storeBlogId: string;
      storeInstagramId: string;
    },
    event
  ) => {
    handleInfo(storeInfo);
  };
  


  // const handleDelete = (id) => {
  //   setInfo(test => test.filter(item => item.id !== id));
  //   console.log(id)
  // }

  
  const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  
  return (
    <Box sx={{ width: "100%", height: "800px", position: "absolute", backgroundColor: "rgba(255, 250, 250, 75%)"}}>
      <TableContainer>
        <Table >
          <TableHead>
            <TableRow style={{ backgroundColor: "#EFDFBF"}}>
              <TableCell 
                align="center" 
                style={{ 
                  width: "17%", 
                  fontWeight: "600",
                  fontFamily: "ONEMobileLight"
                }}
              >
                사업자 등록 번호
              </TableCell>
              <TableCell 
                align="center" 
                style={{ 
                  width: "18%", 
                  fontWeight: "600",
                  fontFamily: "ONEMobileLight"
                }}
              >
                사업자명
              </TableCell>
              <TableCell 
                align="center" 
                style={{ 
                  width: "20%", 
                  fontWeight: "600",
                  fontFamily: "ONEMobileLight"
                }}
              >
                연락처
              </TableCell>
              <TableCell 
                align="center" 
                style={{ 
                  width: "35%", 
                  fontWeight: "600",
                  fontFamily: "ONEMobileLight"
                }}
              >
                주소
              </TableCell>
              <TableCell 
                align="center" 
                style={{ 
                  width: "10%", 
                  fontWeight: "600",
                  fontFamily: "ONEMobileLight"
                }}
              >
                actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(test && test
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((storeInfo, index) => (
              <TableRow key={storeInfo.regNum}>
                <TableCell align="center" style={{ fontFamily: "ONEMobileLight" }}>{storeInfo.regNum}</TableCell>
                <TableCell align="center" style={{ fontFamily: "ONEMobileLight" }}>{storeInfo.name}</TableCell>
                <TableCell align="center" style={{ fontFamily: "ONEMobileLight" }}>{storeInfo.contact}</TableCell>
                <TableCell align="center" style={{ fontFamily: "ONEMobileLight" }}>{storeInfo.address}</TableCell>
                <TableCell align="center" style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <button 
                      style={{ 
                        fontFamily: "ONEMobileLight",
                        backgroundColor: "#BAD7DF",
                        border: "0px solid",
                        cursor: "pointer",
                        width: 50,
                        height: 30,
                      }}
                    >
                      수정
                    </button>
                    <button 
                      style={{ 
                        fontFamily: "ONEMobileLight",
                        backgroundColor: "#f5698a",
                        border: "0px solid",
                        cursor: "pointer",
                        width: 50,
                        height: 30,
                      }}
                      // onClick={handleDelete}
                    >
                      삭제
                    </button>
                </TableCell>
              </TableRow>
              ))
            )
          }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ display: "flex", justifyContent: "center"}}
        count={test.length}
        rowsPerPageOptions={[10]}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  )
}

export default Board;