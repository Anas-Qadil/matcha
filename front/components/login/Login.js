import React, { useContext } from 'react'
import style from '../../styles/login/Login.module.css'
import Inputs from '../input/Inputs'
import Button from '../buttons/Button'
import { ThemeContext } from '../../src/themeContext'
import axios from 'axios'
import Link from 'next/link';
function Login() {
    const {darkMode} = useContext(ThemeContext)
    // const [fromation, setFormation] = useState("")
    // const [password, setPassword] = useState("")

  const hundelFormation = (e) =>{
      e.preventDefault();
      axios.post("http://10.13.3.5:3001/api/login", {email: e.target.email.value, password: e.target.pass.value})
      .then((res) =>{
        if (res.status == 200)
          console.log("res=====>",res)
      }).catch((e) =>{
          console.log("errrrrror");
      })
  }
  return (
    <form className={style.Content} onSubmit={(e) =>{hundelFormation(e)}}>
        <p className={darkMode ? style.SingText : style.DSingText}>Sing up to Match</p>
        <div className={style.Allinput}>
            <Inputs placeholder={"Email..."} type={"text"} size={'xl'} id={"email"}/>
            <Inputs placeholder={"Password..."} type={"password"} size={'xl'} id={"pass"}/>
        </div>
        <Link href='/reset'><p className={darkMode ? style.textForget : style.DtextForget}>Forget Password ?</p></Link>
        <Button text={"Sign In"} size={"xl"} type={"submit"}/>
    </form>
  )
}

export default Login