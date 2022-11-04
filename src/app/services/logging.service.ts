import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private logsSubject = new BehaviorSubject<string[]>([]);
  logs$ = this.logsSubject.asObservable();

  constructor() { }

  updateLogs(message: string) {
    const fullMessage: string = new Date().toISOString() + ' ' + message;
    const currentMessage: string[] = this.logsSubject.getValue();
    currentMessage.push(fullMessage)
    this.logsSubject.next(currentMessage);
    
  }
}
