import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'

import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
export default StayItem = ({ item }) => {
    return (
        <View style={[styles.container, {}]}>
          <View style={styles.imgcontainer}>
            <Image source={item.image} style={[styles.image, { resizeMode: 'contain'}]}/>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={item.btn} style={[styles.imgshow, { resizeMode: 'center'}]}/>
          </View>
            {/* <View style={{flex:0.3, borderRadius:34,}}>
            </View> */}
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginRight:10,
      justifyContent:'flex-start',
      alignSelf: 'flex-start',
    },
    imgcontainer:{
      overflow:'hidden',
      borderRadius:34,
      justifyContent:'flex-start',
      backgroundColor: 'whitesmoke',
    },
    image:{
      flex:1,
      justifyContent:'flex-start',
      alignSelf:'flex-start',
      width:normalize(130),
      height:normalize(130),
    },
    title: {
      marginLeft:10,
      textAlign:'left',
      fontWeight: '800',
      fontSize:normalize(14),
    },
    imgshow:{
      marginStart:'75%',
      borderRadius:34,
      width: normalize(30),
      height: normalize(30),
  },
});