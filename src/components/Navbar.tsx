import { Pages } from '../utils/HelperFunctions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const pages = Pages();

export function Navbar() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("home");

  return (
    <div className='navbar'>
      <div className='navbar-name' style={{color: 'white', paddingLeft: '2%'}}>
        <p style={{fontSize: '50px', margin: 0}}>Jared Hansen</p>
        <h1 style={{fontSize: '25px', margin: 0}}>Software Developer</h1>
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
              fontFamily: 'Arial',
              color: current !== page ?'white' : '#d6e2f2',
              borderBottom: current !== page ? 'none' : '1px solid white',
            }}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}