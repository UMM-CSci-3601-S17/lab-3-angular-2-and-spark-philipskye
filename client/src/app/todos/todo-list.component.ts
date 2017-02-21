import {Component, OnInit} from '@angular/core';
import {TodoListService} from './todo-list.service'
import {FilterBy} from "../users/filter.pipe";
import {Todo} from "./todo";

@Component({
    selector: 'todo-list-component',
    providers: [ FilterBy ],
    templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit{
    public todos: Todo[];

    constructor(private todoListService: TodoListService){

        //this.todos = todoListService.getTodos();

    }

    ngOnInit(): void {
        this.todoListService.getTodos().subscribe(
            todos => this.todos = todos,
            err => {
                console.log(err);
            }
        );
    }

}