import React from 'React'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { green, white } from '../../theme/ColorPallete'

interface props {
    children?: object,
    onPress(): any,
    style?: object,

}

export const MyAppDefaultButton = (props: props)=> {
    <TouchableOpacity style={props.style} onPress={props.onPress}>
        <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>


}

const styles = StyleSheet.create({
    button: {
      borderRadius: 5,
      backgroundColor: green,
      margin: 10,
      padding: 15,
      width: 300
    },
    textStyle: {
      textAlign: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: white
    }
  });
  