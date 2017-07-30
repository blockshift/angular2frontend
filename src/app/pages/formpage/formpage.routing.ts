import { Routes, RouterModule } from '@angular/router';

import { FormpageComponent } from './formpage.component';

const routes: Routes = [
  {
    path: '',
    component: FormpageComponent
  }
];

export const routing = RouterModule.forChild(routes);