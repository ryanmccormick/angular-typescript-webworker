import { MyWorker } from './my.worker';
import { MockWorker } from './spec/mock-worker';
import { WorkerMessage } from './shared/worker-message.model';
import { WORKER_TOPIC } from './shared/topic.constants';

describe('MyWorker', () => {
  let mockWorker: MockWorker;
  let myWorker: MyWorker;

  beforeEach(() => {
    mockWorker = new MockWorker();
    myWorker = new MyWorker(mockWorker);
  });

  describe('MyWorker Interface', () => {

    it('MyWorker#workerCtx should be defined', () => {
      expect(myWorker.workerCtx).toBeDefined('Worker context has not been defined');
    });

    it('MyWorker#created should be defined and truthy', () => {
      expect(myWorker.created).toBeDefined('Worker created has not been defined');
      expect(myWorker.created).toBeTruthy('Worker created time has not been set');
    });

    it('MyWorker#workerBroker should be defined and truthy', () => {
      expect(myWorker.workerBroker).toBeDefined('Worker broker has not been defined');
      expect(myWorker.workerBroker).toBeTruthy('Worker broker has not been set');
    });

    it('MyWorker#workerReturnAck should be defined', () => {
      expect(myWorker.workerReturnAck).toBeDefined('workerReturnAck has not been defined');
    });

    it('MyWorker#workerConvertToHash should be defined', () => {
      expect(myWorker.workerConvertToHash).toBeDefined('workerConvertToHash has not been defined');
    });
  });

  describe('MyWorker#workerBroker', () => {
    beforeEach(() => {
      mockWorker.clearMessage();
    });

    it('MyWorker with topic returnAck should return a message', () => {
      const workerMessage = new WorkerMessage(WORKER_TOPIC.returnAck, 'HELLOWORLD!');
      const mockEvent = { data: workerMessage } as MessageEvent;
      myWorker.workerBroker(mockEvent);

      expect(mockWorker.currentMessage.topic.toString()).toEqual('returnAck');
      expect(mockWorker.currentMessage.data.toString()).toEqual('WORKERACK:::HELLOWORLD!');
    });

    it('MyWorker with topic convertToHash should return a message', () => {
      const workerMessage = new WorkerMessage(WORKER_TOPIC.convertToHash, 'HELLOWORLD!');
      const mockEvent = { data: workerMessage } as MessageEvent;
      myWorker.workerBroker(mockEvent);

      expect(mockWorker.currentMessage.topic.toString()).toEqual('convertToHash');
      expect(mockWorker.currentMessage.data.toString()).toEqual('7e493585bdd4173fd4fd0d54fb898400');
    });

  });

});
