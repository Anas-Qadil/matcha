# Matcha <img src="https://img.shields.io/static/v1?label=&message=socket.io&logo=socket.io&color=gray"/> <img src="https://img.shields.io/static/v1?label=&message=nodejs&logo=node.js&color=gray"/> <img src="https://img.shields.io/static/v1?label=&message=react&logo=react&color=gray"/>

Creating a dating site using React, Node JS and MongoDB

## Intro

Objective of this project is to create a complete dating website that allows users to search, discover profiles according to their preferences and geolocation, show them some love with real-time likes, notifications and chat if both profiles match.

### Stack

* Node JS (Express)
* React JS
* Material UI Front libraries
* MongoDB
* JSON web tokens
* Axios for API requests
* Websockets (socket.io) for real-time

### Features

My Matcha project handles:
* DB creation script
* User creation and authentication using token
* Pictures upload and default profile picture
* Complete user profile page with gender, bio, location, interests details...
* User profile edition (password, details, preferences)
* Profiles discovery based on matching algorithm and user preferences
* Real-time notifications for likes, profile views and matches
* Real-time chat if two profiles match
* User ability to block or report another profile
* Email notifications for authentication and password reset (with auth key)
* Change and reset of email/forgot password with ID validation
* Profile, pictures deletion and user DB cleanup
* Responsive design from mobile to desktop/tablet
* User input and upload checks (front/backend)
* Password hashing
* HTML/Javascript/SQL injections prevention

## Installation

install package for client and server

```bash
npm --prefix ./server install
npm --prefix ./client install
node ./server/Config/Setup.js #generate 580 users
```

## Screenshots
will be available when the project is finished
