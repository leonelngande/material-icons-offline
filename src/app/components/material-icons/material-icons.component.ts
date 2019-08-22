import {Component, OnInit} from '@angular/core';
import {MaterialIconsService} from '../../services/material-icons.service';
import {Observable} from 'rxjs';
import {IconsData} from '../../models/icon-category.model';
import {ResponsiveColumnsMap} from '../../directives/responsive-columns.directive';
import {ActivatedRoute, Params} from '@angular/router';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-material-icons',
  templateUrl: './material-icons.component.html',
  styleUrls: ['./material-icons.component.scss']
})
export class MaterialIconsComponent implements OnInit {

  iconsData$: Observable<IconsData>;
  iconColumnsMap: ResponsiveColumnsMap = {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 10,
    xl: 10
  };
  constructor(
    private materialIconsService: MaterialIconsService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const {search, category} = this.activatedRoute.snapshot.queryParams;
    this.setIconsData({iconFilterValue: search});
    // TODO: Issue getting this to work, how to make this run after iconData is loaded?
    /*if (category) {
      this.scrollToAnchor(category, 3000);
    }*/

    // Listen for search route param changes
    this.activatedRoute.queryParams
      .pipe(
        map((queryParams: Params) => queryParams.search as string),
        distinctUntilChanged()
      )
      .subscribe((searchValue) => {
        if (searchValue) {
          this.setIconsData({iconFilterValue: searchValue});
        }
      });

    // Listen for category route param changes
    this.activatedRoute.queryParams
      .pipe(
        map((queryParams: Params) => queryParams.category as string),
        distinctUntilChanged()
      )
      .subscribe((selectedCategory) => {
        if (selectedCategory) {
          this.scrollToAnchor(selectedCategory);
        }
      });
  }

  /**
   * Scroll to anchor
   */
  public scrollToAnchor(location: string, wait = 0): void {
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }, wait);
    }
  }

  private setIconsData(params: { iconFilterValue?: string } = {}) {
    this.iconsData$ = this.materialIconsService.fetchIconsData()
      .pipe(
        map(iconsData => {
          // best solution i've seen so far for deep object cloning
          return JSON.parse(JSON.stringify(iconsData));
        }),
        map((iconsData: IconsData) => {
          if (params.iconFilterValue) {
            iconsData.categories = iconsData.categories.filter((category) => {
              category.icons = category.icons.filter(icon => icon.id.includes(params.iconFilterValue.trim()));
              return category.icons.length >= 1;
            });
          }

          return iconsData;
        }),
      );
  }
}
