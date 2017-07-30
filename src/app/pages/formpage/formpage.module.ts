import { NgModule }  from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';

import { FormpageComponent } from './formpage.component';
import { routing } from './formpage.routing';
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
    FormpageComponent
  ]
})
export class FormpageModule {}
