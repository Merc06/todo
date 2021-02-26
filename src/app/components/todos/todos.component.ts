import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { DataService } from "../../data.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [DataService]
})
export class TodosComponent implements OnInit {

  Todos:Todo[] = [];
  todoForm: FormGroup;

  constructor(private dservice: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    this.getTodoFromService();

    this.todoForm = this.fb.group({
      
      inputTodo: [null, [Validators.required, Validators.minLength(5)]]
  
    });

  }

  get todoFormControl() {
    return this.todoForm.controls;
  }

  getTodoFromService() {
    this.dservice.getTodos().subscribe(todoList => this.Todos = todoList);
  }
  
  toggleDone(id:number) {
    this.Todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      
      return v;
    })
  }

  deleteTodo(id:number) {
    this.Todos =  this.Todos.filter((v, i) => i != id);
  }

  addTodo() {
    if (this.todoForm.valid) {
      this.Todos.push({
        content: this.todoForm.value.inputTodo,
        completed: false
      })
      this.todoForm.reset();
      console.log(this.todoForm.value.inputTodo);
    }
  }

}
