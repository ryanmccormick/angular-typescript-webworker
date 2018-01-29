import { Component, OnDestroy, OnInit } from '@angular/core';
import { WorkerService } from '../../worker/worker.service';
import { Subscription } from 'rxjs/Subscription';
import { WorkerMessage } from '../../../../worker/lib/shared/worker-message.model';
import { WORKER_TOPIC } from '../../../../worker/lib/shared/topic.constants';


@Component({
  selector: 'app-hash-from-input',
  templateUrl: './hash-from-input.component.html',
  styleUrls: ['./hash-from-input.component.scss']
})
export class HashFromInputComponent implements OnInit, OnDestroy {

  private _inputVal: string;
  workerTopic: string;
  currentWorkerMessage: WorkerMessage;
  workerServiceSubscription: Subscription;

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
    this.workerTopic = WORKER_TOPIC.convertToHash;
    this.listenForWorkerResponse();
  }

  ngOnDestroy(): void {
    if (this.workerServiceSubscription) {
      this.workerServiceSubscription.unsubscribe();
    }
  }

  get md5HashValue(): string {
    if (this.currentWorkerMessage && !!this.currentWorkerMessage.data === true) {
      return this.currentWorkerMessage.data;
    }
  }

  get inputVal(): string {
    return this._inputVal;
  }

  set inputVal(value: string) {
    this.setInputVal(value);
  }

  setInputVal(value: string) {
    this._inputVal = value;
    this.sendWorkerRequest(value);
  }

  sendWorkerRequest(value: string) {
    const workerMessage = new WorkerMessage(this.workerTopic, value);
    this.workerService.doWork(workerMessage);
  }

  clearAll() {
    this.inputVal = null;
    this.currentWorkerMessage = null;
  }

  private listenForWorkerResponse() {
    this.workerServiceSubscription = this.workerService.workerUpdate$
      .subscribe(data => this.workerResponseParser(data));
  }

  private workerResponseParser(message: WorkerMessage) {
    if (message.topic === this.workerTopic) {
      this.currentWorkerMessage = message;
    }
  }





}
