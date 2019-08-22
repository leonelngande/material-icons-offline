import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {MaterialIconsComponent} from './components/material-icons/material-icons.component';
import {MaterialModule} from './material.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DebounceInputDirective} from './directives/debounce-input.directive';
import {HomeComponent} from './components/home/home.component';
import {ResponsiveColumnsDirective} from './directives/responsive-columns.directive';


const DIRECTIVES = [
  DebounceInputDirective,
  ResponsiveColumnsDirective,
];

const COMPONENTS = [
  HomeComponent,
  SearchBarComponent,
  MaterialIconsComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...DIRECTIVES,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
