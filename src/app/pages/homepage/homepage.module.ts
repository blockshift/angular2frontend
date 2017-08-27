import { NgModule }  from '@angular/core';
import { CommonModule }  from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap';
import { HomepageComponent } from './homepage.component';
import { routing }       from './homepage.routing';
import { OwlModule } from 'ng2-owl-carousel';
@NgModule({
  imports: [
    CommonModule,
    routing,
    CarouselModule,
    CollapseModule,
    OwlModule
  ],
  declarations: [
    HomepageComponent
  ]
})
export class HomepageModule {}

