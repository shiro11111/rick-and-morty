import { Action } from '@ngrx/store';
import { Character } from '../../models/character';
import { HttpErrorResponse } from '@angular/common/http';

export const LOAD_CHARACTER_DETAILS = 'LOAD_CHARACTER_DETAILS';
export const LOAD_CHARACTER_DETAILS_SUCCESS = 'LOAD_CHARACTER_DETAILS_SUCCESS';
export const LOAD_CHARACTER_DETAILS_FAIL = 'LOAD_CHARACTER_DETAILS_SUCCESS_FAIL';

export class LoadCharacterDetails implements Action {
  readonly type = LOAD_CHARACTER_DETAILS;

  constructor(public payload: number) {
  }
}

export class LoadCharacterDetailsSuccess implements Action {
  readonly type = LOAD_CHARACTER_DETAILS_SUCCESS;

  constructor(public payload: Character) {
  }
}

export class LoadCharacterDetailsFail implements Action {
  readonly type = LOAD_CHARACTER_DETAILS_FAIL;

  constructor(public payload: HttpErrorResponse) {
  }
}

export type LoadDetailsActions = LoadCharacterDetails | LoadCharacterDetailsSuccess | LoadCharacterDetailsFail;
