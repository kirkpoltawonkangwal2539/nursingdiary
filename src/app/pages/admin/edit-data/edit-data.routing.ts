import { Routes, RouterModule } from "@angular/router";
import { EditDataComponent } from "./edit-data.component";


const childRoutes: Routes = [
    {
        path: '',
        component: EditDataComponent    }
];

export const EditRouting = RouterModule.forChild(childRoutes);