import { Component, OnInit } from '@angular/core';
import { Character } from '../../models/character';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.reducers';
import { select, Store } from '@ngrx/store';
import { LoadCharacterList } from '../../store/actions/load-list.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { getCharacterListData, getListState } from '../../store/selectors/get-list.selectors';
import { getStateOfEntity } from '../../store/entity/entity.selector';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: './rick-and-morty-list.component.html',
  styleUrls: ['./rick-and-morty-list.component.css']
})
export class RickAndMortyListComponent implements OnInit {
  list$: Observable<Character[]>;
  entities$: Observable<{[key: string]: any}>;

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.store.dispatch(new LoadCharacterList());

    // this.list$ = this.store.select('charactersListState').pipe(
    //   map((state: CharactersListState) => state && state.list));
    this.entities$ = this.store.pipe(select(getStateOfEntity));

    this.list$ = this.store.pipe(select(getCharacterListData));
  }

  onNavigateToDetails(id: number): void {
    this.router.navigate([`details/${id}`], { relativeTo: this.route });
  }
}
