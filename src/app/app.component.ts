import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ma TODO-list';
  todos = [];

  addTodo(t) {
    this.todos.push(t);
  }

  delTodo(todo) {
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

  alo() {
    alert('alo');
  }
}
