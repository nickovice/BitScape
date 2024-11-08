import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {

  query: string = '';
  isLoading: boolean = false;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    
  }

  search(): void {
    this.isLoading = true;
    this.searchService.updateQuery(this.query);
    setTimeout(() => {
      this.router.navigate(['/products']);
      this.isLoading = false;
    }, 800);
  }
}

