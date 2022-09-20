import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingRoutingModule } from 'src/app/app-routing-routing.module'
import { SharedModule } from 'src/app/shared/shared.module'
import { AuthModule } from 'src/app/auth/auth.module'
import { UsersModule } from 'src/app/users/users.module'
import { ProfileModule } from 'src/app/profile/profile.module'
import { HomeModule } from 'src/app/home/home.module'
import { CoreModule } from 'src/app/core/core.module'
import { TodosModule } from 'src/app/todos/todos.module'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    SharedModule,
    AuthModule,
    UsersModule,
    ProfileModule,
    HomeModule,
    CoreModule,
    TodosModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
