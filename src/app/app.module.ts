import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { TodosComponent } from './components/todos/todos.component'
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [AppComponent, TodosComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
