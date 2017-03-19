import {Component} from '@angular/core';
import MenuItem from './MenuItem';

@Component({
    selector: "side-menu",
    template: require('html-loader!./sidemenu.component.html')
})
export class SideMenuComponent {

    private MenuItems: Array<MenuItem>;

    constructor() {
        let self = this;
        self.initMenuItems();
    }

    initMenuItems(): void {
        let self = this;

        self.MenuItems = [];

        let HomeMenuItem = new MenuItem('home', 'Home', 'home', 'home');
        self.MenuItems.push(HomeMenuItem);
    }

}