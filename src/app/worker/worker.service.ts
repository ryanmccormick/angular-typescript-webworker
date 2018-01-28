import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';

import { WorkerMessage } from '../../../worker/lib/shared/worker-message.model';

@Injectable()
export class WorkerService {

  public readonly workerPath = 'assets/workers/worker.main.bundle.js';

  workerUpdate$: Observable<WorkerMessage>;
  private _worker: Worker;
  private _workerSubject: Subject<WorkerMessage>;
  private _workerMessageSubscription: Subscription;

  constructor() {
    this.workerInit();
  }

  doWork(workerMessage: WorkerMessage) {
    if (this._worker) {
      this._worker.postMessage(workerMessage);
    }
  }

  workerInit(): void {
    try {
      if (!!this._worker === false) {
        this._worker = new Worker(this.workerPath);
        this._workerSubject = new Subject<WorkerMessage>();
        this.workerUpdate$ = this._workerSubject.asObservable();

        this._workerMessageSubscription = Observable.fromEvent(this._worker, 'message')
          .subscribe((response: MessageEvent) => {
            if (this._workerSubject) {
              this._workerSubject.next(WorkerMessage.getInstance(response.data));
            }
          }, (error) => console.error('WORKER ERROR::', error));
      }
    } catch (exception) {
      console.error(exception);
    }

  }

}
