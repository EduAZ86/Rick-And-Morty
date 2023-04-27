import { ADD_FAV, REMOVE_FAV } from "./ActionTypes"

const initialState = {
    myFaborites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_FAV:
            return{
                
                ...state, myFaborites: [...state.myFaborites, action.payload]
            }
        case REMOVE_FAV:
            let deleteCharacter = state.myFaborites.filter(character => character.id !== Number(action.payload))
            return {
                ...state, myFaborites: deleteCharacter
            }
            break
            default:
                return { ...state }
    }
}
export default reducer