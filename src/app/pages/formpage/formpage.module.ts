import { NgModule }  from '@angular/core';
import { CommonModule }  from '@angular/common';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormpageComponent } from './formpage.component';
import { routing } from './formpage.routing';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    NgbRatingModule,
    routing
  ],
  declarations: [
    FormpageComponent
  ]
})
export class FormpageModule {}
