import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import React, { useLayoutEffect } from 'react'

const SignIn = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
  },[]);
  
  return (
    <View>
      <Text>SignIn</Text>
    </View>
  )
}

export default SignIn