import React, {useState, useEffect} from "react"

import {View, Text, StyleSheet, ActivityIndicator} from "react-native"
import * as firebase from "firebase"
const LoadingScreen = ({ navigation }) => {

    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState()

    const onAuthStateChanged = (user) => {
        setUser(user)
        navigation.navigate(user ? "App" : "Auth")
    }
    
    useEffect(()=>{
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber
    }, [])

    if(initializing) return null


    return(
        <View style = {styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default LoadingScreen
