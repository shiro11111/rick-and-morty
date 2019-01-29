import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RickAndMortyService } from './rick-and-morty-service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Character } from '../models/character';
import { LoadCharacterListFail, LoadCharacterListSuccess } from './actions/load-list.actions';
import { of } from 'rxjs';
import { LoadCharacterDetails, LoadCharacterDetailsFail, LoadCharacterDetailsSuccess } from './actions/load-details.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { NormalizedList } from '../models/normalizedList';

@Injectable()
export class RickAndMortyEffects {
  constructor(private actions$: Actions,
              private service: RickAndMortyService) {
  }

  @Effect() loadCharacters$ = this.actions$.pipe(
    ofType('LOAD_CHARACTER_LIST'),
    switchMap(() => this.service.loadCharacterList().pipe(
      map((res: NormalizedList) => new LoadCharacterListSuccess(res)),
      catchError((error) => of(new LoadCharacterListFail(error)))
    )));

@Effect() loadDetails$ = this.actions$.pipe(
  ofType('LOAD_CHARACTER_DETAILS'),
  map((action: LoadCharacterDetails) => action.payload),
  switchMap((id: number) => this.service.loadCharacterDetails(id).pipe(
    map((res: Character) => new LoadCharacterDetailsSuccess(res)),
    catchError((error: HttpErrorResponse) => of(new LoadCharacterDetailsFail(error)))
  )));
}
