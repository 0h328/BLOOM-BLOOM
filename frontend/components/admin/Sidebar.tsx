import React from 'react';
import Link from 'next/link';
import {
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

export default function Sidebar() {
  
  return (
    <Box sx={{ ...sidebarWrap }}>
      <List>
        <Link href="/admin" passHref>
          <ListItem button>
            <ListItemText 
              primary="업체 리스트" 
              style={{
                position: "absolute",
                top: "50px",
                left: "35%",
              }}
            />
          </ListItem>
        </Link>
        <Link href="/register" passHref>
          <ListItem button>
            <ListItemText 
              primary="업체 등록" 
              style={{
                position: "absolute",
                top: "100px",
                left: "35%",
              }}
            />
          </ListItem>
        </Link>
      </List>
    </Box>
  )
}

export const sidebarWrap = {
  position: "absolute",
  width: "288px",
  height: "700px",
  backgroundColor : '#efefef',
}

export const textStyle = {
  position: "absolute",
  left: "35%",
  top: "50px",
}
