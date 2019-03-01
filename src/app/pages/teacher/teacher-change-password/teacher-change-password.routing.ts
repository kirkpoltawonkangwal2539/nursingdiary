import { Routes, RouterModule } from '@angular/router';
import { TeacherChangePasswordComponent } from './teacher-change-password.component';

const routes: Routes = [
  {  
    path:'',
    component:TeacherChangePasswordComponent
  },
];

export const TeacherChangePasswordRoutes = RouterModule.forChild(routes);
