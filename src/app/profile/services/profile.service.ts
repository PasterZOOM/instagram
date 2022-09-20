import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod'
import { Observable } from 'rxjs'
import { ProfileResponse } from 'src/app/profile/models/profile.model'

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(userId: number): Observable<ProfileResponse> {
    return this.http.get<ProfileResponse>(`${environment.baseNetworkUrl}/profile/${userId}`)
  }
}
