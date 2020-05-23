import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList,Button } from 'react-native'
import { ScreenContainer } from './common/ScreenContainer'
import DeckOverviewCard from './DeckOverviewCard';
import { white } from '../theme/ColorPallete'

interface cardItem {
    id: number,
    name: string,
    cardCount: number,
    navigation: any,
    cards: any, //TODO: ad card here may be
}

export class DecksScreen extends Component {

    state = {
        ready: true
    }

    componentDidMount() {
        //TODO: retreive decks from storage
        this.props.decks={

        }    
    }

    render() {
        const { decks, navigation } = this.props;

        if (!this.state.ready) {
            return (
                <ScreenContainer>
                    <Text>Loading</Text>
                </ScreenContainer>
            )

        }
        else {
            return (
                <ScreenContainer>
                    {
                        Object.values(decks).length > 0 ? (
                            <FlatList
                                data={Object.values(decks)}
                                renderItem={({ item }: { item: cardItem }) =>
                                    <DeckOverviewCard
                                        id={item.id}
                                        name={item.name}
                                        cardCount={item.cards.length}
                                        navigation={this.props.navigation}
                                    />}
                                keyExtractor={(item, index) => item.name}
                            />
                        ) : (
                                <View style={styles.blank}>
                                    <Text style={{ fontSize: 18 }}>You don't have any decks yet.</Text>
  
                                </View>)
        }
                </ScreenContainer >
            )
    }

}

}

const styles = StyleSheet.create({
    blank: {
        flex: 1,
        backgroundColor: white,
        justifyContent: "center",
        alignItems: "center"
    }
});
