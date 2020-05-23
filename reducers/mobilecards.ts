import {ADD_NEW_CARD,ADD_NEW_DECK} from '../actions/mobilecards'

//TODO define sate object

interface action {
    type: string,
    deckId: number,
    newCardObject?: object,
    deckObject?: object,
}

function mobilecardsStack(state={}, action: action){
    switch(action.type){
        case ADD_NEW_CARD:
            const addNewQuestionToDeck = state[action.deckId].question.concat(action.newCardObject)
            if(action.deckId)
            return {
                ...state,
                [action.deckId] : {
                    ...state[action.deckId],
                    question: addNewQuestionToDeck
                }
            }
            case ADD_NEW_DECK:
                return {
                    ...state,
                    ...action.deckObject
                }
                default:
                    state;
    }
}

export default mobilecardsStack;