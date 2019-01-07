import {Component} from '@angular/core';
import {TodosService} from './Todos.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Ma TODO-list';

    constructor(public service: TodosService) { // Injection du service
        this.service.getTodos();
    }

    alo() {
        alert('alo');
    }
}
