import { Component, Input, OnInit } from '@angular/core';
import { Istudent } from '../data-model/student.interface';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input() student: Istudent = {
    name : 'Sameer Jain',
    age : 42,
    city : 'Solapur',
    cardColour : 'rgb(230, 242, 255)' ,
  }


  constructor() { }

  ngOnInit(): void {
  }

}
