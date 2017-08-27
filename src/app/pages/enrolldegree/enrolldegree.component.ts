import { Component,ViewChild } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'enrolldegree',
  templateUrl:'./enrolldegree.html',
})
export class EnrolldegreeComponent {
  constructor(private exampleService: AppService) {
}
@ViewChild('myModal')
    modal: ModalComponent;
     IsVisible=true;
    

   

  testResponse:any;
 

  

  onSubmit(form: any):void{
    
    console.log(form.department);
  	this.exampleService.enrolldegree(form.name,form.department,form.EnrollmentNumber,form.CGPA,form.University,form.Token)
  	.subscribe(data => {
                     this.testResponse = data["_body"] ;
                     this.modal.open();
                     console.log("I SEE DATA HERE: ", this.testResponse);
                     
               //      }
  		}
  		); 

  };

}
