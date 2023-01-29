import { Injectable } from '@angular/core';
import { TASKS } from '../components/mock-task';
import { Task } from '../components/Task';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
  }
}
