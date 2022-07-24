import React, { useState } from 'react'
import style from '../../styles/input/Input.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../src/themeContext';

function Inputs(props) {
  const {darkMode} = useContext(ThemeContext);
  return (
    <>
      {
        props.size == 'sl'? <input placeholder = {props.placeholder} id={props.id} type={props.type} className={darkMode ? style.Container:  style.DContainer}>
        </input>
        :
        props.size == 'xl' ? <input placeholder = {props.placeholder} id={props.id} type={props.type} className={darkMode ? style.XlContainer:  style.XlDContainer}>
        </input>
        :
        props.size == 'xxl' && <input placeholder = {props.placeholder} id={props.id} type={props.type} className={darkMode ? style.XXlContainer:  style.XXlDContainer}>
        </input>
      }
    </>
  )
}

export default Inputs