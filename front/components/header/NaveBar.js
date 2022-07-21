import style from '../../styles/NaveBar/navbar.module.css'
import Logo from '../../public/icon/twitter.png'
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../src/themeContext';

const Navbar = () =>{
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    
    // console.log(darkMode);
    const hundlClick = () =>{
        setDarkMode(!darkMode);
    }
    return (
        <div className={style.Container}>
            <div className={style.Logo}>
                <img src={Logo.src} className={style.IconLogo}></img>
                <p className={darkMode ? style.MatchLogo : style.DMatchLogo}>Match</p>
            </div>
            <div className={style.Mode}>
                <p className={darkMode ? style.typeMode : style.DtypeMode}>{darkMode ? "Light" : "Dark"}</p>
                <button className={darkMode ? style.btnMdoe : style.DbtnMdoe} onClick = {hundlClick}>
                    <span className={darkMode ? style.SpanMode : style.DSpanMode}></span>
                </button>
            </div>
        </div>
    )
}

export default Navbar