import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StackScreenProps } from '../../App'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dummy from './TabScreens/Dummy'
import Home from './TabScreens/Home'
import { colors } from '../components/colors'

export type RootTabProps ={
    Home:undefined;
    List:undefined;
    Tags:undefined;
    Dates:undefined;
    Stats:undefined;
}
const RootTabs = createBottomTabNavigator<RootTabProps>()

type Props = NativeStackScreenProps<StackScreenProps,"Tabs">


// Import your images
const homeIcon = require('../../assets/homed1.png');
const listIcon = require('../../assets/drawer1.png');
const tagsIcon = require('../../assets/ticket1.png');
const datesIcon = require('../../assets/calculator1.png');
const statsIcon = require('../../assets/statusup1.png');

type TabIconProps ={
  iconSource: any;
  isActive: boolean;
  activeTintColor: string;
  inactiveTintColor: string;
}
const TabIcon = ({iconSource, isActive,activeTintColor,inactiveTintColor}:TabIconProps) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={iconSource}
        style={[
          styles.icon,
          { tintColor: isActive ? activeTintColor : inactiveTintColor }
        ]}
      />
      {isActive && <View style={styles.activeIndicator} />}
    </View>
  );
};


const Tabs = ({navigation}:Props) => {
  return (
    <RootTabs.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel:false,
      tabBarIcon: ({ color, size,focused }) => {
        let iconSource;

        switch (route.name) {
          case 'Home':
            iconSource = homeIcon;
            break;
          case 'List':
            iconSource = listIcon;
            break;
          case 'Tags':
            iconSource = tagsIcon;
            break;
          case 'Dates':
            iconSource = datesIcon;
            break;
          case 'Stats':
            iconSource = statsIcon;
            break;
          default:
            iconSource = homeIcon; // default icon if route name does not match any case
            break;
        }

        return (
          <TabIcon
            iconSource={iconSource}
            isActive={focused}
            activeTintColor={colors.darkBlue}
            inactiveTintColor="gray"
          />
        );
      },
      tabBarActiveTintColor: colors.darkBlue,
      tabBarInactiveTintColor: 'gray',
      
    })}
    >
        <RootTabs.Screen name="Home" component={Dummy}/>
        <RootTabs.Screen name="List" component={Home}/>
        <RootTabs.Screen name="Tags" component={Dummy}/>
        <RootTabs.Screen name="Dates" component={Dummy}/>
        <RootTabs.Screen name="Stats" component={Dummy}/>
    </RootTabs.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
    gap:2
  },
  icon: {
    width: 24,
    height: 24,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.darkBlue,
    // position: 'absolute',
    // bottom: -4,
  },
})