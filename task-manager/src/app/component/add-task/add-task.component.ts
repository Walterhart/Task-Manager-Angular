import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  completed: boolean = false;
  

  constructor() {}

  ngOnInit(): void {}
  
  submit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      completed: this.completed,
    };

    this.addTask.emit(newTask);

    // clear form on submit
    this.text = '';
    this.day = '';
    this.completed = false;
  }
}