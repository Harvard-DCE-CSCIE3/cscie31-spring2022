import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class PhotoService {
  // track maxId value, will be incremented when we create()
  maxId = 3;
  private apiurl:string = environment.apiurl;
  photoUrl:string = environment.photoUrl;

  constructor(private http:HttpClient) { }

  // two basic read methods follow: list and "getOne"
  listPhotos():Observable<any[]>{
    return this.http.get<any[]>(this.apiurl + 'api/photos');
  }

  getPhoto(id:string){
    return this.http.get(this.apiurl + 'api/photos/' + id);
  }

  // Other CRUD methods TBD`
  createPhoto(photoObject:any){
  }

  updatePhoto(id:string, data:any){
  }

  deletePhoto(id:string){
    return this.http.delete(this.apiurl + 'api/photos/' + id);
  }

}
