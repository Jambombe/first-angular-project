// Class comportant tous les TODOS

import {Injectable} from '@angular/core';

@Injectable() // Signifie que cette classe est injectable. Ne pas oublier de l'ajouter dans app.module.ts -> providers
export class TodosService {
    todos = [];

    addTodo(t) {
        this.todos.push(t);
        console.log(this.todos);
    }

    delTodo(todo) {
        console.log(this.todos);
        const index = this.todos.indexOf(todo, 0);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }

    updateTodo(todo) {
        const newTodo = prompt('Renommer le todo : ' + todo, todo);

        const index = this.todos.indexOf(todo, 0);
        if (index > -1) {
            this.todos.splice(index, 1, newTodo);
        }
    }

}
