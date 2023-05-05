import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {

  todo: Todo[] = [];
  localItem: string | null = "";
  constructor() {
    this.localItem = localStorage.getItem("todoList");
    if(this.localItem == null){
      this.todo = [];
    }
    else{
      this.todo = JSON.parse("todoList");
      console.log(this.todo);
      
    }
  
  }
  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    const index = this.todo.indexOf(todo);
    this.todo.splice(index, 1);
    localStorage.setItem("todoList",JSON.stringify(this.todo));
  }
  addTodo(todo: Todo){
    this.todo.push(todo);
    localStorage.setItem("todoList",JSON.stringify(this.todo));
  }
}
