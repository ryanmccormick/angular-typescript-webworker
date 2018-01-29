import { WorkerMessage } from '../../../../worker/lib/shared/worker-message.model';
import { Subscription } from 'rxjs/Subscription';
import { WORKER_TOPIC } from '../../../../worker/lib/shared/topic.constants';

export interface WorkerInput {

  workerTopic: string;
  currentWorkerMessage: WorkerMessage;
  workerServiceSubscription: Subscription;
  sendWorkerRequest: () => void;
}
