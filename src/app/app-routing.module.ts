import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StatisticsComponent } from 'src/app/layout/parts/statistics/statistics.component';
import { GroupsComponent } from 'src/app/layout/parts/groups/groups.component';
import { SubjectsComponent } from 'src/app/layout/parts/subjects/subjects.component';
import { LoginComponent } from 'src/app/layout/login/login.component';
import { RoleGuardService as RoleGuard } from 'src/app/services/role-guard.service';
const appRoutes: Routes = [
    {path: '', component: StatisticsComponent},
    {path: 'subjects', component: SubjectsComponent},
    {path: 'groups', component: GroupsComponent, canActivate: [RoleGuard]},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'subjects' }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    
}