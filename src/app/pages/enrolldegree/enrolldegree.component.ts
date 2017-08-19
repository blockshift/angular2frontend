import { Component } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'enrolldegree',
  templateUrl:'./enrolldegree.html',
})
export class EnrolldegreeComponent {
  constructor(private exampleService: AppService) {}
  testResponse:any;

  onSubmit(form: any):void{
    console.log(form.name);
  	this.exampleService.enrolldegree(form.name,form.department,form.EnrollmentNumber,form.CGPA,form.University,form.Token)
  	.subscribe(data => {
                     this.testResponse = data ;
                     console.log("I SEE DATA HERE: ", this.testResponse);
               //      }
  		}
  		); 

  };

}
