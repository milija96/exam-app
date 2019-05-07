<<<<<<< HEAD
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
=======
// import { NgModule } from "@angular/core";
// import {  }
// import { Routes, RouterModule } from "@angular/router";

// import { AuthComponent } from "./auth/auth.component";
// import { AuthGuardService as AuthGuard } from "./auth/auth-guard.service";
// import { RoleGuardService as RoleGuard } from "./auth/role-guard.service";

// const appRoutes: Routes = [
//     {path: '', component: HomeComponent , canActivate: [AuthGuard], children: [
//             {path: ':id/meni', component: MenuComponent, canActivate: [AuthGuard]}
//     ]},
    
//     {path: 'carth', component: CarthComponent, canActivate: [AuthGuard], children: [
//     ]},
//     {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
//     {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
//     {path: 'menu', component: MenuComponent, canActivate: [AuthGuard]},
//     {path: 'orders', component: OrdersComponent, canActivate: [ AuthGuard]},
//     {path: 'crud', component: CrudComponent, canActivate: [RoleGuard, AuthGuard], data: {
//         role: 'admin'
//     }},
//     {path: 'login', component: AuthComponent},
//     {path: '**', redirectTo: '' }
// ];
// @NgModule({
//     imports: [
//         RouterModule.forRoot(appRoutes)
//     ],
//     exports: [
//         RouterModule
//     ]
// })
// export class AppRoutingModule{
    
// }
>>>>>>> c2794f9dcc36da8482b89e757b8ab20d3108a4f1
