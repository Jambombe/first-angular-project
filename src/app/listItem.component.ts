import {Component, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';

import {TodosService} from './Todos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './listItem.component.html',
    styleUrls: ['./app.component.css']
})

export class ListItemComponent implements OnInit, OnDestroy {
    @Input() todo;
    editableMode = false;

    // Variables pour routes
    private id: number;

    constructor(public todosService: TodosService, private route: ActivatedRoute) {
    }

    startEdit() {
        this.editableMode = true;
    }

    finishEdit() {
        this.todosService.updateTodo(this.todo, this.todo.nom);
        this.editableMode = false;
    }

    async ngOnInit() {
        if (this.todo === null || this.todo === undefined) {
            this.id = +this.route.snapshot.paramMap.get('id');
            this.todo = await this.todosService.getTodoById(this.id);
        }
    }

    ngOnDestroy(): void {
    }

    alo(str?) {
        str ? console.log(str) : console.log('alo');
    }
}
