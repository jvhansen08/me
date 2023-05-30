import { useEffect } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function Root(){
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/home");
    }, [])

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div style={{marginLeft: '5vw', marginRight: '5vw'}}>
                <Outlet />
            </div>
        </>
    )
}