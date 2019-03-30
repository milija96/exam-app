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