import {Component, OnInit} from '@angular/core';
import {TodosService} from './Todos.service';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    title = 'Ma TODO-list';

    loading = false;
    total = 30;
    page = 1;
    limit = 20;

    constructor(public todoService: TodosService) { // Injection du todosService
        this.todoService.getTodos();
    }

    ngOnInit() {
        this.getTodos();
    }

    getTodos() {
        this.loading = true;
        this.todoService.getTodosLimit(this.page, this.limit);
    }


    goToPage(n: number) {
        this.page = n;
        this.getTodos();
    }

    onNext() {
        this.page++;
        this.getTodos();
    }

    onPrev() {
        this.page--;
        this.getTodos();
    }

}
