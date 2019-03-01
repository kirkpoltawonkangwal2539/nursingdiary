import { Routes, RouterModule } from '@angular/router';
import { TeacherDiaryComponent } from './teacher-diary.component';

const routes: Routes = [
  { 
    path:'',
    component: TeacherDiaryComponent
   },
];

export const TeacherDiaryRoutes = RouterModule.forChild(routes);
