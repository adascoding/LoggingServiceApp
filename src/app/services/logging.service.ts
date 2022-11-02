import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private logsSubject = new BehaviorSubject<string>('default log');
  logs$ = this.logsSubject.asObservable();

  constructor() { }

  updateLogs(message: string) {
    this.logsSubject.next(message);
    
  }
}
