import { Routes, RouterModule } from "@angular/router";
import { ListStudentComponent } from "./list-student.component";

const childRoutes: Routes = [
    {
        path: '',
        component: ListStudentComponent    }
];

export const ListStudentRouting = RouterModule.forChild(childRoutes);