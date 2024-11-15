import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { User } from '../../models/user';
import { ProjectsService } from '../../services/projects.service';
import { UsersService } from '../../services/users.service';
import { DateValidator } from '../../validators/date-validator';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent implements OnInit {
  constructor(
    private _projSrv: ProjectsService,
    private _userSrv: UsersService,
    private _router: Router
  ) { }


  pform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    deadline: new FormControl('', [Validators.required, DateValidator.euDate]),
    team_members: new FormArray([]),
  });

  users: User[] = [];
  team_members_arr: FormArray = <FormArray>this.pform.get('team_members');

  saved: boolean = false;
  http_error: boolean = false;

  ngOnInit(): void {
    this.users = this._userSrv.getUsers();

    this.team_members_arr = <FormArray>this.pform.get('team_members');
    this.users.forEach((aU) => {
      this.team_members_arr.push(
        new FormControl({ uid: aU.id, selected: false })
      );
    });
  }

  getUserById(uid: number): User {
    const theUser = this.users.find((aU) => aU.id == uid);
    return theUser || ({} as User);
  }

  memberChecked(uid: number) {
    const aControl = this.team_members_arr.controls.find(
      (aC) => aC.value.uid == uid
    );
    if (aControl) aControl.value.selected = !aControl.value.selected;
  }

  onSubmit() {
    const temProj: any = this.pform.value as Project;
    temProj.team_members = temProj.team_members.reduce((acc: any, aTM: any) => {
      if (aTM.selected) acc.push(aTM.uid);
      return acc;
    }, []);

    temProj.date = temProj.deadline;
    delete (temProj.deadline);
    this._projSrv.addProject(temProj);
    this._router.navigate(['/projects']);
  }
}
