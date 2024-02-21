import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Todo } from "../../Todo";
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [AddTodoComponent,FormsModule,CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
   @Input() todo!:Todo;
   @Output() todoDelete: EventEmitter<Todo> =new EventEmitter();
   @Output() todoCheckBox: EventEmitter<Todo> =new EventEmitter();
   
   constructor()
   {
    
   }
   onClick(){
    this.todoDelete.emit(this.todo);
    console.log("Event has been triggered");
   }
   onCheckBoxClick(todo:Todo){
    this.todoCheckBox.emit(todo);

   }

}
