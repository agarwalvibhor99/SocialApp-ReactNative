import React, {useState} from "react"

import {View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, LayoutAnimation} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import * as firebase from "firebase"
const LoginScreen = ({ navigation }) => {
    
    // static navigationOptions = {
    //     header = null
    // }
    
    const [user, setUser] = useState({
        email: "",
        password: "",
        errorMessage: null
    })
    const {email, password, errorMessage} = user
  
    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

             setUser({errorMessage:error.message});
          });
          console.log(JSON.stringify(user))
    }
    

    return(
        <View style = {styles.container}>
            
            <Text style={styles.greeting}>{"Hello Again.\nWelcome Back"}</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            {/* <View style={styles.errorMessage}>
                {errorMessage}? <Text style={styles.error}>{errorMessage}</Text> : ""
            </View> */}

            <View style={styles.form}>
                <View>
                    <Text style = {styles.inputTitle}>Email Address</Text>
                    <TextInput value={email} onChangeText={(text) => setUser({...user, email:text})} style={styles.input} autoCapitalize="none"></TextInput>    
                </View>
                <View style={{marginTop:32}}>
                    <Text style = {styles.inputTitle}>Password</Text>
                    <TextInput value={password} onChangeText={(text) => setUser({...user, password:text})}style={styles.input} secureTextEntry autoCapitalize="none"></TextInput>    
                </View>
            </View>

            <TouchableOpacity onPress={handleLogin} style={styles.btn}>
                <Text style={{color: "#FFF", fontWeight:"600"}}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center", marginTop: 32}} onPress = {() => navigation.navigate("Register")}>
                <Text style={{color: "#414959", fontSize: 13}}>New to SocialApp? <Text style={{color: "#E9446A", fontWeight:"500"}}>Sign Up</Text>
                </Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "#8A8F9E", 
        fontSize: 19,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
    },
    btn: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default LoginScreen
 