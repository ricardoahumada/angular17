import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.parent?.params.subscribe((dataP: any) => {
      console.log('ImagesComponent parent params:', dataP);
    });
  }

}
