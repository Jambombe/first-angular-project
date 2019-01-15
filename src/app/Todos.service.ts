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

    // Ajoute à la db le nouveau Todo de nom todoName
    async addTodo(todoName) {
        if (todoName.length >= 1) {
            const newTodo = new Todo();
            newTodo.nom = todoName;
            const headers = new HttpHeaders();
            headers.append('Content-Type', 'application/json');
            await this.http.post(this.todoDbUrl, newTodo, {headers: headers}).toPromise();
            this.getTodos();
        }
    }

    // Supprime le todo d'id id
    async delTodo(id) {
        const deleteUrl = this.todoDbUrl + id;
        // const a = await this.http.delete(deleteUrl).subscribe(() => this.getTodos());
        await this.http.delete(deleteUrl).toPromise();
        this.getTodos(); // Cette ligne sera executee UNIQUEMENT quand la ligne avec 'await' aura fini son traitement
    }

    // Met à jour le Todo todo
    async updateTodo(todo: Todo, newTodoName) {
        // const newTodoName = prompt('Renommer le todo : ' + todo.nom, todo.nom);
        // todo.nom = newTodoName;
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        await this.http.put(this.todoDbUrl + todo.id, todo, {headers: headers }).toPromise();
    }

    // Retourne tous les todos depuis la db sous forme de tableau de Todo
    async getTodos() {
        this.todos = await this.getTodosFromUrl().toPromise();
    }

    // Retourne un observable contenant les données de la db
    getTodosFromUrl(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todoDbUrl);
    }

    async getTodoById(id) {
        const todo = await this.http.get<Todo>(this.todoDbUrl + id).toPromise();
        console.log(todo);
        return todo;
    }

    alo(str?) {
        str ? console.log(str) : console.log('alo');
    }

    async getTodosLimit(page: any, limit: any) {
        // const a = await this.http.get<Todo[]>(this.todoDbUrl + '?_page=' + page + '&_limit=' + limit).toPromise();
        const rep = await this.http.get<any>(this.todoDbUrl + '?_page=' + page + '&_limit=' + limit, { observe: 'response'}).toPromise();
        // const keys = resp.headers.keys();
        // const headers = (keys.map(key => `${key}: ${resp.headers.get(key)}`));
        // const body = `${ resp.body }`;
        // console.log(rep.headers.get('x-total-count'));
        return rep.body;
    }

    async getTodosNumber() {
        const rep = await this.http.get<any>(this.todoDbUrl + '?&_limit=1', { observe: 'response'}).toPromise();
        const total = await rep.headers.get('x-total-count');
        return total; // rep.headers.get('x-total-count');
    }
}
