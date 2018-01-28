import { WorkerMessage } from './shared/worker-message.model';

export class ReturnAckWorker {

  public static doWork(value: WorkerMessage): WorkerMessage {
    const data = 'WORKERACK:::' + value.data;
    return new WorkerMessage(value.topic, data);
  }
}
