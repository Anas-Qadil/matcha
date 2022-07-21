
import { ThemeContext } from "../src/themeContext"
import style from '../styles/App.module.css'
import { useContext } from "react";
import Navbar from "./header/NaveBar";
const App = ({ Component, pageProps }) =>{
    const {darkMode} = useContext(ThemeContext);
    return (
        <div className={darkMode ? style.Container : style.DContainer}>
          <Navbar />
          <Component {...pageProps}/>
        </div>
    )
}

export default App