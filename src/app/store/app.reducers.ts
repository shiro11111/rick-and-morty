import * as fromCharactersListState from './rick-and-morty-list.reducer';
import * as fromCharacterDetailsState from './rick-and-morty-details.reducer';
import * as fromEntitiesState from './entity/entity.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { charactersListReducer } from './rick-and-morty-list.reducer';
import { characterDetailsReducer } from './rick-and-morty-details.reducer';
import { entityReducer } from './entity/entity.reducer';


export interface AppState {
  charactersListState: fromCharactersListState.CharactersListState;
  characterDetailsState: fromCharacterDetailsState.CharacterDetailsState;
  entitiesState: fromEntitiesState.EntitiesState;
}

export const reducers: ActionReducerMap<AppState> = {
  charactersListState: charactersListReducer,
  characterDetailsState: characterDetailsReducer,
  entitiesState: entityReducer
};

export const getCharactersListState = (state: AppState) => state.charactersListState;
export const getCharacterDetailsState = (state: AppState) => state.characterDetailsState;
export const getEntitiesState = (state: AppState) => state.entitiesState;

