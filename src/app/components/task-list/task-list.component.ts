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

    this.incompletesTaskList.push({
      id: this.taskId,
      description: this.taskToAdd,
      creationDate: new Date(),
      edited: false,
      done: false
    });

    this.taskToAdd = '';
    this.taskId++;
  }
}
