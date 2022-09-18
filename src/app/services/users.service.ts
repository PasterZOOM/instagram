import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod'
import { map, Observable } from 'rxjs'

export interface UsersResponse {
  items: User[]
  totalCount: number
}

export interface User {
  name: string
  id: number
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  httpOptions = {
    withCredentials: true,
    headers: {
      'API-KEY': environment.apiKey,
    },
  }

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    return this.http
      .get<UsersResponse>(`${environment.baseNetworkUrl}/users?page=${page}`, this.httpOptions)
      .pipe(map(el => el.items))
  }
}
