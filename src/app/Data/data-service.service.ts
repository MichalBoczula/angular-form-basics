import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BasicFromModule } from '../BasicForm/basic-from-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'http://localhost:4201/content';
  private url2: string = 'http://localhost:4201/error';

  constructor(private httpClient : HttpClient) { }

  postData(basicFromModule: BasicFromModule) : Observable<any> {
    return this.httpClient.post(this.url2, basicFromModule);
  }
}
