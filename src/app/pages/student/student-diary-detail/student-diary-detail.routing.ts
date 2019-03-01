import { Routes, RouterModule } from '@angular/router';
import { StudentDiaryDetailComponent } from './student-diary-detail.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDiaryDetailComponent
  },
];

export const StudentDiaryDetailRoutes = RouterModule.forChild(routes);
