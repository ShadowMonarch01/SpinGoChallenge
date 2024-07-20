import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import SplashImg from '../../assets/spinimg.svg'
import { StatusBar } from 'expo-status-bar'
import { ScreenHeight, ScreenWidth } from '../components/Responsive'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import * as Progress from 'react-native-progress';
import DymButton from '../components/DymButton'
import { StackScreenProps } from '../../App'

type Props = NativeStackScreenProps<StackScreenProps,"Welcome">

const Welcome = ({navigation}:Props) => {

    
  return (
    <View style={styles.container}>



      <View style={styles.imageContainer}>
        <SplashImg
            height={"100%"}
            width={ScreenWidth}
            style={{padding:0, margin:0}}
        />

       {/* Bar View  */}
        <View style={styles.barContainer}>
            <Progress.Bar 
                progress={0.3} 
                width={(ScreenWidth-76)} 
                height={8} unfilledColor='#fff'
                borderWidth={0}
            />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        
        <View>
            <View style={{flexDirection:"row"}}>
                <View style={{width:139, height:144, 
                    // backgroundColor:"yellow"
                    }}>
                    <Text style={styles.bgTxtColor}>01</Text>
                </View>

                <View style={{flex:1, justifyContent:"center"}}>
                    <Text style={{fontSize:16}}>
                        Welcome to <Text style={{fontSize:14, color:"#00A6FB", fontWeight:"700"}}>SPINGO! </Text>Your{`\n`} ultimate Business Companion.
                    </Text>
                </View>
            </View>

            <Text style={{fontSize:14, color:"#3B3B3B"}}>
                Streamline your business operations and maximize efficiency with our all-in-one platform.
            </Text>
        </View>

        <View style={styles.buttonsContainer}>
            <DymButton
                text='Home'
                addColor={true}
                onPress={()=>navigation.navigate("Tabs")}
            />

            <DymButton
                text='Sign up'
            />
        </View>

      </View>


      
      <StatusBar  />
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    imageContainer:{
        width:ScreenWidth,
        height:"50%",
        backgroundColor:"yellow"
    },
    barContainer:{
        width:"80%",
        height:20,
        alignSelf:"center",
        position:"absolute",
        bottom:1
    },
    bottomContainer:{
        flex:1, 
        paddingHorizontal:10,
        paddingVertical:5, 
        justifyContent:"space-between"
    },
    bgTxtColor:{
        fontSize:114, 
        fontWeight:"700",
        color:"#80808059"
    },
    buttonsContainer:{
        flexDirection:"column", 
        alignItems:"center", 
        gap:6, marginVertical:20,
    }
})