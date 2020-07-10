import React from 'react';
import {

  StyleSheet,
  View,
  Text,
} from 'react-native';

const Header = ({title}) => {
  return(
    <View style = {styles.header}>
      <Text style= {styles.text}>{title }</Text>
    </View>
  )
}

Header.defaultProps = {
    title: "ToDo List"
}


const styles = StyleSheet.create({
  header: {   
    height: 70, 
    padding: 15,
    backgroundColor: "#192A56"
  },
  text: {
      color: "#2475B0",
      fontSize: 35,
      textAlign: "center",
  },
})

export default Header;
