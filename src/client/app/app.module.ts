import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes }  from './app.router';
import {MomentModule} from 'angular2-moment';

// Pages
import { AppComponent }  from './app.component';
import { HomeComponent }  from './pages/home/home.component';
import { ProcessComponent }  from './pages/process/process.component';

// Components
import { SideMenuComponent }  from './shared/side-menu/sidemenu.component';
import { ProcessItemComponent }  from './shared/process-item/processitem.component';

// Services
import { Pm2Service } from './shared/pm2/pm2.service';
import { ConfigProviderService } from './shared/config-provider/config-provider.service';

// Pipes
import { FilterPipe } from './pipes/filter/filter.pipe';
import { FileSizePipe } from './pipes/file-size/file-size.pipe';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, MomentModule, routes ],
    providers:    [ Pm2Service, ConfigProviderService ],
    declarations: [ AppComponent, HomeComponent, ProcessComponent , SideMenuComponent, ProcessItemComponent, FilterPipe, FileSizePipe],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }