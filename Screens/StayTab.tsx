import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native'
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

const StayTab = () => {
  return (
    <SafeAreaView>
        <ScrollView style={styles.scrollview}>
            <View style={styles.comtainer}>
                <Text style={{fontSize:normalize(30), fontWeight:'500', textAlign:'center'}}>IRIGA CITY</Text>
            </View>
            <View style={styles.section1}> 
                <Image style={styles.imgcontaintab} source={require('../assets/Images/Accomodation/parkview.png')} />
                <View style={styles.section2}>
                    <Text style ={[styles.texttitle, {}]}>
                        Parkview Hotel{'\n'} <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                        <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                        <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                        <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                        <Image  style={[styles.imgstar, {tintColor:'gold'}]} source={require('../assets/Images/Accomodation/starblank.png')} />
                        <Text style={{fontSize:normalize(11), fontWeight:'300'}}> (2.3k reviews)</Text>
                        {'\n'}
                        <Image style={[styles.imgloc, {}]} source={require('../assets/Images/Accomodation/location.png')} />
                        <Text style={styles.textloc}> Maninang Drive, City of Iriga</Text>           
                    </Text> 
                </View>
                               
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    scrollView:{
        marginLeft:10,
        marginRight:10,
        marginTop:40,
    },
    container:{
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
    },
    section1:{
        overflow:'hidden',
        borderRadius:34,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        margin:20,
        marginLeft:50,
        marginRight:50,
        marginBottom:10,
    },
    imgcontaintab:{
        width: normalize(250),
        height: normalize(250),
    },
    section2:{
        marginStart: '-30%',
        marginBottom:20,
    },
    texttitle:{
        fontSize: normalize(25),
        fontWeight:'500',
        
        
    },
    imgstar:{
        // position:'absolute',
        height:normalize(15),
        width:normalize(15),
    },
    imgloc:{
        alignSelf:'center',
        flex:0,
        resizeMode:'contain',
        position:'absolute',
        width: normalize(8),
        height: normalize(13),
        marginStart :300,

    },
    textloc:{
        fontSize: normalize(11),
        fontWeight: '300',

    },
  });
export default StayTab