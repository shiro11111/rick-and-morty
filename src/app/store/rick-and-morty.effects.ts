import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RickAndMortyService } from './rick-and-morty-service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Character } from '../models/character';
import { LoadCharacterListFail, LoadCharacterListSuccess } from './actions/load-list.actions';
import { of } from 'rxjs';

@Injectable()
export class RickAndMortyEffects {
  constructor(private actions$: Actions,
              private service: RickAndMortyService) {
  }

  @Effect() loadCharacters$ = this.actions$.pipe(
    ofType('LOAD_CHARACTER_LIST'),
    switchMap(() => this.service.loadCharacterList().pipe(
      map((res: Character[]) => new LoadCharacterListSuccess(res)),
      catchError((error) => of(new LoadCharacterListFail(error)))
    )));
}
