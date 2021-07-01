import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Course} from "../model/course";

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input() courses: Course[]=[];

    constructor() {
    }

    ngOnInit() {
    }

}
