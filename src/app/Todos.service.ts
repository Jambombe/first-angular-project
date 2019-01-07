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
        // newTodo.id = this.todos.length; // Creation de l'id automatiquement
        newTodo.nom = todoName;
        // this.todos.push(newTodo);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.todoDbUrl, newTodo, {headers: headers }).subscribe();
    }

    delTodo(id) {
        const deleteUrl = this.todoDbUrl + id;
        return this.http.delete(deleteUrl);
    }

    updateTodo(todo: Todo) {
        const newTodoName = prompt('Renommer le todo : ' + todo.nom, todo.nom);
        todo.nom = newTodoName;
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.todoDbUrl + todo.id, todo, {headers: headers }).subscribe();
    }

    getTodosFromUrl(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todoDbUrl);
    }

    alo(s) {
        console.log(s);
    }

}
