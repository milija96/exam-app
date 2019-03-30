import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { TopMenuComponent } from './layout/menu/top-menu/top-menu.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { MenuItemsComponent } from './layout/menu/menu-items/menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopMenuComponent,
    LeftMenuComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
