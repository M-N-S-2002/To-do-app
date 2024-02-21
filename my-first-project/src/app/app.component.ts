import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodosComponent,CommonModule,TodoItemComponent,AddTodoComponent,FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular App';
}

