import { Routes, RouterModule } from '@angular/router';
import { StudentDiaryComponent } from './student-diary.component';

const routes: Routes = [
  { 
    path:'',
    component:StudentDiaryComponent
   },
];

export const StudentDiaryRoutes = RouterModule.forChild(routes);
