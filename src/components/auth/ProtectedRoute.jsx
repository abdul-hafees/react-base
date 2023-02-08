import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export default function ProtectedRoute(props) {

    const {token, user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect(()=>{
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get('http://laravel-training.test/api/user', {
            headers:{
                'Authorization':'Bearer ' + token
            }
        })
        .then(
            (response) => {
                setUser(response.data);
            }
        )
        .catch(() => {navigate('/login')});


    },[])


    return (
        props.children
    );
}