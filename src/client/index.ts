import 'reflect-metadata';
import 'es6-shim';
import 'zone.js/dist/zone';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './assets/css/main.css';

import {enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);