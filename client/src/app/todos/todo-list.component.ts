import {Component} from '@angular/core';
import {TodoListService} from './todo-list.service'

@Component({
    selector: 'todo-list-component',
    providers: [TodoListService],
    templateUrl: 'todo-list.component.html'
})
export class TodoListComponent{
    private todos: any;

    constructor(private _todoListService: TodoListService){

        this.todos = _todoListService.getTodos();

    }

}