import { Component, OnInit } from '@angular/core';
import {  TaskService} from "../../service/task.service";
import { Task } from '../Task';
// import { TASKS } from '../../components/mock-task';
//Cambiamos para usar el service.ts import { Task } from '../../components/Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(
    private taskService:TaskService
    ){}
  ngOnInit(): void {
    //like promise
     this.taskService.getTasks().subscribe((tasks) => (
      this.tasks = tasks
    ));
   
  }
}
