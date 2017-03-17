import './home.component.css';
import {Component} from '@angular/core';

@Component({
    selector: "main-app",
    template: require('html-loader!./home.component.html')
})
export class HomeComponent {
    constructor() {
        
    }
}