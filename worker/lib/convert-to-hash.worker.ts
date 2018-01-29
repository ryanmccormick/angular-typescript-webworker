import { WorkerMessage } from './shared/worker-message.model';
import * as genMd5 from 'crypto-js/md5';

/**
 * Implementation for WORKER_TOPIC.convertToHash
 * Converts input data to MD5 Hash with the crypto-js library.
 */
export class ConvertToHashWorker {

  public static doWork(value: WorkerMessage): WorkerMessage {
    let data = '';

    if (value.data) {
      data = genMd5(value.data);
    }

    return new WorkerMessage(value.topic, data);
  }

}
