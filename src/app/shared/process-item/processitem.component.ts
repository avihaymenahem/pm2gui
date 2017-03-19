import {Component, Input} from '@angular/core';
import {Pm2Service} from '../../shared/pm2/pm2.service';

@Component({
    selector: "process-item",
    template: require('html-loader!./processitem.component.html')
})
export class ProcessItemComponent {
    @Input()
    process: object;

    @Input('cb')
    getDataCallback: Function;

    @Input('standalone-mode')
    standaloneMode: boolean = false;

    constructor(private pm2Service: Pm2Service) {}

    stopProcess(id: number) {
        let self = this;
        self.pm2Service.stopProcess(id).subscribe(res => {
            self.getDataCallback();
        });
    }

    startProcess(id: number) {
        let self = this;
        self.pm2Service.startProcess(id).subscribe(res => {
            self.getDataCallback();
        });
    }

    deleteProcess(id: number) {
        let self = this;
        self.pm2Service.deleteProcess(id).subscribe(res => {
            self.getDataCallback();
        });
    }

    reloadProcess(id: number) {
        let self = this;
        self.pm2Service.reloadProcess(id).subscribe(res => {
            self.getDataCallback();
        });
    }
}