import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private active: ActivatedRoute,
    private serv: OauthService,
    private router: Router
  ) {}

  username: string = '';

  ngOnInit() {
    this.serv.getUserDetails().subscribe({
      next: (data:any) => (this.username = data['login']),
      error: (err) => {
        console.log(err);
      },
    });
  }

  logout() {
    this.serv.logout().subscribe({
      next: (data: any) => this.router.navigate(['/login']),
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
