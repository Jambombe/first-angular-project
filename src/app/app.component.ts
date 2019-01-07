import {Component, Injectable} from '@angular/core';
import {TodosService} from './Todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ma TODO-list';

  constructor(public service: TodosService) {} // Injection du service

  alo() {
    alert('alo');
  }
}
