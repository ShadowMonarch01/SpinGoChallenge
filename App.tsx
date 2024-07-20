import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Tabs from './src/screens/Tabs';

export type StackScreenProps={
  Welcome:undefined;
  Tabs:undefined;
}
const RootStack = createNativeStackNavigator<StackScreenProps>()

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
        <RootStack.Screen name="Tabs" component={Tabs} options={{
                                                                  // headerShown:false,
                                                                  headerBackVisible:false,
                                                                  title:"Home",
                                                                  headerTitleAlign:"center"
                                                              
                                                                }}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
