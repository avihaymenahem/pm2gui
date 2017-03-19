import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProcessComponent } from './pages/process/process.component';

export const router: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'process/:id',
        component: ProcessComponent
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

