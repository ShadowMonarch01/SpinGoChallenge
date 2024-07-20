import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Dummy = () => {
  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
      <TouchableOpacity onPress={() => Linking.openURL('https://devcypher.vercel.app/')}>
        <Text style={{color: 'blue'}}>
          Click to Visit DevCypher
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Dummy

const styles = StyleSheet.create({})