import { Character } from '../models/character';
import { LOAD_CHARACTER_LIST, LOAD_CHARACTER_LIST_FAIL, LOAD_CHARACTER_LIST_SUCCESS, LoadListActions } from './actions/load-list.actions';

export interface CharactersListState {
  list: Character[];
}

const initialState: CharactersListState = {
  list: null
};

export function charactersListReducer (state = initialState, action: LoadListActions) {
  switch (action.type) {
    case LOAD_CHARACTER_LIST:
      return {
        ...state
      };
    case LOAD_CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        list: action.payload
      };
    case LOAD_CHARACTER_LIST_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}

export const getCharacterList = (state: CharactersListState) => state.list;
