import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  title: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptedDate: number | null;
  type: keyof TaskStateModel['config'];
};
