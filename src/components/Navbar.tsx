import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Pages } from '../utils/HelperFunctions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const pages = Pages();

export function Navbar() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("home");

  return (
    // <AppBar position="sticky">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontFamily: "monospace"}}>
    //         {Object.entries(pages).map(([page, title]) => (
    //           <Button
    //             key={page}
    //             onClick={() => navigate(page)}
    //             sx={{ my: 2, color: 'white', display: 'block' }}
    //           >
    //             {title}
    //           </Button>
    //         ))}
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    <div className='navbar'>
      <div className='navbar-name' style={{color: 'white', paddingLeft: '2%'}}>
        <p style={{fontSize: '50px', margin: 0}}>Jared Hansen</p>
        <p style={{fontSize: '25px', margin: 0}}>Software Developer</p>
      </div>
      <div className='navbar-tabs'>
        {Object.entries(pages).map(([page, title]) => (
          <div
            key={page}
            onClick={
              () => {
                setCurrent(page);
                navigate(page);
              }
            }
            style={{
              cursor: 'pointer',
              fontSize: '20px', 
              color: current !== page ?'white' : '#d6e2f2',
              borderBottom: current !== page ? 'none' : '1px solid #aaa',
            }}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}