import './process.component.css';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pm2Service } from '../../shared/pm2/pm2.service';

@Component({
    selector: "main-app",
    template: require('html-loader!./process.component.html')
})
export class ProcessComponent {
    processItem: any;
    private sub: any;

    constructor(private route: ActivatedRoute, private pm2Service: Pm2Service) {
        let self = this;
        self.route.params.subscribe(params => {
            self.getDataById(parseInt(params["id"]));
        });
    }

    getDataById(id: number) {
        let self = this;
        self.pm2Service.getProcesses().subscribe(processes => {
            let selectedProcess = processes.filter((item: Object) => {
                return parseInt(item["pm2_env"]["pm_id"]) === id;
            });
            self.processItem = selectedProcess ? selectedProcess[0] : '';
        });
    }
}