import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  form: FormGroup;
  courses: FormArray;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.courses = new FormArray([]);

    this.form = this.fb.group({
      courses: this.courses
    });
  }

  addCourse() {
    this.courses.push(new FormControl())
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
