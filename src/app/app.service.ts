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
    console.log("username",userName);
    let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body1 = new URLSearchParams();
    body1.set('username', userName);
    body1.set('orgName', org);
    console.log("body1 logs",body1)
    let body = body1.toString(); 
    console.log('server logs',body);
    return this.http.post('http://localhost:4000/users', body, options )
    .map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));
  };



   enrolldegree(name,depart,enrollnumber,cgpa,university,token){
     console.log(depart);	
     let peer = '["localhost:10151","localhost:10351"]';
     let fcn = 'initDegree';	
     let argument = name+','+depart+','+enrollnumber+','+cgpa+','+university;
     let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer '+token});
     let options = new RequestOptions({ headers: headers });
     
     let body1 = {
             peers: ["localhost:10151","localhost:10351"],
             fcn: fcn,
             args: argument
                }
let body = JSON.stringify(body1);
     console.log("body1 logs",body1);
     console.log('server logs',body);
     return this.http.post('http://localhost:4000/channels/mychannel/chaincodes/mycc', body, options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));

};


  getblockchaininfo(){
    
       let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDUwNzc0OTAsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE1MDQ3MTc0OTB9.C_YtouZnImkY2MaVxIwU5U-O91RzzPWnzea8VInc8Ig'});
       let options = new RequestOptions({ headers: headers });
        
     return this.http.get('http://localhost:4000/channels/mychannel?peer=peer1', options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));

  } 



  fetchblock(blocknumber){
 console.log("server logs",blocknumber);
let headers = new Headers({'cache-control':'no-cache', 'Content-Type': 'application/json', 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MDUwNzc0OTAsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Im9yZzEiLCJpYXQiOjE1MDQ3MTc0OTB9.C_YtouZnImkY2MaVxIwU5U-O91RzzPWnzea8VInc8Ig'});
       let options = new RequestOptions({ headers: headers });
        
     return this.http.get('http://localhost:4000/channels/mychannel/blocks/'+blocknumber+'?peer=peer2', options )
    .map((res: Response) => res)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error shit bang in'));


}


 }
