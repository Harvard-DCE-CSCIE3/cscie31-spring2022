import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class PhotoService {
  // track maxId value, will be incremented when we create()
  maxId = 3;
  private apiurl:string = environment.apiurl;
  photoUrl:string = environment.photoUrl;

  constructor(private http:HttpClient) { }

  // two basic read methods follow: list and "getOne"
  listPhotos(){
    return this.http.get(this.apiurl + 'api/photos');
  }

  getPhoto(id:string){
    return this.http.get(this.apiurl + 'api/photos/' + id);
  }

  // Other CRUD methods TBD`
  createPhoto(photo: FormData){
    return this.http.post(this.apiurl+'api/photos', photo);
  }

  updatePhoto(id:string, data:any){
      return this.http.put(this.apiurl + 'api/photos/' + id, data);
  }

  deletePhoto(id:string){
    return this.http.delete(this.apiurl + 'api/photos/' + id);
  }

}
