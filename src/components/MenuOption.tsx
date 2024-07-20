import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type MenuOptionProps={
    source?: ImageSourcePropType | undefined;
    text?:string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const MenuOption = ({source, text, onPress}:MenuOptionProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={source}/>
      <Text style={{fontSize:14}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MenuOption

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:4,
        alignItems:"center"
    }
})