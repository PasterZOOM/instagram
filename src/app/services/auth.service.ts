import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod'

interface MeResponse {
  data: {
    id: number
    login: string
    email: string
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}

enum ResultCods {
  success = 0,
  error = 1,
}

@Injectable({
  providedIn: 'root',
})
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
