import { View, Text, Button, Image, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { BrokenHeart, Visit_Camsur ,Home} from '../assets';

// import TabNavigatorButton from '../Components/TabNavigator';
import Suggestions from '../Screens/Suggestions';

const Favorite = () => {

    const navigation = useNavigation();
    
    // for the header
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: false,
    //     })
    // },[]);


  return (
    <SafeAreaView style ={{flex: 1}}>
        <View style={styles.containerMain}>
            <View className="items-center justify-center" >
                {/* {Broken heart container} */}
                <View className="flex-1 relative items-center justify-center ">
                    <Image 
                    style={styles.image}
                    //className="w-full h-full object-cover"
                    source={BrokenHeart}
                    />
                </View>
                
            {/* {Bottom Buttons for navigation} */}
            </View>
            <View style={styles.middleContent} >
                <View >
                    <Text style={styles.text1}>
                        Looks like you don't have any Favorites yet
                    </Text>
                    <Text style={styles.text2}>
                        Browse our suggestions to find your favorites
                    </Text>
                    <View style={styles.borderRad}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Suggestion")}>
                            <Text style={styles.text3} >Suggestions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            {/* <View style={styles.bottomView}>
                    {/* <TabNavigatorButton/> }
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
        flex: 1,
        width: '100%',
        height: '1%',
    },
    middleContent:
    {
        marginTop:"70%",
    },
    image: {
        flex: 0,
        resizeMode: 'contain',
        width: 150,
        height: 150,
        alignSelf: 'center',
        position: 'absolute',
        top:60,
    }, 
    text1:
    {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center",
        width: "80%",
        justifyContent: "center",
        alignSelf: 'center',
        padding: 10,
    },
    text2:
    {
        fontSize: 11,
        width: "40%",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: 'center',
        padding: 10,
    },
    text3:
    {
        color:"white",
        fontSize: 16,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: 'center',
    },
    borderRad:
    {
        width: "70%",
        backgroundColor:"black",
        borderWidth: 5,
        borderRadius: 10,
        padding: 5,
        justifyContent: "center",
        alignSelf: 'center',
        marginTop:10,
    },
  });

export default Favorite