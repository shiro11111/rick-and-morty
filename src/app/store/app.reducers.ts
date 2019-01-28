import * as fromCharactersListState from './rick-and-morty-list.reducer';
import * as fromCharacterDetailsState from './rick-and-morty-details.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { charactersListReducer } from './rick-and-morty-list.reducer';
import { characterDetailsReducer } from './rick-and-morty-details.reducer';


export interface AppState {
  charactersListState: fromCharactersListState.CharactersListState;
  characterDetailsState: fromCharacterDetailsState.CharacterDetailsState;
}

export const reducers: ActionReducerMap<AppState> = {
  charactersListState: charactersListReducer,
  characterDetailsState: characterDetailsReducer
};

