import { View, Text, Button, Image, StyleSheet, SafeAreaView } from 'react-native'
import BottomButtons from '../Components/BottomButtons';
import { useNavigation } from "@react-navigation/native"
import React, { useLayoutEffect } from 'react'

const Food = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
  },[]);

  return (
    <SafeAreaView style ={{flex: 1}}>
      <View style={styles.containerMain}>
          <Text>FOOD</Text>
          
          {/* <View style={styles.bottomView}>
                  <BottomButtons/>
          </View> */}
      </View>
  </SafeAreaView>
  );
};

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
});

export default Food