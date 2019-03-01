import { Routes, RouterModule } from "@angular/router";
import { StudentDiaryCreateComponent } from "./student-diary-create.component";

const childRoutes: Routes = [
    {
        path: '',
        component: StudentDiaryCreateComponent    }
];

export const DiaryRoutes = RouterModule.forChild(childRoutes);