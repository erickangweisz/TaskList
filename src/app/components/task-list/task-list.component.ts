import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  incompletesTaskList: Task[];
  doneTaskList: Task[];

  taskToAdd: string;
  taskId: number;

  constructor() {}

  ngOnInit() {
    this.taskToAdd = '';
    this.taskId = 1;

    this.incompletesTaskList = [];
    this.doneTaskList = [];
  }

  addTask(): void {
    if (this.taskToAdd.trim().length === 0) {
      return;
    }

    this.incompletesTaskList.unshift({
      id: this.taskId,
      description: this.taskToAdd,
      creationDate: new Date(),
      edited: false,
      done: false
    });

    this.taskToAdd = '';
    this.taskId++;
  }

  taskDone(task: Task): void {
    task.done = true;
    this._deleteTaskIncomplete(task.id);
    this.doneTaskList.unshift(task);
  }

  editTask(task: Task): void {
    task.edited = true;
  }

  doneEdit(task: Task): void {
    task.edited = false;
  }

  _deleteTaskIncomplete(id: number): void {
    this.incompletesTaskList =
      this.incompletesTaskList.filter(task => task.id !== id);
  }

  deleteTaskDone(id: number): void {
    this.doneTaskList =
      this.doneTaskList.filter(task => task.id !== id);
  }
}
