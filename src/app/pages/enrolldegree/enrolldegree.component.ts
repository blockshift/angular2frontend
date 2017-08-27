import { Component,ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { AppService } from '~/./../app/app.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'enrolldegree',
  templateUrl:'./enrolldegree.html',
})
export class EnrolldegreeComponent {
  constructor(private exampleService: AppService,public modal:Modal,vcRef: ViewContainerRef) {
modal.defaultViewContainer = vcRef;}
  testResponse:any;
  

  onClick() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }

  onSubmit(form: any):void{
    console.log(form.department);
  	this.exampleService.enrolldegree(form.name,form.department,form.EnrollmentNumber,form.CGPA,form.University,form.Token)
  	.subscribe(data => {
                     this.testResponse = data["_body"] ;
                     console.log("I SEE DATA HERE: ", this.testResponse);
                     
               //      }
  		}
  		); 

  };

}
