import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from 'src/app/components/home/home.component'
import { LoginComponent } from 'src/app/components/login/login.component'
import { ProfileComponent } from 'src/app/components/profile/profile.component'
import { TodosComponent } from 'src/app/components/todos/todos.component'
import { UsersComponent } from 'src/app/components/users/users.component'
import { PageNoteFoundComponent } from 'src/app/components/page-note-found/page-note-found.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'users', component: UsersComponent },
  { path: '404', component: PageNoteFoundComponent },
  { path: '**', redirectTo: '404' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
