import { Component } from '@angular/core';

import { Student } from './student/student.model'

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant'},
    {name: 'Han Solo', isJedi: false},
    {name: 'Obi-Wan-Kenobi', isJedi: true, temple: 'Coruscant'},
    {name: 'Anakin Skywalker', isJedi: true, temple: 'Coruscant'},
    {name: 'Leia', isJedi: false}

  ]
  /*luke = {name: 'Luke', isJedi: true, temple: 'Coruscant'}
  han = {name: 'Han Solo', isJedi: false}
  obi = {name: 'Obi-Wan-Kenobi', isJedi: true, temple: 'Coruscant'}
  anakin = {name: 'Anakin Skywalker', isJedi: true, temple: 'Coruscant'}
  leia = {name: 'Leia', isJedi: false}*/
}
