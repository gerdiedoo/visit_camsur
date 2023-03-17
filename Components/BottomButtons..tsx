import { View, Text, Button, Image, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import * as Animatable from 'react-native-animatable';
import { BrokenHeart, Visit_Camsur, Food, Gamehover, Tour, Accomodations, Home } from '../assets';
import Game from '../Screens/Game';

const BottomButtons = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.menuContainer}>
        <View className="flex-1 relative items-center justify-center " style={styles.menuButtons}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image 
              style={styles.image}
              //className="w-full h-full object-cover"
              source={Home}
              />
            </TouchableOpacity>
        </View>
        <View className="flex-1 relative items-center justify-center " style={styles.menuButtons}>
            <TouchableOpacity onPress={() => navigation.navigate("Game")}>
              <Image 
              style={styles.image}
              //className="w-full h-full object-cover"
              source={Gamehover}
              />
            </TouchableOpacity>
        </View><View className="flex-1 relative items-center justify-center " style={styles.menuButtons}>
            <TouchableOpacity onPress={() => navigation.navigate("Stay")}>
              <Image 
              style={styles.image}
              //className="w-full h-full object-cover"
              source={Accomodations}
              />
            </TouchableOpacity>
        </View><View className="flex-1 relative items-center justify-center " style={styles.menuButtons}>
            <TouchableOpacity onPress={() => navigation.navigate("Food")}>
              <Image 
              style={styles.image}
              //className="w-full h-full object-cover"
              source={Food}
              />
            </TouchableOpacity>
        </View><View className="flex-1 relative items-center justify-center " style={styles.menuButtons}>
            <TouchableOpacity onPress={() => navigation.navigate("Tour")}>
              <Image 
              style={styles.image}
              //className="w-full h-full object-cover"
              source={Tour}
              />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
      resizeMode: 'contain',
      width: 30,
      height: 30,
      alignSelf: 'center',
      //marginTop: 100,
  },
  menuContainer: {
      flex: 1,
      // justifyContent: 'flex-end',
      // position: 'absolute',
      // marginTop: "112%",
      marginEnd: "6%",
      marginStart: "6%",
      flexDirection: "row",
      justifyContent: "space-evenly",
  },
  menuButtons: {
      marginEnd: "6%",
      marginStart: "6%",
  } 
});
export default BottomButtons