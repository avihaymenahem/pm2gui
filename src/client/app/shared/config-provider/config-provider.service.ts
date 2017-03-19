import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProviderService {

    private configObject: Object;

    constructor() {
        let self = this;
        self.configObject = require("../../../../../config/config.json");
    }

    get(key: string) {
        let self = this;
        return self.configObject[key];
    }
}