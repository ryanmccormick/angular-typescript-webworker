/**
 * Data format that allows some ability for routing
 * of input to a specific web worker implementation.
 */
export class WorkerMessage {

  /**
   * Route topic.
   */
  topic: string;

  /**
   * Input data.
   */
  data: any;

  /**
   * Data format that allows some ability for routing
   * of input to a specific web worker implementation.
   * @param {string} topic Route topic.
   * @param data Input data.
   */
  constructor(topic: string, data: any) {
    this.topic = topic;
    this.data = data;
  }

}
