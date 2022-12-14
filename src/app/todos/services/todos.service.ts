import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, map, EMPTY } from 'rxjs'
import { environment } from 'src/environments/environment'
import { BeautyLoggerService } from 'src/app/core/services/beauty-logger.service'
import { Todo } from 'src/app/todos/models/todos.model'
import { BaseResponse } from 'src/app/core/models/core.model'

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos$ = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

  getTodos() {
    this.http
      .get<Todo[]>(`${environment.baseUrl}/todo-lists`)
      .pipe(catchError(this.errorHandle.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo(title: string) {
    this.http
      .post<BaseResponse<{ item: Todo }>>(`${environment.baseUrl}/todo-lists`, { title })
      .pipe(
        map(res => {
          if (res.resultCode === 0) return [res.data.item, ...this.todos$.getValue()]
          else return this.todos$.getValue()
        }),
        catchError(this.errorHandle.bind(this))
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  deleteTodo(todoId: string) {
    this.http
      .delete<BaseResponse>(`${environment.baseUrl}/todo-lists/${todoId}`)
      .pipe(
        map(res => {
          if (res.resultCode === 0) return this.todos$.getValue().filter(t => t.id !== todoId)
          else return this.todos$.getValue()
        }),
        catchError(this.errorHandle.bind(this))
      )
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  private errorHandle(err: HttpErrorResponse) {
    this.beautyLoggerService.log(err.message, 'error')
    return EMPTY
  }
}
