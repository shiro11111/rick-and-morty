import { Character } from '../models/character';
import { LOAD_CHARACTER_LIST, LOAD_CHARACTER_LIST_FAIL, LOAD_CHARACTER_LIST_SUCCESS, LoadListActions } from './actions/load-list.actions';

export interface CharactersState {
  list: Character[];
}

const initialState: CharactersState = {
  list: null
};

export function charactersReducer (state = initialState, action: LoadListActions) {
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
  }
}
