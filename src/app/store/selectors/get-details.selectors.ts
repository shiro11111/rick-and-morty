import { createSelector } from '@ngrx/store';
import { getCharacterDetailsState } from '../app.reducers';
import { getCharacterDetails } from '../rick-and-morty-details.reducer';

export const getDetailsState = createSelector(getCharacterDetailsState, getCharacterDetails);
