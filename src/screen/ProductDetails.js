import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';
// import Header from '../components/Header';
// import { Header } from 'react-native/Libraries/NewAppScreen'
const imageUrl =
  "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png";
const sizes = ["S", "M", "L", "XL"];
const colorsArray = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
];


const ProductDetails = () => {
  const navigation = useNavigation();
  const {addToCart} = useContext(CartContext);
  const route = useRoute();
  const item = route.params.item;
  // console.log(route.params.item);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const  handleAddToCart = (item)=>{
      item.size = selectedSize;
      item.color = selectedColor;
      addToCart(item);
      navigation.navigate("CART")
  };

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[' rgb(199,71,138)', 'transparent']}
      style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />

      </View>
      <Image source={{ uri: item.image }} style={styles.converImage} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Winter Coat
        </Text>
        {/* <TouchableOpacity onpress={navigator.goback}> */}
        <Text style={[styles.title, styles.price]}>
          $65.9
        </Text>
        {/* </TouchableOpacity > */}
      </View>
      {/* SIZE CONTAINER */}
      <View style={styles.sizeContainer}>
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        {
          sizes.map((size,index) => {
            return (
              <TouchableOpacity
               key = {index}
               style={styles.sizeValueCorntainer}
                onPress={() => {
                  setSelectedSize(size);
                }}>
                <Text style={[styles.sizeValue,
                selectedSize == size && { color: "#E55B5B" }]
                }>{size}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <Text style={[styles.title, styles.colorText]}>Colors</Text>
      <View style={styles.colorContainer}>
        {
          colorsArray.map((color,index) => {
            return (
              <TouchableOpacity
              key = {index}
              onPress={() => {
                setSelectedColor(color);
              }} style={[styles.circleBorder,
              selectedColor == color &&
              {
                borderColor: color,
                borderWidth: 2,
              },
              ]}
              >
                <View style={[styles.circle, { backgroundColor: color }]} />
              </TouchableOpacity>
            )
          })
        }
      </View>
      {/* button container*/}
      <TouchableOpacity style={styles.button} onPress={()=>{
        handleAddToCart(item);
      }}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}
export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20
  },
  converImage: {
    width: "100%",
    height: 420,

  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20

  }, title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500"
  }, price: {
    color: "#4D4C4C"
  }, sizeText: {
    marginHorizontal: 20

  }, sizeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  }, sizeValueCorntainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,

  }, sizeValue: {
    fontSize: 18,
    fontWeight: "600"
  },
  colorText: {
    marginHorizontal: 35,
    marginTop: 10
  }, circle: {
    height: 36,
    width: 36,
    borderRadius: 18,


  }, colorContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,


  }, circleBorder: {
    // borderWidth:2,
    height: 48,
    width: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: 'center',
    marginHorizontal: 5
  },button:{
    backgroundColor:"#E96E6E",
    padding:10,
    margin:10,
    borderRadius:20
  },
  buttonText:{
    fontSize:24,
    fontWeight:'600',
    color:"white",
    textAlign:'center',
  }


})