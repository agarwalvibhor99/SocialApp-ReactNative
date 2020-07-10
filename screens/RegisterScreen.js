import React, {useState} from "react"

import {View, Text, StyleSheet} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import * as firebase from "firebase"
const RegisterScreen = ({navigation}) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        errorMessage: null
    })
    const {name, email, password, errorMessage} = user
  
    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: name
            })
        })
        .catch(function(error) {

            setUser({...user, errorMessage:error.message});
         });
    }

    return(
        <View style = {styles.container}>
                <Text style={styles.greeting}>{"Hello!\nSign up to get started"}</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            {/* <View style={styles.errorMessage}>
                {errorMessage}? <Text style={styles.error}>{errorMessage}</Text> : ""
            </View> */}

            <View style={styles.form}>
                <View>
                    <Text style = {styles.inputTitle}>Full Name</Text>
                    <TextInput value={name} onChangeText={(text) => setUser({...user, name:text})} style={styles.input} autoCapitalize="none"></TextInput>    
                </View>
                <View style={{marginTop:32}}>
                    <Text style = {styles.inputTitle}>Email Address</Text>
                    <TextInput value={email} onChangeText={(text) => setUser({...user, email:text})} style={styles.input} autoCapitalize="none"></TextInput>    
                </View>
                <View style={{marginTop:32}}>
                    <Text style = {styles.inputTitle}>Password</Text>
                    <TextInput value={password} onChangeText={(text) => setUser({...user, password:text})}style={styles.input} secureTextEntry autoCapitalize="none"></TextInput>    
                </View>
            </View>

            <TouchableOpacity onPress={handleSignUp} style={styles.btn}>
                <Text style={{color: "#FFF", fontWeight:"600"}}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{alignSelf:"center", marginTop: 32}} onPress = {() => navigation.navigate("Login")}>
                <Text style={{color: "#414959", fontSize: 13}}>Already have an account <Text style={{color: "#E9446A", fontWeight:"500"}}>Login Here</Text>
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

export default RegisterScreen
 