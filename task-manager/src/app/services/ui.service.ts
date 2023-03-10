import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
Observable
@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  toggleAddedTask(): void {
    this.showAddTask =!this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  toggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
