import { GestureResponderEvent, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FoodImg from '../../assets/foodicn.svg'
import { Entypo } from '@expo/vector-icons';
import { colors } from './colors';

export type CardProps={
  onPress?:((event: GestureResponderEvent) => void) | undefined;
  price?:string|number;
  Name?:string;
  brandName?:string;
  multipleBrand?:boolean;
  source?: ImageSourcePropType | undefined
}

const Card = ({onPress, price, Name,source,brandName,multipleBrand=false}:CardProps) => { 
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={source} 
        style={styles.image}
      />
      {/* </View> */}
      
      <View style={styles.contentContainer}>
        {/* icon, Name and price  */}
        <View style={{gap:6,}}>
          {/* Row */}
          <View style={styles.row}>
            <FoodImg/>
            <Text 
              style={{color:colors.darkBlue,textDecorationLine:"underline", width:84}}
              numberOfLines={1}   
            >{Name}</Text>
          </View>
          {/* Row */}
          <View style={styles.row}>
            <Text style={{color:"#969696"}}>per piece</Text>
            <Text 
              numberOfLines={1} 
              style={{maxWidth:70}}>
                ₦ {price}</Text>
          </View>
        </View>
        {/* Brand */}
        <View style={[styles.brandStyle,{backgroundColor:multipleBrand? colors.lightGray:colors.lightBlue}]}>
          <Text 
            numberOfLines={1}
            style={{fontSize:12}}
          >{brandName}</Text>
        </View>
        {/* Options Btn */}
        <TouchableOpacity onPress={onPress}>
          <Entypo 
            name="dots-three-vertical" 
            size={24} color="black" 
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        height:124,
        backgroundColor:"white",
        marginHorizontal:5,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10,
        marginBottom:5
    },
    image:{
      width:80,
      height:80,
      borderRadius:200,
      backgroundColor:"#c0c0c0"
    },
    contentContainer:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:10
      // backgroundColor:"green",
      
    },
    row:{
      flexDirection:"row",
      gap:6,
    },
    brandStyle:{
      width:103,
      height:24,
      borderRadius:10,
      paddingHorizontal:6,
      alignItems:"center",
      justifyContent:"center"
    }
})