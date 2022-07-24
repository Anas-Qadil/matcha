import React from 'react'
import style from "../../styles/login/Login.module.css"
import { ThemeContext } from '../../src/themeContext'
import { useContext } from 'react'
import Inputs from '../input/Inputs'
import Button from '../buttons/Button'
import { useState } from 'react'
import axios from 'axios'

function ResetPassword() {
    const [fromation, setFormation] = useState("")
    const [password, setPassword] = useState("")
    const [addcode, setCode] = useState("")
    const [test, settest] = useState(0);
    const {darkMode} = useContext(ThemeContext)
    //api/forgot-password
    const hundelFormation = (e) =>{
        e.preventDefault();
        axios.post("http://10.13.3.5:3001/api/forgot-password", {email : e.target.email.value})
        .then((res) =>{
            if (res.status == 200)
            settest(1);
        }).catch((e) =>{
            console.log();
        })
        setFormation(e.target.email.value)
    }
    const hundelVerification = (e) =>{
        e.preventDefault();
        axios.post("http://10.13.3.5:3001/api/reset-password", {email: fromation , code : e.target.AddCode.value})
        .then((res) =>{
            if (res.status == 200)
                settest(2);
        }).catch((e) =>{
            console.log();
        })
    }
    const hundelPassword = (e) =>{
        e.preventDefault();
        axios.post("http://10.13.3.5:3001/api/reset-password", {email: fromation , code : e.target.pass.value})
        .then((res) =>{
            if (res.status == 200)
                settest(2);
        }).catch((e) =>{
            console.log();
        })
        setPassword();
    }
    return (
      <>
        {test == 0 && <form className={style.ContentCreat} onSubmit={(e) =>{hundelFormation(e)}}>
            <p className={darkMode ? style.SingText : style.DSingText}>Enter Your Email</p>
            <Inputs placeholder={"Email"} id={"email"} type={"text"} size={'xxl'}/>
            <Button text={"Submit"} size={"xxl"} type={"submit"}/>
        </form>}
        {test == 1 && <form className={style.ContentCreat} onSubmit={(e) =>{hundelVerification(e)}}>
            <p className={darkMode ? style.SingText : style.DSingText}>Code Verification</p>
            <Inputs placeholder={"Add Code verification..."} id={"AddCode"} type={"text"} size={'xl'}/>
            <Button text={"Send Code"} size={"xl"} type={"submit"}/>
        </form>}
        {test == 2 && <form className={style.ContentCreat} onSubmit={(e) =>{hundelPassword(e)}}>
            <p className={darkMode ? style.SingText : style.DSingText}>Add New Password</p>
            <Inputs placeholder={"New Password"} id={"pass"} type={"password"} size={'xl'}/>
            <Button text={"Update"} size={"xl"} type={"submit"}/>
        </form>}
    </>
  )
}

export default ResetPassword