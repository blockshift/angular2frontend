import { Component , Input } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'formpage',
  templateUrl:'./formpage.html',
})
export class FormpageComponent {
  constructor(private exampleService: AppService) {}
  testResponse:any;

  onSubmit(form: any):void{
    console.log(form.name);
  	this.exampleService.getEnrollmentId(form.name,form.org)
  	.subscribe(data => {
                     this.testResponse = data ;
                     console.log("I SEE DATA HERE: ", this.testResponse);
               //      }
  		}
  		); 

  };
};
