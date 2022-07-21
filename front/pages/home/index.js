import { useContext } from "react"
import Button from "../../components/buttons/Button"
import { ThemeContext } from "../../src/themeContext"
import style from '../../styles/home/Home.module.css'

const Home = () =>{
    const {darkMode} = useContext(ThemeContext);
    return(
        
        <div className={style.BackGround}>
            <div className={style.content}>
                <div className={style.TextContent}>
                    <div className={darkMode ? style.Text1 : style.DText1}>
                    It Is Never Too Late To Find New Friends For You
                    </div>
                    <div className={darkMode ? style.Text2 : style.DText2}>
                    One day, someone will walk into your life and make
                    you see why it never worked out with anyone else.
                    </div>
                </div>
                <div className={style.AllButton}>
                  <Button text={"Match Now"} size={"sl"}/>
                  <Button text={"Create Account"} size={"sl"}/>
                </div>
            </div>
            <div className={style.Content2}></div>
        </div>
    )
}

export default Home