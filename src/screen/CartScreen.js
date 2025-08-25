import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../components/Header'
import CartCard from '../components/CartCard'
import { FlatList } from 'react-native'
import { CartContext } from '../context/CartContext'

const CartScreen = () => {
  const{carts,totalPrice,deleteItemFromCart} = useContext(CartContext)
  return (
    <LinearGradient
        colors={[' rgb(199,71,138)', 'transparent']}
      style={styles.container}>
        <View style={styles.headerContainer}>
                <Header isCart={true}/>
        </View>
      
         <FlatList
          data={carts} 
         ListHeaderComponent={
         <>
         </>}
          renderItem={({item})=><CartCard item={item} deleteItemFromCart={deleteItemFromCart}/>}
          ListFooterComponent={
          <>
          </>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle = {{
            paddingBottom:10
          }}
          />
          <View style={styles.priceContainer}>
            <View style={styles.priceAndTitle}>
               <Text style={styles.text}>Total:</Text>
               <Text style={styles.text}>${totalPrice}:</Text>
            </View>
            <View style={styles.priceAndTitle}>
              <Text style={styles.text}>Shopping:</Text>
              <Text style={styles.text}>$0.0:</Text>
            </View>
           </View>
           <View style={styles.divider}/>
           <View style={styles.priceAndTitle}>
               <Text style={styles.text}>Grand Total:</Text>
               <Text style={[styles.text,{color:"black",
                fontWeight:'700'
               }]}>${totalPrice}:
               </Text>
            </View>
            <TouchableOpacity style={styles.checkoutContainer}>
              <Text style={styles.buttonText}>
                Checkout
              </Text>
            </TouchableOpacity>
    </LinearGradient>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    headerContainer:{
            marginBottom:20,
    },
    container:{
        flex:1,
        padding:15,
    },
    priceContainer:{
        marginTop:40
    },
    priceAndTitle:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:20,
      marginVertical:10,
    },
    text:{
      color:'#757575',
      fontSize:18,
    },
    divider:{
      borderWidth:1,
      borderColor:"#C0C0C0",
      marginVertical:10
    },
    checkoutContainer:{
      backgroundColor:'#E96E6E',
      width:"100%",
      marginVertical:10,
      borderRadius:10
    },
    buttonText:{
      fontSize:25,
      color:'white',
      textAlign:'center',
      padding:10,
    }
})