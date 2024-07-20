import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from './colors'

const FloatingBtn = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{fontSize:16,color:colors.textWhite}}>
        + New
      </Text>
    </TouchableOpacity>
  )
}

export default FloatingBtn

const styles = StyleSheet.create({
    container:{
        width:117,
        height:50,
        backgroundColor:colors.darkBlue,
        borderRadius:51,
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        bottom:18,
        right:10
    }
})