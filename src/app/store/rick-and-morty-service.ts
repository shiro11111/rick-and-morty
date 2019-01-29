import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { List } from '../models/list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { normalize } from 'normalizr';
import { character } from './entity/schemas';
import { NormalizedList } from '../models/normalizedList';

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {
  constructor(private http: HttpClient) {
  }

  loadCharacterList(): Observable<NormalizedList> {
    return this.http.get('https://rickandmortyapi.com/api/character/').pipe(
      filter((res: List<Character>) => !!res),
      map((res: List<Character>) => res.results),
      map((items: Character[]) => normalize(items, [character]))
    );
  }

  loadCharacterDetails(id: number): Observable<Character> {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);
  }
}

