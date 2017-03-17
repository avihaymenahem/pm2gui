"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("es6-shim");
require("zone.js/dist/zone");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/css/bootstrap-theme.min.css");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=index.js.map