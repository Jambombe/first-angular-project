import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './listItem.component';
import {TodosService} from './Todos.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start.component';
import {PaginationComponent} from './pagination/pagination.component';

const appRoutes: Routes = [
  { path: 'todo/:id', component: ListItemComponent, data: {animation: '/'} },
  { path: 'todos', component: AppComponent, data: {animation: '/'} },
  { path: '', redirectTo: 'todos', pathMatch: 'full', data: {animation: '/'} }
];

@NgModule({
  declarations: [
    StartComponent,
    AppComponent,
    ListItemComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes /*, {enableTracing: true}*/)
  ],
  exports: [
    AppComponent
  ],
  providers: [ // Services
    TodosService
  ],
  bootstrap: [StartComponent]
})
export class AppModule { }
