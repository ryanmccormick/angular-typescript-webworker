import { WorkerMessage } from './shared/worker-message.model';

import { WORKER_TOPIC } from './shared/topic.constants';
import { ReturnAckWorker } from './return-ack.worker';
import { ConvertToHashWorker } from './convert-to-hash.worker';


export class MyWorker {

  workerCtx: any;
  created: Date;

  constructor(workerCtx: any) {
    this.workerCtx = workerCtx;
    this.created = new Date();
  }

  workerBroker($event: MessageEvent): void {
    const { topic, data } = $event.data as WorkerMessage;
    const workerMessage = new WorkerMessage(topic, data);

    switch (topic) {
      case WORKER_TOPIC.returnAck:
        this.workerReturnAck(workerMessage);
        break;
      case WORKER_TOPIC.convertToHash:
        this.workerConvertToHash(workerMessage);
        break;
      default:
        console.error('Topic Does Not Match');
    }
  }

  workerReturnAck(value: WorkerMessage): void {
    this.returnWorkResults(ReturnAckWorker.doWork(value));
  }

  workerConvertToHash(value: WorkerMessage): void {
    this.returnWorkResults(ConvertToHashWorker.doWork(value));
  }

  /**
   * Posts results back through to the worker
   * @param {WorkerMessage} message
   */
  private returnWorkResults(message: WorkerMessage): void {
    this.workerCtx.postMessage(message);
  }



}
