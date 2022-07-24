import React from 'react'
import Button from '../buttons/Button'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

function Facebook() {
    const responseFacebook = async (response) => {
		// const User = {
		// 	fullName: await response.name,
		// 	email: await response.email,
		// 	picture: await response.picture,
		// }
        const User = response;
        console.log("===>", User)
		
	}
  return (
    <div>
        <FacebookLogin 
        appId="554947879703544"
        autoLoad="false"
        callback={responseFacebook}
        size="medium"
        fields="name,email,picture"
        render={renderProps => (
            <Button text={"Sing up with Facebook Account"} size={"xxl"} span={"F"} Click={renderProps.onClick}/>
    )}
    />
    </div>
  )
}

export default Facebook