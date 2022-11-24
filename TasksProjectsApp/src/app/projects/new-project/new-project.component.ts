import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { User } from 'src/app/models/user';
import { ProjectsService } from 'src/app/services/projects.service';
import { UsersService } from 'src/app/services/users.service';
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
    team_members: new FormArray([]),
  });

  users: User[] = [];
  team_members_arr: FormArray = <FormArray>this.pform.get('team_members');

  constructor(
    private _projSrv: ProjectsService,
    private _userSrv: UsersService,
    private _router:Router
  ) {}

  ngOnInit(): void {
    this.users = this._userSrv.getUsers();

    this.team_members_arr = <FormArray>this.pform.get('team_members');
    this.users.forEach((aU) => {
      this.team_members_arr.push(
        new FormControl({ uid: aU.uid, selected: false })
      );
    });
    console.log('team_members_arr:', this.team_members_arr);
  }

  getUserById(uid: number): User {
    const theUser = this.users.find((aU) => aU.uid == uid);
    return theUser || ({} as User);
  }

  memberChecked(uid: number) {
    const aControl = this.team_members_arr.controls.find(
      (aC) => aC.value.uid == uid
    );
    if (aControl) aControl.value.selected = !aControl.value.selected;
  }

  onSubmit() {
    console.log('onSubmit:', this.pform.value);
    const temProj: any = this.pform.value as Project;
    temProj.team_members = temProj.team_members.reduce((acc: any, aTM: any) => {
      if (aTM.selected) acc.push(aTM.uid);
    }, []);
    this._projSrv.addProject(temProj);
    this._router.navigate(['/projects']);
  }
}
