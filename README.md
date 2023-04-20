# Project description

Chat app for mobile devices that provides users with a chat interface and options to share images and their location.

# How to get the project running

### Setting up with Expo

* Ensure you have a suitable version of Node installed.
* Install Expo CLI on your machine: npm install -g expo-cli.
* Install Expo Go app from App Store or Google Play Store on your phone.
* Create an Expo account.

### Setting up a Device Emulator

* Download and install [Android Studio](https://developer.android.com/studio) (Android Emulator).
* Download and install Xcode (iOS Simulator).

### Setting up a Firestore database

* Sign in or Sign up in Google Firebase.
* Create a project (or Add project if you’ve created Firebase projects before).
* Create a database (Firestore Database).
* Install Firestore (via Firebase): npm install firebase@9.13.0 --save.
* In Firebase, open up Project Settings > General tab > Your Apps > Web apps ang generate your configurations.

### Installation

* Clone...
* Copy-paste the const firebaseConfig = {...}; code into your App.js file.

```
	// Your web app's Firebase configuration
	const firebaseConfig = {
	apiKey: "AIzaSyAzXRF5gPu8dK6GTr_cfWm6EwiBLoaHg_o",
	authDomain: "chat-app-6c198.firebaseapp.com",
	projectId: "chat-app-6c198",
	storageBucket: "chat-app-6c198.appspot.com",
	messagingSenderId: "699830998597",
	appId: "1:699830998597:web:22e5c1d162c2dc9f45352c"
	};
```

* Run the commands npm install or expo install and expo start or npm start.


# Project dependencies

* Expo version: v~48.0.x
* React version: v18.2.x
* React Native version: v0.71.x
* Google Firestore DataBase

# Libraries and packages to install

* React Navigation: npm install --save @react-navigation/native @react-navigation/native-stack
* React Navigation dependencies: expo install react-native-screens react-native-safe-area-context
* React Native Gifted Chat: npm install react-native-gifted-chat --save
* Firestore (via Firebase): npm install firebase@9.13.0 --save
* React Native package for local storage: expo install @react-native-async-storage/async-storage
* NetInfo: expo install @react-native-community/netinfo