import { PayloadAction } from '../../models/payload-action';
import { character } from './schemas';

export interface EntitiesState {
  entities: {};
}

const initialState: EntitiesState = {
  entities: {
    character: {}
  }
};

export function entityReducer(state = initialState, action: PayloadAction) {
  if (action && action.payload && action.payload.entities) {
    let entity = {};
    const keys = Object.keys(initialState.entities);

    keys.forEach((character: string) => {
      const actionEntity = action.payload.entities[character] || {};
      const stateEntity = state.entities[character] || {};
      const newEntities = {};
      const ids = Object.keys(actionEntity);

      ids.forEach((id: string) => {
        newEntities[id] = { ...(stateEntity[id]), ...(actionEntity[id] || {}) };
      });
      entity[character] = {...stateEntity, ...newEntities};
    });
    return {
      ...state,
      entities: entity
    };
  }
  return state;
}

export const getEntitiesState = (state: EntitiesState) => state.entities;

