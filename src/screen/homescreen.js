import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
// import { Header } from 'react-native/Libraries/NewAppScreen'
import Header from '../components/Header'
import { Fontisto } from '@expo/vector-icons'
import Category from '../components/Category'
import Productcard from '../components/productcard'
const categories = ["Trending Now", "All", "New", "Mens", "Woman"]

const Homescreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[' rgb(199,71,138)', 'transparent']}
      style={styles.container}>
      <Header />
      <Text style={styles.matchText}>Match Your Style</Text>
      {/* input container */}
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Fontisto name={"search"} size={20} color={'black'} style={styles.icon}></Fontisto>
        </View>
        <TextInput style={styles.textinput} placeholder='Search'></TextInput>

      </View>
      {/* category section */}
      <FlatList data={categories}
        renderItem={({ item }) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory} />
        )}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />

      {/* product List */}
      <View >
        <Productcard />
      </View>
    </LinearGradient>



  )
}

export default Homescreen

const styles = StyleSheet.create({
  container: {

    padding: 20,
  },
  matchText: {
    fontSize: 28,
    color: '#000000',
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,

    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    marginTop: 20,
  },
  textinput: {
    flex: 1,

    // borderColor:'black',
    fontSize: 16,
    marginLeft: 10,

  },
  iconContainer: {
    marginHorizontal: 20,
  }

})