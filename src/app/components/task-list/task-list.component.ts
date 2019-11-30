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

  constructor() {}

  ngOnInit() {
    this.incompletesTaskList = [
      {
        id: 1,
        description: 'incomplete task',
        creationDate: new Date(),
        edited: false,
        done: false
      }
    ];
    this.doneTaskList = [
      {
        id: 2,
        description: 'done task',
        creationDate: new Date(),
        edited: false,
        done: true
      }
    ];
  }

}
