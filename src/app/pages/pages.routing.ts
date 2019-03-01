import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

export const childRoutes: Routes = [

    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            
            //Admin
            { path: 'insert', loadChildren: './admin/insert/insert.module#InsertModule' },  
            { path: 'list-student', loadChildren: './admin/list-student/list-student.module#ListStudentModule' },  
            { path: 'list-teacher', loadChildren: './admin/list-teacher/list-teacher.module#ListTeacherModule' }, 
            { path: 'edit-data', loadChildren: './admin/edit-data/edit-data.module#EditDataModule' }, 
            { path: 'multiple-insert', loadChildren: './admin/multiple-insert/multiple-insert.module#MultipleInsertModule' }, 
           
           
        
            //Teacher
            { path: 'teacher-create-subject', loadChildren: './teacher/teacher-create-subject/teacher-create-subject.module#TeacherCreateSubjectModule' }, 
            { path: 'teacher-diary', loadChildren: './teacher/teacher-diary/teacher-diary.module#TeacherDiaryModule' }, 
            { path: 'teacher-subject', loadChildren: './teacher/teacher-subject/teacher-subject.module#TeacherSubjectModule' },
            { path: 'teacher-subject-detail', loadChildren: './teacher/teacher-subject-detail/teacher-subject-detail.module#TeacherSubjectDetailModule' },
            { path: 'teacher-diary-detail', loadChildren: './teacher/teacher-diary-detail/teacher-diary-detail.module#TeacherDiaryDetailModule' }, 
            { path: 'teacher-change-password', loadChildren: './teacher/teacher-change-password/teacher-change-password.module#TeacherChangePasswordModule' },

           //Student
            { path: 'student-subject', loadChildren: './student/student-subject/student-subject.module#StudentSubjectModule' },          
            { path: 'student-diary', loadChildren: './student/student-diary/student-diary.module#StudentDiaryModule' }, 
            { path: 'student-diary-create', loadChildren: './student/student-diary-create/student-diary-create.module#StudentDiaryCreateModule' },
            { path: 'student-diary-detail', loadChildren: './student/student-diary-detail/student-diary-detail.module#StudentDiaryDetailModule' },
            { path: 'student-change-password', loadChildren: './student/student-change-password/student-change-password.module#StudentChangePasswordModule' },
            //------------------------------------------------------------------------------------------------------------------//
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
