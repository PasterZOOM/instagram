import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod'
import { MeResponse } from 'src/app/core/models/core.model'
import { ResultCods } from 'src/app/core/enums/core.enum'

@Injectable()
export class AuthService {
  isAuth = false

  constructor(private http: HttpClient) {}

  me() {
    this.http.get<MeResponse>(`${environment.baseNetworkUrl}/auth/me`).subscribe(res => {
      if (res.resultCode === ResultCods.success) {
        this.isAuth = true
      }
    })
  }
}
