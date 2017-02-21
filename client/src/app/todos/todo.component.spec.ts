import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { Todo } from "./todo";
import { TodoComponent } from "./todo.component";
import { TodoListService } from "./todo-list.service";
import { Observable } from "rxjs";
import { PipeModule } from "../../pipe.module";

describe("Todo component", () => {

    let todoComponent: TodoComponent;
    let fixture: ComponentFixture<TodoComponent>;

    let todoListServiceStub: {
        getTodoById: (todoId: string) => Observable<Todo>
    };

    beforeEach(() => {
        // stub TodoService for test purposes
        todoListServiceStub = {
            getTodoById: (todoId: string) => Observable.of([
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
                    category: "Relocation"
                },
                {
                    id: "8289379218",
                    owner: "Ashley",
                    status: "true",
                    body: "I wanna go home",
                    category: "Home"
                }
            ].find(todo => todo.id === todoId))
        };

        TestBed.configureTestingModule({
            imports: [PipeModule],
            declarations: [ TodoComponent ],
            providers:    [ { provide: TodoListService, useValue: todoListServiceStub } ]
        })
    });

    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(TodoComponent);
            todoComponent = fixture.componentInstance;
        });
    }));

    it("Retrieve Ashley by ID", () => {
        todoComponent.setId("8289379218");
        expect(todoComponent.todo).toBeDefined();
        expect(todoComponent.todo.owner).toBe("Ashley");
        expect(todoComponent.todo.body).toBe("I wanna go home");
    });

    it("returns undefined for Santa", () => {
        todoComponent.setId("Santa");
        expect(todoComponent.todo).not.toBeDefined();
    });

});