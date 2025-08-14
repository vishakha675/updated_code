import { StyleSheet, Text, View } from 'react-native'
import  LinearGradient from 'expo-linear-gradient'
import React from 'react'
// import { Header } from 'react-native/Libraries/NewAppScreen'
import Header from '../components/Header'

const Homescreen = () => {
  return (
    <LinearGradient
        // Background Linear Gradient
        colors={[' rgb(199,71,138)', 'transparent']}
        style={styles.container}>
           <Header/>
        </LinearGradient>
       
      
      
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})