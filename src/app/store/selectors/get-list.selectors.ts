import { createSelector } from '@ngrx/store';
import { getCharactersListState } from '../app.reducers';
import { getCharacterList } from '../rick-and-morty-list.reducer';

export const getListState = createSelector(getCharactersListState, getCharacterList);
