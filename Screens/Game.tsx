import { View, Text } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import React, { useLayoutEffect } from 'react'

const Game = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
  },[]);

  return (
    <View>
      <Text>Game</Text>
    </View>
  )
}

export default Game