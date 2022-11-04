import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  logs: string[] = [];
  subscription: Subscription = new Subscription;
  
  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.subscription = this.loggingService.logs$.subscribe(logs$ => this.logs = logs$)
    this.loggingService.updateLogs('is event')
  }

}
