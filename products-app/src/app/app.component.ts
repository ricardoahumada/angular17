import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Products App';

  an_object = {
    name:"ricardo",
    email:"r@r.com",
    age: 34
  }

  getName=()=>{
    return this.an_object.name.toLocaleUpperCase();
  }

}
