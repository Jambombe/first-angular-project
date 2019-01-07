import {Component, EventEmitter, Input, Output} from '@angular/core';

import { AppComponent } from './app.component';
import {TodosService} from './Todos.service';
import {Todo} from './todo.model';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './listItem.component.html',
    styleUrls: ['./app.component.css']
})

export class ListItemComponent {
    @Input() todo;

    constructor(public todosService: TodosService) {}

    alo(str?) {
        str ? console.log(str) : console.log('alo');
    }
}
