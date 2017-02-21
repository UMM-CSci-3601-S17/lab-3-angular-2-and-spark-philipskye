import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Todo } from "../todos/todo";
import { TodoListComponent } from "../todos/todo-list.component";
import { TodoListService } from "../todos/todo-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Todo list", () => {

    let todoList: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;

    let todoListServiceStub: {
        getTodos: () => Observable<Todo[]>
    };

    beforeEach(() => {
        // stub UserService for test purposes
        todoListServiceStub = {
            getTodos: () => Observable.of([
                {
                    id: "74838",
                    owner: "Jason",
                    status: "true",
                    body: "Let's go camping!",
                    category: "Camping"
                },
                {
                    id: "834783274",
                    owner: "Puck",
                    status: "false",
                    body: "I have to go back to the forest!",
                    category: "Home"
                },
                {
                    id: "8289379218",
                    owner: "Ashley",
                    status: "true",
                    body: "I wanna go home",
                    category: "Home"
                }
            ])
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodoListComponent ],
            // providers:    [ UserListService ]  // NO! Don't provide the real service!
            // Provide a test-double instead
            providers:    [ { provide: TodoListService, useValue: todoListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoListComponent);
            todoList = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it("contains all the todos", () => {
        expect(todoList.todos.length).toBe(3);
    });

    it("contains a todo whose owner is Puck", () => {
        expect(todoList.todos.some((todo: Todo) => todo.owner === "Puck" )).toBe(true);
    });

    it("contain a todo whose owner is Jason", () => {
        expect(todoList.todos.some((todo: Todo) => todo.owner === "Jason" )).toBe(true);
    });

    it("doesn't contain a todo whose owner is 'Santa'", () => {
        expect(todoList.todos.some((todo: Todo) => todo.owner === "Santa" )).toBe(false);
    });

    it("has two users that are 37 years old", () => {
        expect(todoList.todos.filter((todo: Todo) => todo.category === "Home").length).toBe(2);
    });

});