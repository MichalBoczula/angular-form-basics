import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { BasicFromModule } from '../BasicForm/basic-from-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postData(basicFromModule: BasicFromModule) : Observable<BasicFromModule> {
    return of(basicFromModule);
  }
}
