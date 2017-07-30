import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppService {
  _state: InternalStateType = {};

  constructor(private http:Http) {
  }

  // already return a clone of the current state
 
    servicemethod(){

      return 'Hi this is first message from service';
    }


    getEnrollmentId(userName,org) {
    var data = "username="+userName+"&orgName="+org;  
    let headers = new Headers({ 'Content-Type': 'x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body = data;
    return this.http.post('localhost:4000/users', body, options )
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));
  }

 }
