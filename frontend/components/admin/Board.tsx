// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
// } from '@mui/material';
// import ShopRegister from './ShopRegister';

// function createData(shop: any, name: any, tel: any, address: any, email: any) {
//   return { shop, name, tel, address, email }
// }

// const test = [
//   createData('A', 'Kim', '010-1234-4567', '서울', '2@n.com'),
//   createData('B', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('C', 'Kim', '010-1234-4567', '서울', '2@n.com'),
//   createData('D', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('E', 'Kim', '010-1234-4567', '서울', '2@n.com'),
//   createData('k', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('d', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('f', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('e', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('e', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('q', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('z', 'Lee', '010-1234-4567', '서울', '2@n.com'),
//   createData('y', 'Lee', '010-1234-4567', '서울', '2@n.com')
// ]


// const Board = (props: any) => {
//   const [info, setInfo] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const nextId = useRef(11);

  

  
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };


  
//   return (
//     <Box sx={{  width: "85%", height: "800px", position: "absolute", left: "15%" }}>
//       <TableContainer>
//         <Table >
//           <TableHead>
//             <TableRow>
//               <TableCell align="left">업체명</TableCell>
//               <TableCell align="left">담당자</TableCell>
//               <TableCell align="left">연락처</TableCell>
//               <TableCell align="left">주소</TableCell>
//               <TableCell align="left">이메일</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {(test
//               .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
//               .map(i => (
//               <TableRow key={i.shop}>
//                 <TableCell align="left">{i.shop}</TableCell>
//                 <TableCell align="left">{i.name}</TableCell>
//                 <TableCell align="left">{i.tel}</TableCell>
//                 <TableCell align="left">{i.address}</TableCell>
//                 <TableCell align="left">{i.email}</TableCell>
//                 <TableCell align="left">
//                   <Link href="/update" passHref>                          
//                     <button 
//                       style={{ 
//                         backgroundColor: "#BAD7DF",
//                         border: "0px solid",
//                         cursor: "pointer"
//                       }}
//                     >
//                       수정
//                     </button>
//                   </Link>
//                 </TableCell>
//               </TableRow>
//               ))
//             )
//           }
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         sx={{ display: "flex", justifyContent: "center"}}
//         count={test.length}
//         rowsPerPageOptions={[10]}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Box>
//   )
// }

// export default Board;

import React, { useState } from 'react';
import Link from 'next/link';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from './dummyData';



export default function UserList() {
  const [data, setData] = useState(userRows)
  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'shop', headerName: 'Shop', width: 180 },
    { field: 'name', headerName: 'Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'tel', headerName: 'Tel', width: 200 },
    { 
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link href={'/edit/'+`${params.row.id}`} passHref>
              <button style={{
                border: 'none',
                borderRadius: '10px',
                padding: '5px 10px',
                backgroundColor: '#3bb077',
                color: 'white',
                cursor: 'pointer',
                marginRight: '15px'
                }}
              >
                수정
              </button>
            </Link>
            <DeleteOutline 
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      }
    }
  ];

  return (
    <div style={{ position: 'absolute', width: '85%', left: '15%', height: '800px' }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}