import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, shareReplay, tap} from 'rxjs/operators';
import {IconsData} from '../models/icon-category.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialIconsService {

  private iconsData$: Observable<IconsData> = this.http.get<IconsData>('assets/static/icons-data.json')
    .pipe(
      shareReplay()
    );

  constructor(private http: HttpClient) { }

  fetchIconsData(): Observable<IconsData> {
    return this.iconsData$;
  }
}
