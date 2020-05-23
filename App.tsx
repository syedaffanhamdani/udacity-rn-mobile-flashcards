import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { white, purple } from './theme/ColorPallete'
import { Feather, Ionicons } from "@expo/vector-icons";
import { AddCardScreen, AddDeckScreen, DeckDetailsScreen, DecksScreen, QuizScreen } from './components'
import { createAppContainer } from 'react-navigation'
import { ScreenContainer } from './components/common/ScreenContainer';

const Tabs = createBottomTabNavigator()



export default function App() {

  return (
  <NavigationContainer>
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={DecksScreen} />
      <Tabs.Screen name="AddDeck" component={AddDeckScreen} />
    </Tabs.Navigator>
  </NavigationContainer>






    /* 

    <Text>Master List Screen</Text>
     <Button
       title="React Native by Example"
       onPress={() =>
         console.log("pressed")
       }
     />
     <Button
       title="React Native School"
       onPress={() =>
         console.log("pressed")
       }
     />
 */
  );
}



