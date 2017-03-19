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
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var Pm2Service = (function () {
    function Pm2Service(http) {
        this.http = http;
        this.baseUrl = "http://localhost:3000";
    }
    Pm2Service.prototype.getProcesses = function () {
        var self = this, url = self.baseUrl + "/list";
        return self.http.get(url)
            .map(function (res) {
            return res.json();
        });
    };
    Pm2Service.prototype.stopProcess = function (id) {
        var self = this, url = self.baseUrl + "/stop/" + id;
        return self.http.get(url).map(function (res) {
            return res.json();
        });
    };
    Pm2Service.prototype.startProcess = function (id) {
        var self = this, url = self.baseUrl + "/start/" + id;
        return self.http.get(url).map(function (res) {
            return res.json();
        });
    };
    Pm2Service.prototype.deleteProcess = function (id) {
        var self = this, url = self.baseUrl + "/delete/" + id;
        return self.http.get(url).map(function (res) {
            return res.json();
        });
    };
    Pm2Service.prototype.reloadProcess = function (id) {
        var self = this, url = self.baseUrl + "/reload/" + id;
        return self.http.get(url).map(function (res) {
            return res.json();
        });
    };
    return Pm2Service;
}());
Pm2Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], Pm2Service);
exports.Pm2Service = Pm2Service;
//# sourceMappingURL=pm2.service.js.map