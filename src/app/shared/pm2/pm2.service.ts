import { Injectable, Inject } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class Pm2Service {
   private baseUrl: string = "http://localhost:3000";

   constructor(private http: Http) {}

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