import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { TASKS } from '../mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS[0];
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  constructor() {}
  ngOnInit(): void {}
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
    console.log(task, 'Tarea Cambiada');
  }
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
    console.log(task, 'Tarea eliminada');
  }
}
