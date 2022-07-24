import React from 'react'
import ResetPassword from '../../components/resetPassword/reset';
import style from '../../styles/login/Login.module.css'
import image from '../../public/icon/undraw.svg'

function index() {
  return (
    <div className={style.Container}>
    <div className={style.childCreat}>
        <ResetPassword />
        <img src={image.src} className={style.iconSVGCreat}/>
    </div>
</div>
  )
}

export default index