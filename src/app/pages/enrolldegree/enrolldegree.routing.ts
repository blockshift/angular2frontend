import { Routes, RouterModule } from '@angular/router';

import { EnrolldegreeComponent } from './enrolldegree.component';

const routes: Routes = [
  {
    path: '',
    component: EnrolldegreeComponent
  }
];

export const routing = RouterModule.forChild(routes);