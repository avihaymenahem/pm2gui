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
var MenuItem_1 = require("./MenuItem");
var SideMenuComponent = (function () {
    function SideMenuComponent() {
        var self = this;
        self.initMenuItems();
    }
    SideMenuComponent.prototype.initMenuItems = function () {
        var self = this;
        self.MenuItems = [];
        var HomeMenuItem = new MenuItem_1.default('home', 'Home', 'home');
        self.MenuItems.push(HomeMenuItem);
        var AboutMenuItem = new MenuItem_1.default('about', 'About', 'about');
        self.MenuItems.push(AboutMenuItem);
    };
    return SideMenuComponent;
}());
SideMenuComponent = __decorate([
    core_1.Component({
        selector: "side-menu",
        template: require('html-loader!./sidemenu.component.html')
    }),
    __metadata("design:paramtypes", [])
], SideMenuComponent);
exports.SideMenuComponent = SideMenuComponent;
//# sourceMappingURL=sidemenu.component.js.map