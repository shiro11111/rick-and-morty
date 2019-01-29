import { createSelector } from '@ngrx/store';
import { getEntitiesState } from '../app.reducers';
import * as fromReducer from './entity.reducer';

export const getStateOfEntity = createSelector(getEntitiesState, fromReducer.getEntitiesState);
