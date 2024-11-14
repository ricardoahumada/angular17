import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { ProjectsService } from '../../services/projects.service';
import { UsersService } from '../../services/users.service';

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
  team_members_arr: FormArray = {} as FormArray;

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
