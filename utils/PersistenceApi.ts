import { AsyncStorage } from "react-native";

export const STORAGE_KEY = "FlashCardsReactNative";

export const retrieveDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results: any) => {
    const data = JSON.parse(results);
    return data;
  });
};

export const saveDeck = (deck: any) => {
  return AsyncStorage.mergeItem(
    STORAGE_KEY,
    JSON.stringify({ [deck.id]: deck })
  );
};

export const saveCard = (deckId: any, card: any) => {
  return AsyncStorage.getItem(STORAGE_KEY).then((results: any) => {
    const data = JSON.parse(results);

    data[deckId] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        { question: card.question, answer: card.answer }
      ]
    };

    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  });
};
