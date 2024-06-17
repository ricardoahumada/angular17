import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskDetailComponent } from '../task-detail/task-detail.component';

@Component({
  selector: 'preview-task',
  templateUrl: './preview-task.component.html',
  styleUrls: ['./preview-task.component.less']
})
export class PreviewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('tarea')
  aT: Task = {} as Task;


  @ViewChild('pretarea', { read: ViewContainerRef })
  private viewRef: ViewContainerRef = {} as ViewContainerRef;

  showPreview = (tid: number) => {
    console.log('showPreview:', tid);
    this.viewRef.clear();
    const detComponent: ComponentRef<TaskDetailComponent> = this.viewRef.createComponent(TaskDetailComponent);
    console.log('detComponent:', detComponent);
    detComponent.instance.task = this.aT
    
  }
  hidePreview = (tid: number) => {
    console.log('hidePreview:', tid);
    this.viewRef.clear();
  }

}
