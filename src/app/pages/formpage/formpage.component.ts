import { Component , Input } from '@angular/core';
import { AppService } from '~/./../app/app.service';

@Component({
  selector: 'formpage',
  templateUrl:'./formpage.html',
})
export class FormpageComponent {
  constructor(private exampleService: AppService) {}
  testResponse:any;

   @Input() name: string;
   @Input() org:  string;

  SubmitUser(name,org){

  	this.exampleService.getEnrollmentId(name,org)
  	.subscribe(data => {
                      this.testResponse = data ;
                      console.log("I SEE DATA HERE: ", this.testResponse);
                     }
  		);  
  }
}