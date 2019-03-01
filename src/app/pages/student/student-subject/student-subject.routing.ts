import { Routes, RouterModule } from '@angular/router';
import { StudentSubjectComponent } from './student-subject.component';

const routes: Routes = [
  { 
    path:'',
    component:StudentSubjectComponent
   },
];

export const StudentSubjectRoutes = RouterModule.forChild(routes);
