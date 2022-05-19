import React from 'react';
import Navbar from '../components/admin/Navbar';
import Board from '../components/admin/Board';
import Footer from '../components/admin/Footer';
import RegisterModal from '../components/admin/RegisterModal';
import { Box } from '@mui/material';

function Admin() {
  
  return (
    <Box>
      <Navbar/>      
      <Board/>  
      <Footer/>
    </Box>
  )
}

export default Admin;

