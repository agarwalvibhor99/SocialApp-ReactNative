import {createAppContainer, createSwitchNavigator} from "react-navigation" 
import {createStackNavigator} from "react-navigation-stack"
import "react-native-gesture-handler"
import LoadingScreen from "./screens/LoadingScreen"
import HomeScreen from "./screens/HomeScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"

import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyB24zlq3spE4mweNosldx0WnaNeCzIEUDs",
    authDomain: "react-todo-app-2c555.firebaseapp.com",
    databaseURL: "https://react-todo-app-2c555.firebaseio.com",
    projectId : "react-todo-app-2c555",
    storageBucket: "react-todo-app-2c555.appspot.com",
    messagingSenderId: "788368285201",
    appId: "1:788368285201:web:dbc8b16c1efd4322395bb0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const AppStack = createStackNavigator({
      Home: HomeScreen
  })

  const AuthStack = createStackNavigator({
      Login: LoginScreen,
      Register: RegisterScreen
  })
  
  export default createAppContainer (
      createSwitchNavigator(
          {
              Loading: LoadingScreen,
              App: AppStack,
              Auth: AuthStack
          },
          {
              initialRouteName: "Loading"
          }
      )
  )