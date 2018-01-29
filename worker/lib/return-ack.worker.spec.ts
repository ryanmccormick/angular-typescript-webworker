import { ReturnAckWorker } from './return-ack.worker';
import { WorkerMessage } from './shared/worker-message.model';
import { WORKER_TOPIC } from './shared/topic.constants';

describe('ReturnAckWorker', () => {
  let returnAckWorker: ReturnAckWorker;

  beforeEach(() => {
    returnAckWorker = new ReturnAckWorker();
  });

  it('should be defined', () => {
    expect(returnAckWorker).toBeDefined('ReturnAckWorker class unknown');
  });

  it('should return a worker message response with an update to the WorkerMessage data field', () => {
    const workerMessage = new WorkerMessage(WORKER_TOPIC.returnAck, 'HELLOWORLD!');
    const response = ReturnAckWorker.doWork(workerMessage);

    expect(response.data.toString()).toEqual('WORKERACK:::HELLOWORLD!');
  });

});
