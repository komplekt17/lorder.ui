import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Table } from '@components/Table';
import { PatchTaskForm } from '@domains/@common/TaskForm/PatchTaskForm';
import { DownloadList } from '@store/@common/entities';
import { ProjectTask } from '@store/projects';
import { PerformersCell } from './PerformersCell';

import { PROJECT_EDIT_TASK_FORM_NAME } from '@store/projects';

export interface IProjectTasksProps {
  isFormMount: boolean;
  classes: any;
  closeDialog: any;
  deleteProjectTask: ({ projectId, taskId }: { projectId: number; taskId: number }) => void;
  destroy: (formName: string) => any;
  getAllProjectTasks: (p: number) => void;
  openDialog: any;
  projectId: number;
  projectTasks: DownloadList<ProjectTask>;
  push: any;
}

export interface IState {
  page: number | string;
  perPage: number | string;
}

export class ProjectTasksJsx extends React.Component<RouteComponentProps<{}> & IProjectTasksProps, IState> {
  state = {
    page: 0,
    perPage: 10,
  };

  private performersCellRef: HTMLElement[] = [];

  componentDidMount() {
    this.props.getAllProjectTasks(this.props.projectId);
  }

  componentWillReceiveProps(nextProps: IProjectTasksProps) {
    if (nextProps.projectId !== this.props.projectId) {
      nextProps.getAllProjectTasks(this.props.projectId);
    }
  }

  componentWillUnmount() {
    if (this.props.isFormMount) {
      this.props.destroy(PROJECT_EDIT_TASK_FORM_NAME);
    }
  }

  render() {
    const { classes, projectId, projectTasks } = this.props;
    return (
      <div className={classes.root}>
        {projectTasks && projectTasks.length ? (
          <Table items={projectTasks} renderItem={this.renderItem as any}>
            <TableHead>
              <TableRow>
                <TableCell>Задача</TableCell>
                <TableCell>Исполнители</TableCell>
                <TableCell align="right">Значимость</TableCell>
                <TableCell align="right">Время</TableCell>
                <TableCell align="right">Статус</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
          </Table>
        ) : (
          <Grid item xs={12}>
            Добавьте первую задачу...
          </Grid>
        )}
        <Button size="large" variant="outlined" color="primary" onClick={this.createTask(projectId)}>
          <Typography variant="caption" noWrap>
            {'Добавить задачу'}
          </Typography>
        </Button>
      </div>
    );
  }

  private renderItem = ({ id, title, description, source, status, value, users, duration, projectId }: ProjectTask) => {
    const { classes } = this.props;
    return (
      <TableRow key={id} className={classes.row} hover onClick={this.handleRowClick(id, projectId)}>
        <TableCell>{title}</TableCell>
        <TableCell>
          <span ref={this.setPerformersCellRef(id)}>
            <PerformersCell input={{ value: users }} taskId={id} />
          </span>
        </TableCell>
        <TableCell align="right">{value}</TableCell>
        <TableCell align="right">{duration}</TableCell>
        <TableCell align="right">{status}</TableCell>
        <TableCell align="right">
          <IconButton onClick={this.handleRemoveClick(id)}>
            <ClearIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  private setPerformersCellRef = (id: number | string): any => (node: HTMLElement) => {
    if (node) {
      this.performersCellRef[id] = node;
    }
  };

  private createTask = (projectId: number | string) => () => {
    this.props.openDialog(<PatchTaskForm projectId={projectId} />, { maxWidth: 'lg' });
  };

  private handleRowClick = (id: number | string, projectId: number | string) => (event: React.MouseEvent) => {
    let isInside = false;
    if (this.performersCellRef.length) {
      this.performersCellRef.forEach((cell: HTMLElement) => {
        if (cell.contains(event.target as Node)) {
          isInside = true;
        }
      });
    }
    if (!isInside && id) {
      this.props.push({
        pathname: `/projects/${projectId}/tasks/${id}`,
        state: {
          modal: true,
          projectId,
          taskId: id,
        },
      });
    }
  };

  private handleRemoveClick = (taskId: number | string) => (e: any) => {
    if (typeof taskId === 'number') {
      e.stopPropagation();
      this.props.deleteProjectTask({ projectId: this.props.projectId, taskId });
    }
  };
}