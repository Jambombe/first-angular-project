import {Component, Input} from '@angular/core';

import { AppComponent } from './app.component';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './listItem.component.html',
    styleUrls: ['./app.component.css']
})
export class ListItemComponent {
    @Input() todo;

    // @Input() addTodo(t) {
    //     return;
    // }

    @Input() delTodo() { return; }

    @Input() updateTodo() {
        return;
    }
}
