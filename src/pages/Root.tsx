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
            <Navbar />
            <Outlet />
        </>
    )
}