import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs';
import  { Router }from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  title: string  = 'Task-Manager';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService : UiService, private router:Router) { 
    this.subscription = this.uiService.toggle().subscribe((vaule => this.showAddTask = vaule));
  }
  ngOnInit(): void { }

  toggleAddTask(){
    this.uiService.toggleAddedTask();
  }
  hasRoute(route: string){
    return this.router.url === route;
  }
}
