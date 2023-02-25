/*
 Task compenent
*/
import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit  {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
      this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
   }
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((item) => item.id !== task.id))
      );
    } 
  completedTask(task: Task){
    task.completed =! task.completed;
    this.taskService.updateCompletedTask(task).subscribe();
}
}
