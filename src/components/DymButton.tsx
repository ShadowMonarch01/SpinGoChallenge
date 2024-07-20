import { GestureResponderEvent, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from './colors'

type BouttoProps={
    onPress?:((event: GestureResponderEvent) => void) | undefined
    text:string,
    addColor?:boolean
}

const DymButton = ({onPress, text, addColor = false}:BouttoProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container,{backgroundColor: addColor? colors.darkBlue:"#fff"}]}>
      <Text style={{fontSize:16, color:addColor?"#fff":colors.darkBlue}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default DymButton

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:colors.darkBlue,
        width:325,
        height:50,
        borderRadius:51,
        alignItems:"center",
        justifyContent:"center"
    }
})