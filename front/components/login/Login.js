import React, { useContext } from 'react'
import style from '../../styles/login/Login.module.css'
import Inputs from '../input/Inputs'
import Button from '../buttons/Button'
import { ThemeContext } from '../../src/themeContext'
function Login() {
    const {darkMode} = useContext(ThemeContext)
  return (
    <div className={style.Content}>
        <p className={darkMode ? style.SingText : style.DSingText}>Sing up to Match</p>
        <div className={style.Allinput}>
            <Inputs placeholder={"First Name..."} type={"text"}/>
            <Inputs placeholder={"Password..."} type={"password"}/>
        </div>
        <p className={darkMode ? style.textForget : style.DtextForget}>Forget Password ?</p>
        <Button text={"Sign In"} size={"xl"}/>
    </div>
  )
}

export default Login