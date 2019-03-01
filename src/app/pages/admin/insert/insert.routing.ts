import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert.component';

const childRoutes: Routes = [
    {
        path: '',
        component: InsertComponent    }
];

export const PersonalRouting = RouterModule.forChild(childRoutes);
