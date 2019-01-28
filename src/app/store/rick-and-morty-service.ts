import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { List } from '../models/list';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RickAndMortyService {
  constructor(private http: HttpClient) {
  }

  loadCharacterList(): Observable<Character[]> {
    return this.http.get('https://rickandmortyapi.com/api/character/').pipe(
      filter((res: List<Character>) => !!res),
      map((res: List<Character>) => res.results)
    );
  }

  loadCharacterDetails(id: number): Observable<Character> {
    return this.http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);
  }
}

