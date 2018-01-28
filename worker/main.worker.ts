import { MyWorker } from './lib/my.worker';

export const worker = new MyWorker(self);
addEventListener('message', ($event: MessageEvent) => {
  worker.workerBroker($event);
});
