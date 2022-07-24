import React, { useContext, useEffect, useState } from 'react'
import Button from '../buttons/Button'
import Inputs from '../input/Inputs'
import style from '../../styles/login/Login.module.css'
import { ThemeContext } from '../../src/themeContext'

import axios from "axios";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Facebook from './facebook'

function CreateAccount() {
    const {darkMode} = useContext(ThemeContext)
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [gmail, setGmailName] = useState("");
    const [data, setData] = useState({
        firstname : "",
        lastname : "",
        username : "",
        password : "",
        email : ""
    });

    const handelSubmit = (e) => {
        e.preventDefault();
        setfirstName(e.target.fName.value);
        setLastName(e.target.lName.value);
        setUserName(e.target.uName.value);
        setPassword(e.target.pass.value);
        setGmailName(e.target.email.value);
      
        setData((prevState => ({
            ...prevState,
            firstname : firstName,
            lastname : lastName,
            username : userName,
            password : password,
            email : gmail
        })))

        // axios.post(`http://10.13.3.5:3001/api/register`, data).then((res) =>{
        // })
        // .catch((e) =>{
        // })
    }
    // const test = (renderProps) => {
    //     console.log("click");
    //     renderProps.onClick();
    // }
    return (
        <>
      <form className={style.ContentCreat} onSubmit={(e) => {handelSubmit(e)}}>
        <p className={darkMode ? style.SingText : style.DSingText}>Create New Account</p>
        <div className={style.inputCreat}>
            <Inputs placeholder={"First Name..."} id={"fName"} type={"text"} size={'sl'}/>
            <Inputs placeholder={"Last Name..."} id={"lName"} type={"text"} size={'sl'}/>
        </div>
        <div className={style.inputCreat}>
            <Inputs placeholder={"User Name..."} id={"uName"} type={"text"} size={'sl'}/>
            <Inputs placeholder={"Password..."} id={"pass"} type={"password"} size={'sl'}/>
        </div>
        <Inputs placeholder={"Gmail..."} id={"email"} type={"text"} size={'xxl'}/>
        <Facebook />
        <Button text={"Sing up with google Account"} size={"xxl"} span={"G+"}/>
        <Button text={"Create Account"} size={"xxl"} type={"submit"}/> 
    </form>
    </>
  )
}

export default CreateAccount