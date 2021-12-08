import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from './lesson.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  baseUrl: String = environment.baseUrl;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  findAll():Observable<Lesson[]> {
    const url = `${this.baseUrl}/lessons`
    return this.http.get<Lesson[]>(url)
  }

  findById(id: number): Observable<Lesson> {
    const url = `${this.baseUrl}/lessons/${id}`
    return this.http.get<Lesson>(url)
  }

  create(lesson: Lesson): Observable<Lesson>{
    const url = `${this.baseUrl}/lessons`
    return this.http.post<Lesson>(url, lesson);
  }

  delete(id: number): Observable<void>{
    const url = `${this.baseUrl}/lessons/${id}`
    return this.http.delete<void>(url);
  }

  update(lesson: Lesson):Observable<void> {
    const url = `${this.baseUrl}/lessons/${lesson.id}`
    return this.http.put<void>(url, lesson)
  }

  message(str: String): void {
    this.snackBar.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }
}