import React from 'react'
import { Text, View, TextInput,StyleSheet } from 'react-native'
import {white,gray} from '../theme/ColorPallete'
import {MyAppDefaultButton} from './common/MyAppDefaultButton'
import {ScreenContainer} from './common/ScreenContainer'

export function AddDeckScreen() {

  const  buttonOnPress = ()=>{ 
    return (<View><Text>lala</Text></View>);}

    return (
        <ScreenContainer>
        <Text style={styles.label}>What will you learn in this deck?</Text>
        <TextInput
          style={styles.input}
          value="implement it"
          placeholder="e.g. Algebra"
        />
      </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    label: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center"
    },
    input: {
      backgroundColor: white,
      width: 350,
      fontSize: 20,
      height: 50,
      padding: 10,
      borderRadius: 1,
      borderColor: gray,
      margin: 20
    }  
  });