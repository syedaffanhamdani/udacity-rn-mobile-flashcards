import React from 'react'
import {white,gray} from '../theme/ColorPallete'
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native'
import {maybePluralize} from './common/Utils'

interface props  {
    id: number,
    name: string,
    cardCount: number,
    navigation: any,
}

const DeckOverviewCard = (props: props) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        props.navigation.navigate("DeckDetail", { deckId: props.id, name: props.name })
      }
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.count}>{`${props.cardCount} ${maybePluralize(
        props.cardCount,"Card",
      )}`}</Text>
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: white,
      minHeight: 150,
      marginBottom: 10,
      padding: 20,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: gray
    },
    name: {
      fontSize: 30,
      textAlign: "center",
      marginBottom: 5
    },
    count: {
      fontSize: 20,
      textAlign: "center",
      color: gray,
      marginBottom: 5
    }
  });
  
  export default DeckOverviewCard;
  