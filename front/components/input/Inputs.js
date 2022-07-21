import React from 'react'
import style from '../../styles/input/Input.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../src/themeContext';
function Inputs(props) {
    const {darkMode} = useContext(ThemeContext);
  return (
    <input placeholder = {props.placeholder} type={props.type} className={darkMode ? style.Container:  style.DContainer}>
    </input>
  )
}

export default Inputs