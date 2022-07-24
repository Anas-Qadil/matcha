import style from '../../styles/buttons/button.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../src/themeContext';
const Button = (props) =>{
    const {darkMode} = useContext(ThemeContext);
    return (
        <>
        {
            props.size == 'sl'? <button className={darkMode ? style.Btn : style.DBtn} >
                {props.text}
            </button>
            :
            props.size == 'xl' ? <button className={darkMode ? style.XLBtn : style.XLDBtn}>
            {props.text}
            </button>
            :
            props.size == 'xxl' && <button type={props.type} className={darkMode ? style.XXLBtn : style.XXLDBtn} onClick={props.Click}>
             <span className={props.span == 'F' ? style.SpanFc : style.SpanGol}>{props.span}</span> {props.text}
             </button>
        }
        </>
    )
}

export default Button