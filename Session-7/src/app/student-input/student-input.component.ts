import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Istudent } from '../data-model/student.interface';


@Component({
  selector: 'app-student-input',
  templateUrl: './student-input.component.html',
  styleUrls: ['./student-input.component.css']
})
export class StudentInputComponent implements OnInit {

  student_created_status = 'Student Not Created'

  @Output() studentSubmited = new EventEmitter<Istudent>();
  student: Istudent = {name:'',city:''};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(submittedStudent: Istudent){
    this.student_created_status = 'Student Created';
    this.studentSubmited.emit( submittedStudent );
  }
}
