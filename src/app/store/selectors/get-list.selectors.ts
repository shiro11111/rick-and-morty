import { createSelector } from '@ngrx/store';
import { getCharactersListState } from '../app.reducers';
import { getCharacterList } from '../rick-and-morty-list.reducer';
import { getStateOfEntity } from '../entity/entity.selector';
import { denormalize } from 'normalizr';
import { character } from '../entity/schemas';

export const getListState = createSelector(getCharactersListState, getCharacterList);

export const getCharacterListData = createSelector(
  getStateOfEntity,
  getListState,
  (entities: {[key: string]: any}, characterIds: number[]) => denormalize(characterIds, [character], entities)
);

