//Import the screens
import Start from './components/Start';
import Chat from './components/Chat';

//Import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";


const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAzXRF5gPu8dK6GTr_cfWm6EwiBLoaHg_o",
    authDomain: "chat-app-6c198.firebaseapp.com",
    projectId: "chat-app-6c198",
    storageBucket: "chat-app-6c198.appspot.com",
    messagingSenderId: "699830998597",
    appId: "1:699830998597:web:22e5c1d162c2dc9f45352c"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  //Initialize storage handler
  const storage = getStorage(app);

  //Define a new state that represents the network connectivity status
  const connectionStatus = useNetInfo();

  //useEffect() code that will display an alert popup if connection is lost
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat">
          {props => <Chat
            isConnected={connectionStatus.isConnected}
            db={db}
            storage={storage}
            {...props}
          />}
        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
