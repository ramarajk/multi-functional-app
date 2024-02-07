import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment'
import { methodTypes } from '../models/methodTypes'
@Injectable({
    providedIn: 'root'
})
export class callMiddlewareService {

    constructor(private http: HttpClient) { }

    callMiddlewareService(): Observable<any> {

        let serviceUrl = "https://65bc6cad52189914b5bde364.mockapi.io/hugedata/retrieve";
        return this.http.get("https://65bc6cad52189914b5bde364.mockapi.io/hugedata/retrieve");
    }
}