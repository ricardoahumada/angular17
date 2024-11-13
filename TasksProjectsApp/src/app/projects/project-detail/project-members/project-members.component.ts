import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../models/project';
import { User } from '../../../models/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-project-members',
  templateUrl: './project-members.component.html',
  styleUrls: ['./project-members.component.scss'],
})
export class ProjectMembersComponent implements OnInit {
  project: Project = {} as Project;
  members: User[] = [];

  constructor(private _router: Router, private _userSrv: UsersService) {
    const state: any = _router.getCurrentNavigation()?.extras.state;
    console.log('ProjectMembersComponent router:', state);
    if (state) {
      this.project = state;
      this.members = _userSrv.getUsersByIds(this.project.team_members);
    }
  }

  ngOnInit(): void {}
}
