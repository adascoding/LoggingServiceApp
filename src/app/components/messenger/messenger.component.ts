import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from 'src/app/services/logging.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  zinute:string = 'zinute';
  logs:string = 'empty';
  subscription: Subscription = new Subscription;

  constructor(private logsService: LoggingService) { }

  ngOnInit(): void {
    this.subscription = this.logsService.logs$.subscribe(logs => this.logs = logs)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  writeSomething(message: string): void {
    this.logsService.updateLogs(message);
  }

}
