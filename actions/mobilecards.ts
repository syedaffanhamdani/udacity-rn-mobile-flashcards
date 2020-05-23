export const ADD_NEW_CARD = 'ADD_CARD';
export const ADD_NEW_DECK = 'ADD_DECK';

export function addNewCard(deckId: number, cardObject: object){
    return {
        type: ADD_NEW_CARD,
        deckId,
        cardObject,
    }
}

export function addNewDeck(deckObject: object){
    return {
        type: ADD_NEW_DECK,
        deckObject,
    }
}