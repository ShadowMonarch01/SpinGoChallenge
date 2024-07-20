import { GestureResponderEvent, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from './colors'

type StocksCardProps={
    onPress?:((event: GestureResponderEvent) => void) | null | undefined;
    text:string;
    isActive?:boolean;

}
const StocksCard = ({onPress, text, isActive=false}:StocksCardProps) => {
  return (
    <Pressable 
        onPress={onPress} style={[styles.container,{backgroundColor: isActive?colors.lightBlue:colors.darkBlue}]}
    >
      <Text style={{fontSize:14,color:isActive?colors.darkBlue:colors.textWhite}}>{text}</Text>
    </Pressable>
  )
}

export default StocksCard

const styles = StyleSheet.create({
    container:{
        marginLeft:5,
        width:120,
        height:43,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.darkBlue
    }
})