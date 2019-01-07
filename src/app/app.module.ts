import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './listItem.component';
import {TodosService} from './Todos.service';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AppComponent
  ],
  providers: [ // Services
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
