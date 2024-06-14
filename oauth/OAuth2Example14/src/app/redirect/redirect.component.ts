import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor(
    private active: ActivatedRoute,
    private serv: OauthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.active.queryParamMap
      .pipe(
        concatMap((x) => {
          const code: any = x.get('code');
          return this.serv.getAcessToken(code);
        })
      )
      .subscribe({
        next: (data: any) => this.router.navigate(['/dashboard']),
        error: (err: any) => {
          console.log(err);
        },
      });
  }
}
