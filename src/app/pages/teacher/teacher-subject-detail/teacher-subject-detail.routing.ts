import { Routes, RouterModule } from '@angular/router';
import { TeacherSubjectDetailComponent } from './teacher-subject-detail.component';

const routes: Routes = [
  { 
    path:'',
    component: TeacherSubjectDetailComponent
   },
];

export const TeacherSubjectDetailRoutes = RouterModule.forChild(routes);
