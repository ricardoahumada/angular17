import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { Task } from '../../models/task';
import { TaskDetailForPreviewComponent } from '../task-detail-for-preview/task-detail.component';

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
    const detComponent: ComponentRef<TaskDetailForPreviewComponent> = this.viewRef.createComponent(TaskDetailForPreviewComponent);
    // console.log('detComponent:', detComponent, this.aT);
    detComponent.instance.task = this.aT;
  }
  hidePreview = (tid: number) => {
    // console.log('hidePreview:', tid);
    this.viewRef.clear();
  }

}
