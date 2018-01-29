import { WorkerMessage } from '../shared/worker-message.model';

export class MockWorker {

  currentMessage: WorkerMessage;

  constructor() { }

  postMessage(message: any, transfer?: any[]): void {
    this.currentMessage = message;
  }

  clearMessage(): void {
    this.currentMessage = null;
  }
}
