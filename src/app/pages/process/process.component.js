"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./process.component.css");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pm2_service_1 = require("../../shared/pm2/pm2.service");
var ProcessComponent = (function () {
    function ProcessComponent(route, pm2Service) {
        this.route = route;
        this.pm2Service = pm2Service;
        var self = this;
        self.route.params.subscribe(function (params) {
            self.getDataById(parseInt(params["id"]));
        });
    }
    ProcessComponent.prototype.getDataById = function (id) {
        var self = this;
        self.pm2Service.getProcesses().subscribe(function (processes) {
            var selectedProcess = processes.filter(function (item) {
                return parseInt(item["pm2_env"]["pm_id"]) === id;
            });
            self.processItem = selectedProcess ? selectedProcess[0] : '';
        });
    };
    return ProcessComponent;
}());
ProcessComponent = __decorate([
    core_1.Component({
        selector: "main-app",
        template: require('html-loader!./process.component.html')
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, pm2_service_1.Pm2Service])
], ProcessComponent);
exports.ProcessComponent = ProcessComponent;
//# sourceMappingURL=process.component.js.map