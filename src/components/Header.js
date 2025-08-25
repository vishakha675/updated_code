import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Header = ({isCart}) => {
  const navigation =useNavigation();
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate("HOME_STACK")}
    style={styles.container}>
      <View style={styles.iconCircle}>
        {
          isCart?(<Ionicons name ={"chevron-back"}
          color={"#E96E6E"} size={24}/>)
          :(
          <Image 
        source={require("../assests/appIcon.png")}
        style={styles.appIcon}></Image>
        )}
        
      </View>
      {
        isCart && <Text style={styles.myCart}>My Cart</Text>
      }
      
     <Image source={require('../assests/dp.png')}style={styles.dp}></Image>
    </TouchableOpacity>
  )
}

export default Header
const styles = StyleSheet.create({
  container:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'

  },
  iconCircle: {
    height: 50,
    width: 50,
    borderRadius: 25, // Makes it a perfect circle
    backgroundColor: '#f0f0f0', // Or white, depending on your UI
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12, // spacing between icon and title
  },
  appIcon: {
    height: 40,
    width: 40,
  },
  dp:{
    height:44,
    width:44,
    borderRadius:22,

  },myCart:{
    fontSize:28,
    color:'black',
    fontWeight:600

  }
});
