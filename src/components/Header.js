import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <View>
        <Image source={require("../assests/dp.png")}></Image>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})