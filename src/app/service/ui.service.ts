import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subjet = new Subject<any>();
  constructor() {}
  toggleAddTask(): void {
    //console.log('ADD TASK !!');
    this.showAddTask = !this.showAddTask;
    this.subjet.next(this.showAddTask);
  }
  onToggle(): Observable<any> {
    return this.subjet.asObservable();
  }
}
