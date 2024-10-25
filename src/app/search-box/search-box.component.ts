import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

  query: string = '';

  constructor(private searchService: SearchService, private router: Router) { }
  ngOnInit(): void {
    
  }

  search(){
    this.searchService.updateQuery(this.query);
    this.router.navigate(['/products']);
  }
  
}
