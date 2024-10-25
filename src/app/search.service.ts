import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject("");
  public searchQuery: Observable<string> = this._searchQuerySubject.asObservable();
  constructor() { }

  updateQuery(query: string){
    this._searchQuerySubject.next(query);
  }
}
