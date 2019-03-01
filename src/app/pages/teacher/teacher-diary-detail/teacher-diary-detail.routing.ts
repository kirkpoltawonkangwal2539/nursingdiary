import { Routes, RouterModule } from '@angular/router';
import { TeacherDiaryDetailComponent } from './teacher-diary-detail.component';

const routes: Routes = [
  { 
    path: '',
    component:TeacherDiaryDetailComponent
   },
];

export const TeacherDiaryDetailRoutes = RouterModule.forChild(routes);
