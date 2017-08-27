import { NgModule }  from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { EnrolldegreeComponent } from './enrolldegree.component';
import { routing } from './enrolldegree.routing';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    NgbRatingModule,
    Ng2Bs3ModalModule, 
    routing
  ],
  declarations: [
  	EnrolldegreeComponent
  ]
})
export class EnrolldegreeModule {}
