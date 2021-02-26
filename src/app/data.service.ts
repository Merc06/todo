import { Injectable } from '@angular/core';
import { Todo } from './models/Todo';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  Todos: Todo[] = [
    {
      content: "First Todo",
      completed: false
    },
    {
      content: "Second Todo",
      completed: true
    },
    {
      content: "Third Todo",
      completed: false
    }
  ]

  getTodos(): Observable<Todo[]> {
    return Observable.of(this.Todos);
  }

  constructor() { }
}
