import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { LoadCharacterList } from '../../store/actions/load-list.actions';
import { map } from 'rxjs/operators';
import { CharactersState } from '../../store/rick-and-morty.reducer';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: './rick-and-morty-list.component.html',
  styleUrls: ['./rick-and-morty-list.component.css']
})
export class RickAndMortyListComponent implements OnInit {
  list$: Observable<Character[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.store.dispatch(new LoadCharacterList());

    this.list$ = this.store.select('charactersState').pipe(
      map((state: CharactersState) => state && state.list));
  }
}
