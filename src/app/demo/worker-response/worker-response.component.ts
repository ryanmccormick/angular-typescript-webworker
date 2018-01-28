import { Component, OnDestroy, OnInit } from '@angular/core';
import { WorkerService } from '../../worker/worker.service';
import { Subscription } from 'rxjs/Subscription';
import { WorkerMessage } from '../../../../worker/lib/shared/worker-message.model';
import { WORKER_TOPIC } from '../../../../worker/lib/shared/topic.constants';

@Component({
  selector: 'app-worker-response',
  templateUrl: './worker-response.component.html',
  styleUrls: ['./worker-response.component.scss']
})
export class WorkerResponseComponent implements OnInit, OnDestroy {

  title = 'Demo: Simple Worker Response';
  workerResponse: string;
  workerServiceSubscription: Subscription;

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.listenForWorkerResponse();
  }

  ngOnDestroy(): void {
    if (this.workerServiceSubscription) {
      this.workerServiceSubscription.unsubscribe();
    }
  }

  sendWorkerRequest() {
    const workerMessage = new WorkerMessage(WORKER_TOPIC.returnAck, 'Hello World!!');
    this.workerService.doWork(workerMessage);
  }

  clearResponse() {
    if (this.workerResponse) {
      this.workerResponse = null;
    }
  }

  private listenForWorkerResponse() {
    this.workerServiceSubscription = this.workerService.workerUpdate$
      .subscribe(data => this.workerResponseParser(data));
  }

  private workerResponseParser(message: WorkerMessage) {
    if (message.topic === WORKER_TOPIC.returnAck) {
      this.workerResponse = message.data;
    }
  }


}
