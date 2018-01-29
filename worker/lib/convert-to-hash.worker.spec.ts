import { ConvertToHashWorker } from './convert-to-hash.worker';
import { WorkerMessage } from './shared/worker-message.model';
import { WORKER_TOPIC } from './shared/topic.constants';

describe('ConvertToHashWorker', () => {
  let convertToHashWorker: ConvertToHashWorker;

  beforeEach(() => {
    convertToHashWorker = new ConvertToHashWorker();
  });

  it('should be defined', () => {
    expect(convertToHashWorker).toBeDefined('ConvertToHashWorker class unknown');
  });

  describe('ConvertToHashWorker#doWork', () => {

    it('should be defined', () => {
      expect(ConvertToHashWorker.doWork).toBeDefined();
    });

    it('should return a worker message with am md5 hash data value', () => {
      const inputMessage = new WorkerMessage(WORKER_TOPIC.convertToHash, '12345678923');
      const md5Message = ConvertToHashWorker.doWork(inputMessage);

      expect(md5Message.data.toString()).toEqual('cb3df55a5e19365718083f2de84896d8');
    });

    it('should handle an undefined message data value gracefully', () => {
      const inputMessage = new WorkerMessage(WORKER_TOPIC.convertToHash, undefined);
      const md5Message = ConvertToHashWorker.doWork(inputMessage);

      expect(md5Message.data.toString()).toEqual('');
    });

    it('should handle a null message data value gracefully', () => {
      const inputMessage = new WorkerMessage(WORKER_TOPIC.convertToHash, null);
      const md5Message = ConvertToHashWorker.doWork(inputMessage);

      expect(md5Message.data.toString()).toEqual('');
    });

    it('should handle an empty message data value gracefully', () => {
      const inputMessage = new WorkerMessage(WORKER_TOPIC.convertToHash, '');
      const md5Message = ConvertToHashWorker.doWork(inputMessage);

      expect(md5Message.data.toString()).toEqual('');
    });

  });

});
