import React from 'react';
import {

  StyleSheet,
  View,
  Text,
  TouchableOpacity,

} from 'react-native';
import Icon from "react-native-vector-icons/dist/FontAwesome"

const ListItem = ({item, deleteItem}) => {
  return( 
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style= {styles.listItemText}>{item.text}</Text>
            <Icon onPress={() => deleteItem(item.id) } name="check" size={20} color="green" />
        </View> 
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
 listItem: {
     padding: 15,
     backgroundColor: "#f8f8f8",
     borderBottomWidth: 1,
     borderColor: "#eee"
 },
 listItemView: {
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center"
 },
 listItemText: {
     fontSize: 18,
     color: "#019031" ,
 },
})

export default ListItem;
