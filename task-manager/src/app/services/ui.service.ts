import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
Observable
@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddedAtask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }
  toggleAddedTask(): void {
    this.showAddedAtask =!this.showAddedAtask;
    this.subject.next(this.showAddedAtask);
  }

  toggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
