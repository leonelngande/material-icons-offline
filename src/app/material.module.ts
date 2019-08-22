import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

const MATERIAL_MODULES = [
  MatInputModule,
  MatIconModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...MATERIAL_MODULES,
  ],
  exports: [...MATERIAL_MODULES],
})
export class MaterialModule { }
