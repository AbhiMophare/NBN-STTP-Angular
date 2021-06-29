import { Component } from '@angular/core';
import { Istudent } from './data-model/student.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students:Istudent[] = [{name:'Abhi', age:43, city:'solapur'}];

  onStudentSubmited(submittedStudent: Istudent){
    this.students.push(submittedStudent);
    /*this.students[0].name = event.name;
    this.students[0].age = event.age;
    this.students[0].city = event.city;
    this.students[0].cardColour = event.cardColour;*/
  }
}
