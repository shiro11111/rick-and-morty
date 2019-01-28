import { Character } from '../models/character';
import {
  LOAD_CHARACTER_DETAILS,
  LOAD_CHARACTER_DETAILS_FAIL,
  LOAD_CHARACTER_DETAILS_SUCCESS,
  LoadDetailsActions
} from './actions/load-details.actions';

export interface CharacterDetailsState {
  details: Character;
}

const initialState: CharacterDetailsState = {
  details: null
};

export function characterDetailsReducer (state = initialState, action: LoadDetailsActions) {
  switch (action.type) {
    case LOAD_CHARACTER_DETAILS:
      return {
        ...state
      };
    case LOAD_CHARACTER_DETAILS_SUCCESS:
      return {
        ...state,
        details: action.payload
      };
    case LOAD_CHARACTER_DETAILS_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
