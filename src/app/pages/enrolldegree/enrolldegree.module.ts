import { NgModule }  from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';

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
    routing
  ],
  declarations: [
  	EnrolldegreeComponent
  ]
})
export class EnrolldegreeModule {}
