import * as React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import RegisterModal from './RegisterModal';


export default function Navbar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  
  const Logout = () => {}


  return (
    <Box sx={{}}>
      <AppBar position="static" style={{ backgroundColor: "#FFE0E0" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 10 }}
          >
          <Box>
            <Link href="/admin" passHref>
              <Box sx={{ "&:hover": { cursor: "pointer" } }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontFamily: "ONEMobileLight",
                    fontSize: "1rem",
                    color: "black",
                  }}
                >
                  BLOOM BLOOM
                </Typography>
              </Box>
            </Link>
          </Box>
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "black" }}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="검색..."
              inputProps={{ 'aria-label': 'search' }}
              style={{ color: "black" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <RegisterModal/>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="default"
            >
              <LogoutIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#FFFAFA",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));