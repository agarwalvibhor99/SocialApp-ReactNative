/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { 
  StyleSheet,
  View,
  FlatList,
  Alert,
} from 'react-native';
import Header from "./Header"
import ListItem from "./ListItem"
import { v4 as uuidv4 } from 'uuid'
import AddItem from './AddItem';


const ToDoList = () =>{

  const[items, setItems] = useState([
    {id: uuidv4(), text: "CMPSC465 HW"},
    {id: uuidv4(), text: "CMPSC473 HW"},
    {id: uuidv4(), text: "CMPSC461 HW"},
    {id: uuidv4(), text: "CMPSC311 HW"}
  ])

  const deleteItem = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if(!text){
      Alert.alert("Error", "Please enter a Todo", {text: "OK"})
    }
    else{
      setItems(prevItems => {
        return[{id: uuidv4(), text }, ...prevItems]
      })
    }
  }

  return(
    <View style = {styles.container}>
      <Header title="ToDo List"/>
      <AddItem addItem = {addItem} />
      <FlatList data = {items} renderItem = {({item}) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {   
    flex: 1, 
    paddingTop: 60
  },
})

export default ToDoList;
