import React from 'react';
import Navbar from '../components/admin/Navbar';
import Board from '../components/admin/Board';
import Footer from '../components/admin/Footer';
import { Box } from '@mui/material';

function Admin() {
  
  return (
    <Box>
      <Navbar/>      
      <Board storeInfoList={[]}/>  
      <Footer/>
    </Box>
  )
}

export default Admin;

