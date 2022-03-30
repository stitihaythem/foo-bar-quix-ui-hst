import { Component, OnInit, OnDestroy } from '@angular/core';
import { FooBarQuixService } from '../foo-bar-quix.service';


@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

  convertedValues: NumberConverted[];



  constructor(private fooBarQuixService: FooBarQuixService) { }

  ngOnInit(): void {
      this.init();
  }

  ngOnDestroy(): void {
    this.init();
  }

  init(): void {
    this.convertedValues = [] as NumberConverted[];
  }

  convertNumber(inputNumber: number): void {
    this.fooBarQuixService.getConvertedNumber(inputNumber.toString()).subscribe(
      r =>  {
        this.convertedValues.push({numberToConvert: inputNumber, result: r.result});
      }
    );
  }

}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
