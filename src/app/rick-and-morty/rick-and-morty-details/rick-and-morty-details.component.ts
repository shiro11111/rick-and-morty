import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.reducers';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Character } from '../../models/character';
import { ActivatedRoute, Params } from '@angular/router';
import { LoadCharacterDetails } from '../../store/actions/load-details.actions';
import { distinctUntilChanged, filter, map, takeUntil } from 'rxjs/operators';
import { CharacterDetailsState } from '../../store/rick-and-morty-details.reducer';
import { getDetailsState } from '../../store/selectors/get-details.selectors';

@Component({
  selector: 'app-rick-and-morty-details',
  templateUrl: './rick-and-morty-details.component.html',
  styleUrls: ['./rick-and-morty-details.component.css']
})
export class RickAndMortyDetailsComponent implements OnInit {
  details$: Observable<Character>;
  private destroyed$: Subject<number> = new Subject();

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.pipe(
      distinctUntilChanged(),
      filter((params: Params) => (params && params.id)),
      map((params: Params) => params.id),
      takeUntil(this.destroyed$)
    ).subscribe((id: number) => {
      this.store.dispatch(new LoadCharacterDetails(id));
    });

    // this.details$ = this.store.select('characterDetailsState').pipe(
    //   map((state: CharacterDetailsState) => state && state.details));

    this.details$ = this.store.pipe(select(getDetailsState));
  }

}
