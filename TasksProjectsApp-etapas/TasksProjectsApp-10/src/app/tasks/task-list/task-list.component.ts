import { Component, computed, inject, Injector, OnInit, signal } from '@angular/core';
import { Task } from '../../models/task';
import { TASKS } from '../../data/tasks';
import { TasksService } from '../../services/tasks.service';
import { TasksHttpService } from '../../services/taskshttp.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  constructor(private _tasksService: TasksHttpService, private _route: ActivatedRoute) {
  }


  filter_text = signal('');
  tasks = toSignal(this._tasksService.getAllTasks(), { initialValue: [] });

  filteredTasks = computed(() => this.tasks().filter(aT => aT.description.toLocaleLowerCase().includes(this.filter_text().toLocaleLowerCase())))

  deleteTask(tid: number): void {
    this._tasksService.deleteATask(tid);
  }

  /* Resolver */
  $taskSubs: Subscription = {} as Subscription;
  ngOnInit() {
    //resolver
    this.$taskSubs = this._route.data.subscribe((data) => {
      console.log('TaskListComponent resolver data:', data);
    });
  }

  ngOnDestroy(){
    if(this.$taskSubs) this.$taskSubs.unsubscribe();
  }

}