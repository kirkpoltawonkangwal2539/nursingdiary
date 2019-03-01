import { Routes, RouterModule } from '@angular/router';
import { TeacherCreateSubjectComponent } from './teacher-create-subject.component';

const routes: Routes = [
  { 
    path:'',
    component: TeacherCreateSubjectComponent
   },
];

export const TeacherCreateSubjectRoutes = RouterModule.forChild(routes);
