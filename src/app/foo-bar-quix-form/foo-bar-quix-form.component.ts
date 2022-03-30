import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {

  fooBarQuixForm: FormGroup;
  inputNumber = new FormControl();
  submitted = false;
  @Output() submitNumberOutput = new EventEmitter<number>();



  constructor(private fooBarQuixFb: FormBuilder) {

  }

  ngOnInit(): void {
    this.fooBarQuixForm = this.fooBarQuixFb.group({
      inputNumber : ['', Validators.required]
    });
  }


  // tslint:disable-next-line:typedef
  get validation() {
    return this.fooBarQuixForm.controls;
  }

  submitNumber(): void {
    this.submitted = true;

    if (this.fooBarQuixForm.invalid){
      return;
    }

    this.submitNumberOutput.emit(this.fooBarQuixForm.value.inputNumber);

    this.submitted = false;
    this.fooBarQuixForm.reset();
  }

}
