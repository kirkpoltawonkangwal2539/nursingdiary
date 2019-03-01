import { Routes, RouterModule } from '@angular/router';
import { MultipleInsertComponent } from './multiple-insert.component';

const routes: Routes = [
  {   path: '',
  component: MultipleInsertComponent   },
];

export const MultipleInsertRoutes = RouterModule.forChild(routes);
