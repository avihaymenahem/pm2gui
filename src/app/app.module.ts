import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes }  from './app.router';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './pages/home/home.component';

import { SideMenuComponent }  from './shared/side-menu/sidemenu.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routes ],
    providers:    [ ],
    declarations: [ AppComponent, HomeComponent , SideMenuComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }