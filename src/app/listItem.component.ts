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

    constructor(public service: TodosService) {}

    // On emet dans le composant l'id du todo à supprimer
    @Output() idToDelete = new EventEmitter<number>();

    delTodo(id) {
        this.idToDelete.emit(id);
    }
    ///////////

    alo() {
        console.log(this.todo);
    }
}
