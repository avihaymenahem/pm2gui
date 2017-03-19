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
var core_1 = require("@angular/core");
var pm2_service_1 = require("../../shared/pm2/pm2.service");
var ProcessItemComponent = (function () {
    function ProcessItemComponent(pm2Service) {
        this.pm2Service = pm2Service;
        this.standaloneMode = false;
    }
    ProcessItemComponent.prototype.stopProcess = function (id) {
        var self = this;
        self.pm2Service.stopProcess(id).subscribe(function (res) {
            self.getDataCallback();
        });
    };
    ProcessItemComponent.prototype.startProcess = function (id) {
        var self = this;
        self.pm2Service.startProcess(id).subscribe(function (res) {
            self.getDataCallback();
        });
    };
    ProcessItemComponent.prototype.deleteProcess = function (id) {
        var self = this;
        self.pm2Service.deleteProcess(id).subscribe(function (res) {
            self.getDataCallback();
        });
    };
    ProcessItemComponent.prototype.reloadProcess = function (id) {
        var self = this;
        self.pm2Service.reloadProcess(id).subscribe(function (res) {
            self.getDataCallback();
        });
    };
    return ProcessItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProcessItemComponent.prototype, "process", void 0);
__decorate([
    core_1.Input('cb'),
    __metadata("design:type", Function)
], ProcessItemComponent.prototype, "getDataCallback", void 0);
__decorate([
    core_1.Input('standalone-mode'),
    __metadata("design:type", Boolean)
], ProcessItemComponent.prototype, "standaloneMode", void 0);
ProcessItemComponent = __decorate([
    core_1.Component({
        selector: "process-item",
        template: require('html-loader!./processitem.component.html')
    }),
    __metadata("design:paramtypes", [pm2_service_1.Pm2Service])
], ProcessItemComponent);
exports.ProcessItemComponent = ProcessItemComponent;
//# sourceMappingURL=processitem.component.js.map