import {Component} from '@angular/core';
import {TodosService} from './Todos.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Ma TODO-list';

    constructor(public todoService: TodosService) { // Injection du todosService
        this.todoService.getTodos();
    }
}
