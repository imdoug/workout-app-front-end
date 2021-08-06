import axios from "axios";
import React, {useState}from "react";


const UserForm = ( ) =>{
    const submitLogin = () =>{
        axios
            .post('http://localhost:3000/user')

    }    
    return(
        <>
            <form onSubmit={}>
                Username: <input type="text"/>
                password: <input type="password"/>
            </form>
        </>
    )
}
