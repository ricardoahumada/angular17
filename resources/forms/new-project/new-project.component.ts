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
  
  constructor(
    private _projSrv: ProjectsService,
    private _userSrv: UsersService,
    private _router: Router
  ) {}

  users: User[] = [];
  team_members_arr: any[] = []; 

  // TODO: define form model

  ngOnInit(): void {
    this.users = this._userSrv.getUsers();
  }

  getUserById(uid: number): User {
    const theUser = this.users.find((aU) => aU.id == uid);
    return theUser || ({} as User);
  }

  memberChecked(uid: number) {
    // TODO: react to memeber check
  }

  onSubmit() {
    // TODO: save new project
  }
}
