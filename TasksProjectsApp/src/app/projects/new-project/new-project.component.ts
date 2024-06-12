import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';
import { DateValidator } from 'src/app/validators/date-validator';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {

  pform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    deadline: new FormControl('', [Validators.required, DateValidator.euDate]),
  });

  constructor(
    private _projSrv: ProjectsService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('onSubmit:', this.pform.value);
    const temProj: any = this.pform.value as Project;
    temProj.date = temProj.deadline;
    delete (temProj.deadline);
    this._projSrv.addProject(temProj);
    this._router.navigate(['/projects']);
  }


}
