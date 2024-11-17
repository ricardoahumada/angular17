import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { Task } from '../../models/task';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-new-task-sgn',
  templateUrl: './new-task-sgn.component.html',
  styleUrl: './new-task-sgn.component.scss'
})
export class NewTaskSgnComponent {

  constructor(private _taskServ: TasksService, private _router: Router) { }

  newTaskForm = new FormGroup({
    description: new FormControl('', [Validators.minLength(3), Validators.maxLength(20)]),
    time: new FormControl('', [Validators.min(1)]),
    project: new FormControl('', [Validators.min(1)])
  });

  taskSummary = toSignal(this.newTaskForm.valueChanges, { initialValue: {} });

  onSubmitTask() {
    if (this.newTaskForm.valid) {
      const newTask: any = this.newTaskForm.value;
      this._taskServ.addATask(newTask);
      this._router.navigate(['/tasks'])
    }
  }

}
