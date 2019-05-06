import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { TopMenuComponent } from './layout/menu/top-menu/top-menu.component';
import { LeftMenuComponent } from './layout/menu/left-menu/left-menu.component';
import { MenuItemsComponent } from './layout/menu/menu-items/menu-items.component';
import { StatisticsComponent } from './layout/parts/statistics/statistics.component';
import { GroupsComponent } from './layout/parts/groups/groups.component';
import { SubjectsComponent } from './layout/parts/subjects/subjects.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopMenuComponent,
    LeftMenuComponent,
    MenuItemsComponent,
    StatisticsComponent,
    GroupsComponent,
    SubjectsComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
