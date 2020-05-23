import React, { Component } from 'react'
import {Text, StyleSheet,View} from 'react-native'
import {white,gray} from '../theme/ColorPallete'

interface props {
    navigation?: object,
    deck : {
        name: string
        cards : {
            length: number
        }
    },
}

export function DeckDetailsScreen(props: props) {

    const maybePluralize = (count: number, noun: string, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;

        const {navigation,deck} = props
        return(
            <View style={styles.container}>
                <Text style={styles.name}>
                    {deck.name}
                </Text>
                <Text style={styles.count}>{`${deck.cards.length} ${maybePluralize(
            deck.cards.length,"Card")}`}</Text>
                    

            </View>
        )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: white,
      justifyContent: "center",
      alignItems: "center"
    },
    name: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      padding: 10,
      marginBottom: 5
    },
    count: {
      fontSize: 20,
      color: gray,
      textAlign: "center",
      marginBottom: 5
    },
    actions: {
      marginTop: 20
    }
  });
  