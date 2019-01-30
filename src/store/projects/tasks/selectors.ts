import { createSelector } from 'reselect';

import { DownloadList } from '../../@common/entities';
import { Project } from '../Project';
import { openedProject, selectedProject } from '../selectors';
import { ProjectTask } from './ProjectTask';

export const projectTasks = createSelector(
  openedProject,
  (project: Project = new Project()): DownloadList<ProjectTask> => project.tasks
);

export const selectedProjectTasks = createSelector(
  selectedProject,
  (project: Project = new Project()): DownloadList<ProjectTask> => project.tasks
);

export const getSelectedProjectTaskById = createSelector(
  selectedProjectTasks,
  (tasks: DownloadList<ProjectTask>) => (id: number) => tasks.list.find(el => el.id === id)
);

export const projectTasksIsLoading = createSelector(
  projectTasks,
  (tasks: DownloadList<ProjectTask>) => tasks.isLoading
);

export const STATUS_NAMES = ['Резерв', 'Сделать', 'В процессе', 'Обзор', 'Готово'];
