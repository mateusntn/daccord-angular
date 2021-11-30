import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css']
})
export class LessonCreateComponent implements OnInit {

    quantity: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  searchForm: FormGroup;

  addField() {
    this.quantity += 1;
  }

  counter(i: number) {
    return new Array(i);
  }
}
