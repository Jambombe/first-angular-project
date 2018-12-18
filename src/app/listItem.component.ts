import { Component } from '@angular/core';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './listItem.component.html',
    styleUrls: ['./app.component.css']
})
export class ListItemComponent {
    todos = [ ];
}
