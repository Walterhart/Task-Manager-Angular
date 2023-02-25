/*
  Grabs task from backend 
*/
import { Injectable } from '@angular/core';
import { Tasks } from '../../task-test';
import { Task } from '../../Task';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Observable<Task[]> {
    const tasks = of(Tasks);
    return tasks;
  }
}
