import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AnyForUntypedForms } from '@angular/forms';


@Injectable()
export class UserService {

  private apiurl:string = environment.apiurl;

  constructor(private http:HttpClient) { }

  getCurrentUser(){
    return this.http.get(this.apiurl + 'api/users/currentUser/', { withCredentials: true });
  }

}
