import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politician',
  templateUrl: './politician.component.html',
  styleUrls: ['./politician.component.scss'],
})
export class PoliticianComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  author = 'Abraham Lincoln';
  quote =
    'Government of the people, by the people, for the people, shall not perish from the Earth.';
}
