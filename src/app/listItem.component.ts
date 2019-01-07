import {Component, Input} from '@angular/core';

import { AppComponent } from './app.component';
import {TodosService} from './Todos.service';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './listItem.component.html',
    styleUrls: ['./app.component.css']
})

export class ListItemComponent {
    @Input() todo;

    constructor(public service: TodosService) {}

    alo() {
        console.log(this.todo);
    }
}
