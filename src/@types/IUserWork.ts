import * as moment from 'moment';

export interface IUserWork {
  id?: number | string;
  description?: string;
  finishAt?: moment.Moment | null;
  projectId: number;
  source?: string | null;
  startAt?: moment.Moment;
  taskId: number;
  taskTypeId?: number;
  value?: number;
  duration?: string;
}
