import {Action} from '@ngrx/store';
import {Character} from '../../models/character';
import {HttpErrorResponse} from '@angular/common/http';
import { NormalizedList } from '../../models/normalizedList';

export const LOAD_CHARACTER_LIST = 'LOAD_CHARACTER_LIST';
export const LOAD_CHARACTER_LIST_SUCCESS = 'LOAD_CHARACTER_LIST_SUCCESS';
export const LOAD_CHARACTER_LIST_FAIL = 'LOAD_CHARACTER_LIST_FAIL';

export class LoadCharacterList implements Action {
  readonly type = LOAD_CHARACTER_LIST;
}

export class LoadCharacterListSuccess implements Action {
  readonly type = LOAD_CHARACTER_LIST_SUCCESS;
  constructor(public payload: NormalizedList) {}
}

export class LoadCharacterListFail implements Action {
  readonly type = LOAD_CHARACTER_LIST_FAIL;
  constructor(public payload: HttpErrorResponse) {}
}

export type LoadListActions = LoadCharacterList | LoadCharacterListSuccess | LoadCharacterListFail;


