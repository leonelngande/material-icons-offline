import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchValue: string;

  @Output() onMenuToggle = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    /**
     * @see https://stackoverflow.com/a/42949123/6924437
     */
    this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.searchValue = event.state.root.queryParams.search;
      }
    });
  }

  clearSearch() {
    this.searchValue = '';
    this.updateSearchQueryParam(this.searchValue);
  }

  updateSearchQueryParam(searchValue: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: {search: searchValue},
        replaceUrl: true,
        queryParamsHandling: 'merge'
      });
  }

  emitMenuToggle() {
    this.onMenuToggle.emit(true);
  }
}
