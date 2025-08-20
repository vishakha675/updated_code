import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from 'react-native/Libraries/NewAppScreen';
// import MaterialDesignIcons from '@expo/vector-icons/MaterialDesignIcons'
import Homescreen from './src/screen/homescreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './src/screen/productDetails';
// import ProductDetails from './src/screen/productDetails';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <View>
      <Text>Home</Text>
     



    </View>
  )
}
const MyHomeStack = ()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen}/>
      {/* <Stack.Screen name="Home" component={Homescreen}/> */}
      <Stack.Screen name = "PRODUCT_DETAILES" component={ProductDetails}/>
      
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'blue'
        }}>
        <Tab.Screen
         name='HOME_STACK' 
         component={MyHomeStack} 
         options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Ionicons name='home' size={size} color={color} />

            )
          }
        }}></Tab.Screen>
        <Tab.Screen name='REORDER' component={Home} options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Entypo name='menu' size={size} color={color} />
            )
          }
        }}></Tab.Screen>
        <Tab.Screen name='CART' component={Homescreen} options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Feather name="shopping-cart" size={size} color={color} />
            )
          }
        }}></Tab.Screen>
        <Tab.Screen name='ACCOUNT' component={Home} options={{
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaterialIcons name='account-circle' size={size} color={color}></MaterialIcons>
            )
          }
        }}

        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})