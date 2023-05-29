// import { Link } from "react-router-dom";

// export function Navbar() {
//     return(
//         <div className="navbar">
//             <li className="tab">
//                 <Link to="home">Home</Link>
//             </li>
//             <li className="tab">
//                 <Link to="projects">Projects</Link>
//             </li>
//             <li className="tab">
//                 <Link to="about">About</Link>
//             </li>
//             <li className="tab">
//                 <Link to="contact">Contact Me</Link>
//             </li>
//         </div>
//     )
// }

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Pages } from '../utils/HelperFunctions';
import { useNavigate } from 'react-router-dom';

const pages = Pages();

export function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontFamily: "monospace"}}>
            {Object.entries(pages).map(([page, title]) => (
              <Button
                key={page}
                onClick={() => navigate(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}