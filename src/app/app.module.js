"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_router_1 = require("./app.router");
var angular2_moment_1 = require("angular2-moment");
// Pages
var app_component_1 = require("./app.component");
var home_component_1 = require("./pages/home/home.component");
var process_component_1 = require("./pages/process/process.component");
// Components
var sidemenu_component_1 = require("./shared/side-menu/sidemenu.component");
var processitem_component_1 = require("./shared/process-item/processitem.component");
// Services
var pm2_service_1 = require("./shared/pm2/pm2.service");
var config_provider_service_1 = require("./shared/config-provider/config-provider.service");
// Pipes
var filter_pipe_1 = require("./pipes/filter/filter.pipe");
var file_size_pipe_1 = require("./pipes/file-size/file-size.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, angular2_moment_1.MomentModule, app_router_1.routes],
        providers: [pm2_service_1.Pm2Service, config_provider_service_1.ConfigProviderService],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, process_component_1.ProcessComponent, sidemenu_component_1.SideMenuComponent, processitem_component_1.ProcessItemComponent, filter_pipe_1.FilterPipe, file_size_pipe_1.FileSizePipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map