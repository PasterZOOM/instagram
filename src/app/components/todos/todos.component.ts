import { Component, OnInit } from '@angular/core'
import { TodosService } from 'src/app/services/todos.service'
import { Observable } from 'rxjs'

export interface Todo {
  addedDate: string
  id: string
  order: number
  title: string
}
export interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

@Component({
  selector: 'inst-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<Todo[]>
  error = ''

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos$ = this.todosService.todos$
    this.getTodos()
  }

  getTodos() {
    this.todosService.getTodos()
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = 'Angular ' + randomNumber
    this.todosService.createTodo(title)
  }

  deleteTodo() {
    const todoId = 'f5eb8226-26f7-4c56-a5a8-e45fad8171f2'
    this.todosService.deleteTodo(todoId)
  }
}
