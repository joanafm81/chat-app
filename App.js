import { StyleSheet } from 'react-native';

//Import the screens
import Start from './components/Start';
import Chat from './components/Chat';

//Import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
