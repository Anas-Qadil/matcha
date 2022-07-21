import React from 'react'
import Login from '../../components/login/Login'
import style from '../../styles/login/Login.module.css'
import image from '../../public/icon/undraw.svg'
function index() {
  return (
    <div className={style.Container}>
        <div className={style.child}>
            <Login />
            <img src={image.src} className={style.iconSVG}/>
        </div>
    </div>
  )
}

export default index