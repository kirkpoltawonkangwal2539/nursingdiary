import { Routes, RouterModule } from '@angular/router';
import { TeacherSubjectComponent } from './teacher-subject.component';

const routes: Routes = [
  { 
    path:'',
    component: TeacherSubjectComponent
   },
];

export const TeacherSubjectRoutes = RouterModule.forChild(routes);
