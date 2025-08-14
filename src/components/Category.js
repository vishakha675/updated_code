import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({item,selectedCategory,setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedCategory(item)}>
      <Text
       style={[
        styles.categoryText,
    selectedCategory === item && styles.selectedCategory,
    
]}
>
    {item}</Text>
    </TouchableOpacity>
  )
}

export default Category

const styles = StyleSheet.create({
    categoryText:{
        fontSize:16,
        fontWeight:'600',
        color:"#FFFFFF",
        // backgroundColor:'#E96E6E',
        backgroundColor:'#DFDCDC',
        paddingVertical:10,
        textAlign:'center',
        borderRadius:16,
        marginHorizontal:10,
        paddingHorizontal:20
    },
    selectedCategory:{
        color:'#FFFFFF',
        backgroundColor:'#E96E6E'
    }
})