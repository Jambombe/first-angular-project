// Class comportant tous les TODOS

import {Injectable} from '@angular/core';
import {Todo} from './todo.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable() // Signifie que cette classe est injectable. Ne pas oublier de l'ajouter dans app.module.ts -> providers
export class TodosService {
    todos: Todo[] = [];
    todoDbUrl = 'http://localhost:3000/todos/';

    constructor(private http: HttpClient) { }

    addTodo(todoName) {
        const newTodo = new Todo();
        newTodo.nom = todoName;
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.todoDbUrl, newTodo, {headers: headers }).subscribe(() => this.getTodos());
        // subscribe(...) permet de mettre à jour al liste de Todos
    }

    delTodo(id) {
        const deleteUrl = this.todoDbUrl + id;
        return this.http.delete(deleteUrl).subscribe(() => this.getTodos());
    }

    updateTodo(todo: Todo) {
        const newTodoName = prompt('Renommer le todo : ' + todo.nom, todo.nom);
        todo.nom = newTodoName;
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.todoDbUrl + todo.id, todo, {headers: headers }).subscribe();
    }

    // Retourne tous les todos depuis la db sous forme de tableau de Todo
    getTodos() {
        this.getTodosFromUrl().subscribe(
            (data: Todo[]) => {
                this.todos = data;
            });
    }

    // Retourne un observable contenant les données de la db
    getTodosFromUrl(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todoDbUrl);
    }

    alo(str?) {
        str ? console.log(str) : console.log('alo');
    }

}
