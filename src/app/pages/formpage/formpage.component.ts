import { Component , Input , ViewChild } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
@Component({
  selector: 'formpage',
  templateUrl:'./formpage.html',
})
export class FormpageComponent {
  constructor(private exampleService: AppService) {}
  testResponse:any;
  tokenfirstpart:any;
  tokensecondpart:any;	  
@ViewChild('myModal')
    modal: ModalComponent;
     IsVisible=true;

  onSubmit(form: any):void{
    console.log(form.name);
  	this.exampleService.getEnrollmentId(form.name,form.org)
  	.subscribe(data => {
                     var testRespons = data.token;
		     console.log(testRespons);	
		     this.tokenfirstpart=testRespons.substring(0,80);
		     this.tokensecondpart=testRespons.substring(81,175);		
		     this.modal.open();	
                     console.log("I SEE DATA HERE: ", this.testResponse);
               //      }
  		}
  		); 

  };
};
