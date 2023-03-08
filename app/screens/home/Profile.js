import { StyleSheet,View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function Profile({navigation}) {
    const route = useRoute();
  return (
    <View>
      <Text>Name :</Text>
    </View>
  )
}

const styles = StyleSheet.create({})