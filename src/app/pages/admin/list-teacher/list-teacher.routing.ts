import { Routes, RouterModule } from "@angular/router";
import { ListTeacherComponent } from "./list-teacher.component";


const childRoutes: Routes = [
    {
        path: '',
        component: ListTeacherComponent  ,
      }
];

export const ListTeacherRouting = RouterModule.forChild(childRoutes);