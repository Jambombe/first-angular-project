import {Component} from '@angular/core';
import {TodosService} from './Todos.service';
import {Todo} from './todo.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Ma TODO-list';
    todos: Todo[]; // Tous les todos depuis la db

    constructor(public service: TodosService) { // Injection du service
        this.getTodos();
    }

    getTodos() {
        this.service.getTodosFromUrl().subscribe((data: Todo[]) => this.todos = data);
    }

    // deleteTodo(todo: Todo) {
    //     this.service.delTodo(todo.id).subscribe();
    //     this.getTodos();
    // }

    // fonction appelée quand un id est emit par listItem.component.ts
    onDeleted(id: number) {
        this.service.delTodo(id).subscribe();
        this.getTodos();
    }


    alo() {
        alert('alo');
    }
}
