import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  AuthUrl: string = '';

  constructor(private serv: OauthService, private router: Router) {}
  ngOnInit() {
    this.serv.GetAuthPage().subscribe({
      next: (data: any) => (this.AuthUrl = data['authUrl']),
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  login() {
    this.router.navigate(['/auth'], { queryParams: { url: this.AuthUrl } });
  }
}
