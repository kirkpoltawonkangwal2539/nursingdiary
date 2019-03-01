import { Routes, RouterModule } from '@angular/router';
import { StudentChangePasswordComponent } from './student-change-password.component';

const routes: Routes = [
  {  
    path:'',
    component:StudentChangePasswordComponent
  },
];

export const StudentChangePasswordRoutes = RouterModule.forChild(routes);
