import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, Entypo, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// import { LinearGradient } from 'expo-linear-gradient';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import MaterialDesignIcons from '@expo/vector-icons/MaterialDesignIcons'
import Homescreen from './src/screen/homescreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from './src/screen/ProductDetails';
import CartScreen from './src/screen/CartScreen';
import { CartContext, CartProvider } from './src/context/CartContext';
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
    <Stack.Navigator screenOptions={{
      headerShown:false,
    }}
    // initialRouteName=""
    >
      <Stack.Screen name="Home" component={Homescreen}/>
      {/* <Stack.Screen name="Home" component={Homescreen}/> */}
      <Stack.Screen name = "PRODUCT_DETAILS" component={ProductDetails}/>
      
    </Stack.Navigator>
  );
};

const App = () => {
  return (
   <CartProvider>

   
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'blue'
        }}
        initialRouteName='CART'>
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
        <Tab.Screen name='CART'
         component={CartScreen} 
         options={{
          tabBarIcon: ({ size, focused, color }) => {
            const {carts} = useContext(CartContext);
           
            return(
              <View style={{position:'relative'}}>
                <MaterialCommunityIcons
                name={"cart"}
                size={size}
                color={color}
                />
                <View style={{
                  height:14,
                  width:14,
                  borderRadius:7,
                  backgroundColor:color,
                  justifyContent:'center',
                  alignItems:'center',
                  position:'absolute',
                  top:-10,
                  right:-5,

                }}>
                  <Text style={{
                    fontSize:10,
                    color:"white",
                    fontWeight:"500"
                  }}
                  >
                    {carts?.length}
                    </Text>
                </View>
                </View>
              
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
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})