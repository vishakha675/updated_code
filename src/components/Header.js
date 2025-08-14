import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Image source={require("../assests/appIcon.png")}style={styles.appIcon}></Image>
      </View>
     <Image source={require('../assests/dp.png')}style={styles.dp}></Image>
    </View>
  )
}

export default Header

// const styles = StyleSheet.create({
//   appIconContainer:{
//       backgroundColor:'#ffffff',
//       height:150,
//       width:100,
//       borderRadius:30,
//       padding:20,
//     marginLeft:20,
//     marginTop:20
      
//   },
//   appIcon:{
//     height:100,
//     width:50,
//     padding:20,
//     marginLeft:20,
//     marginTop:20,
//     justifyContent:'center',
//     alignItems:'center'
    
    
//   }
// })
// import { StyleSheet, Text, View, Image } from 'react-native';
// import React from 'react';

// const Header = () => {
//   return (
//     <View style={styles.headerContainer}>
//       <Image 
//         source={require('../assets/appIcon.png')} 
//         style={styles.appIcon} 
//         // resizeMode="contain"
//       />
//     </View>
//   );
// };

// export default Header;

const styles = StyleSheet.create({
  container:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'

  },
  iconCircle: {
    height: 50,
    width: 50,
    borderRadius: 25, // Makes it a perfect circle
    backgroundColor: '#f0f0f0', // Or white, depending on your UI
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12, // spacing between icon and title
  },
  appIcon: {
    height: 40,
    width: 40,
  },
  dp:{
    height:44,
    width:44,
    borderRadius:22,

  }
});
