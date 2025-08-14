import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons,Entypo,Feather,MaterialIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from 'react-native/Libraries/NewAppScreen';
// import MaterialDesignIcons from '@expo/vector-icons/MaterialDesignIcons'
import Homescreen from './src/screen/homescreen'
const Tab = createBottomTabNavigator();
function Home(){
  return(
    <View>
      <Text>Home</Text>
     {/* </LinearGradient> */}
      
      

    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:'blue'
       }}>
        <Tab.Screen name='HOME'component={Home}options={{tabBarIcon:({size,focused,color})=>{
          return(
            // <Text>Icon</Text>
      <Ionicons name='home' size={size} color={color} />

          )
        }}}></Tab.Screen>
        <Tab.Screen name='REORDER'component={Home} options={{tabBarIcon:({size,focused,color})=>{
          return(
            <Entypo name='menu'size={size} color={color}/>
          )
        }}}></Tab.Screen>
        <Tab.Screen name='CART'component={Homescreen} options={{tabBarIcon:({size,focused ,color})=>{
          return(
            <Feather name = "shopping-cart" size={size} color = {color}/>
          )
        }}}></Tab.Screen>
        <Tab.Screen name='ACCOUNT'component={Home} options={{tabBarIcon:({size,focused,color})=>{
          return(
            <MaterialIcons name='account-circle'size={size}color={color}></MaterialIcons>
          )
        }}}
          
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})