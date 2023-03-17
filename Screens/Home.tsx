import { View, Text, Button, Image, StyleSheet, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import * as Animatable from 'react-native-animatable';
import { BrokenHeart, Visit_Camsur, Food, Gamehover, Tour, Accomodations, Home } from '../assets';


import BottomButtons from '../Components/BottomButtons.';

const Favorite = () => {

    const navigation = useNavigation();
    
    // for the header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    },[]);


  return (
    
    <SafeAreaView style ={{flex: 1}}>
        <View style={styles.containerMain}>
            <View className="items-center justify-center" >
                {/* {Broken heart container} */}
                <View className="flex-1 relative items-center justify-center ">
                    <Image 
                    style={styles.image}
                    //className="w-full h-full object-cover"
                    source={Home}
                    />
                </View>
                
            {/* {Bottom Buttons for navigation} */}
            </View>
            <View className=" flex-row items-center justify-center " >
                <View >
                    <Button
                        onPress={() => navigation.navigate("SignIn")}
                        title="test button"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
            
            {/* <View style={styles.bottomView}>
                    <BottomButtons/>
            </View> */}
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    bottomView: {
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute', 
          bottom: 20, 
    },
    image: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginTop: 100,
    },
  });

export default Favorite