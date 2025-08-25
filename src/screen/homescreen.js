import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
// import { Header } from 'react-native/Libraries/NewAppScreen'
import Header from '../components/Header'
import { Fontisto } from '@expo/vector-icons'
import Category from '../components/Category'
import Productcard from '../components/Productcard';
import data from "../data/data.json";
const categories = ["Trending Now", "All", "New", "Mens", "Woman"]

const Homescreen = () => {
  const [products,setProducts]= useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const handleLiked = (item)=>{
    const newProduct = products.map((prod)=>{
      if(prod.id === item.id){
        return{
          ...prod,
          isLiked:true,
        };
      }
      return prod;
    });
    setProducts(newProduct);
  }
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[' rgba(87, 5, 48, 1)', 'transparent']}
      style={styles.container}>
      <Header />
        <FlatList
        numColumns={2}
        ListHeaderComponent={
          <>
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
          </>
        }
        data={products}
        renderItem={({item,index})=>(
        <Productcard
      item={item} handleLiked={handleLiked}/>)}
        showsVerticalScrollIndicator={false}
         keyExtractor={(item)=>item.id}
        contentContainerStyle={{
          paddingBottom:150,

        }}
        />
      
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