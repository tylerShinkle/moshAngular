import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  courses = [];
}


//STRUCTURAL DIRECTIVES : modify the structure of the DOM

//ATTRIBUTE DIRECTIVES : modify the attributes of DOM elements