import { StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Productcard = ({ item, handleLiked }) => {
  const navigation = useNavigation();

  // const[isLiked,setLiked]=useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("PRODUCT_DETAILS");
        }}
        style={styles.container}
      >
        <Image source={{ uri: item.image }}
          style={styles.coverImage}></Image>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>

        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          handleLiked(item)}
        style={styles.heartContainer}>
        {
          item?.isLiked ? (
            <AntDesign name={'heart'}
              size={20}
              color={'#E55B5B'}
            ></AntDesign>
          ) : (
            <AntDesign name={'hearto'}
              size={20}
              color={'#E55B5B'}
            ></AntDesign>)
        }


      </TouchableOpacity>


    </View>
  );
};
     




export default Productcard

const styles = StyleSheet.create({
  container: {
    margin: 5, // Gap between cards
    // shadowOffset: { width: 0, height: 2 },

    flex: 1, position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    marginTop: 20,



  },
  coverImage: {
    height: windowHeight/3.5,
    borderRadius: 20,
    width: windowWidth/2.7,
    marginRight: 10,
    marginVertical: 10,
    marginLeft: 10,


  },
  title: {
    fontSize: 18,
    color: '#444444',
    fontWeight: '600'

  },
  price: {
    fontSize: 18,
    color: '#9C9C9C',
    fontWeight: '600'
  },
  content: {
    paddingHorizontal: 15,
  },
  heartContainer: {
    height: windowHeight/28,
    width: windowWidth/13,
    backgroundColor: '#FFFFFF',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 17,
    position: 'absolute',
    top: 30,
    right: 20,
  }
})