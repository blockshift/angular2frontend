import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

export const routing = RouterModule.forChild(routes);