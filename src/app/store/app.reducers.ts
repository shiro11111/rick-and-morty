import * as fromCharactersState from './rick-and-morty.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { charactersReducer } from './rick-and-morty.reducer';

export interface AppState {
  charactersState: fromCharactersState.CharactersState;
}

export const reducers: ActionReducerMap<AppState> = {
  charactersState: charactersReducer
};
