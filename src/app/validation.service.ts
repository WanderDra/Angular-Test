import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http: HttpClient) { }

  validation(username: string, password: string): Observable<boolean> {
    return this.http.get('assets/users.json').pipe(
      map(data => {
        let users = data as Array<{ username: string, password: string }>
        let res = false;
        for (let i = 0; i < users.length; ++i){
          if (users[i].username === username) {
            if (users[i].password === password) { 
              return true;
            }
          }
        }
      return false
    })
    )
  }
}
