import { Component } from '@angular/core';
import { AppService } from '~/./../app/app.service';

@Component({
  selector: 'enrolldegree',
  templateUrl:'./enrolldegree.html',
})
export class EnrolldegreeComponent {
  constructor(private exampleService: AppService) {}
  testResponse:any;

  SubmitUser(name,org){

  	this.exampleService.getEnrollmentId(name,org)
  	.subscribe(data => {
                      this.testResponse = data ;
                      console.log("I SEE DATA HERE: ", this.testResponse);
                     }
  		);  
  }

}