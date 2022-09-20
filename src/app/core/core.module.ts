import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthService } from 'src/app/core/services/auth.service'
import { BeautyLoggerService } from 'src/app/core/services/beauty-logger.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { CredentialsInterceptor } from 'src/app/core/interceptors/credentials.interceptor'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true },
    AuthService,
    BeautyLoggerService,
  ],
})
export class CoreModule {}
