import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Dashboard } from './dashboard.model'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl: String = environment.baseUrl;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  getData():Observable<Dashboard> {
    const url = `${this.baseUrl}/dashboard`
    return this.http.get<Dashboard>(url)
  }
}