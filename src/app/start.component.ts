import {Component} from '@angular/core';
import {TodosService} from './Todos.service';

@Component({
    selector: 'app-root',
    templateUrl: 'start.component.html',
    styleUrls: ['./app.component.css']
})

export class StartComponent {
    title = 'Ma TODO-list';

    constructor(public todoService: TodosService) { // Injection du todosService
        this.todoService.getTodos();
    }

}