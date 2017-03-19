import { Injectable, Inject } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ConfigProviderService} from "../config-provider/config-provider.service";

@Injectable()
export class Pm2Service {
   private baseUrl: string;

   constructor(private http: Http, private configProvider: ConfigProviderService) {
        let self = this;
        self.baseUrl = `${configProvider.get("WEB_API_SITE")}:${configProvider.get("WEB_API_PORT")}`;
   }

   public getServerInfo() {
       let self = this,
           url = self.baseUrl + "/serverinfo";

       return self.http.get(url)
           .map((res: Response) => {
               return res.json();
           });
   }

   public getProcesses(): Observable<any> {
       let self = this,
           url = self.baseUrl + "/list";

       return self.http.get(url)
           .map((res: Response) => {
                return res.json();
           });
   }

   public stopProcess(id: number) {
       let self = this,
           url = `${self.baseUrl}/stop/${id}`;

       return self.http.get(url).map((res: Response) => {
           return res.json();
       });
   }

   public startProcess(id: number) {
       let self = this,
           url = `${self.baseUrl}/start/${id}`;

       return self.http.get(url).map((res: Response) => {
           return res.json();
       });
   }

   public deleteProcess(id: number) {
       let self = this,
           url = `${self.baseUrl}/delete/${id}`;

       return self.http.get(url).map((res: Response) => {
           return res.json();
       });
   }

   public reloadProcess(id: number) {
       let self = this,
           url = `${self.baseUrl}/reload/${id}`;

       return self.http.get(url).map((res: Response) => {
           return res.json();
       });
   }

}