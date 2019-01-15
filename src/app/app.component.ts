import {Component, OnInit} from '@angular/core';
import {TodosService} from './Todos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    title = 'Ma TODO-list';

    public currentTodos;

    loading = false;
    total = 20; // Nombre total de Todos dans la db
    page = 1; // Page actuelle
    limit = 8; // Limite de todos par page

    constructor(public todoService: TodosService, private route: ActivatedRoute) { // Injection du todosService
        // this.currentTodos = this.getTodos();
    }

    ngOnInit() {
        this.getTodos();
        if (this.route.snapshot.paramMap.has('id')) {
            this.page = +this.route.snapshot.paramMap.get('id');
            this.goToPage(this.page);
        }
    }

    async getTodos() {
        this.loading = true;
        this.currentTodos = this.todoService.getTodosLimit(this.page, this.limit);
        this.total = + await this.todoService.getTodosNumber();
    }


    goToPage(n: number) {
        if (this.page !== n) { // Si la page actuelle est la meme que celle demandee ...
            this.page = n; // ... on ne change pas de page
            this.getTodos();
        }
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
