import React from 'react';
import Navbar from '../components/admin/Navbar';
import Sidebar from '../components/admin/Sidebar';
import List from '../components/admin/List';
import Footer from '../components/admin/Footer';
import {
  Box,
} from '@mui/material';

function Admin() {
  return (
    <Box sx={{ ...admin }}>
      <Navbar/>
      <Box sx={{ ...body }}>
        <Sidebar/>
        <List/>     
      </Box>
      <Footer/>
    </Box>
  )
}

export const admin = {
  height: "100%"
}

export const body = {
  display: "flex",
}

export default Admin;
