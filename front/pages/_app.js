import { ThemeProvider } from "../src/themeContext"
import { useEffect } from "react";
import App from "../components/App";
function MyApp({ Component, pageProps }) {

  useEffect(() => {
      document.getElementsByTagName("body")[0].style.margin = "0";
      document.getElementsByTagName("body")[0].style.width = "100%";
      document.getElementsByTagName("body")[0].style.height = "100%";
  });
  return(
    <ThemeProvider>
      <App Component={Component} pageProps={pageProps}/>
    </ThemeProvider>
  )
}
      
export default MyApp
      