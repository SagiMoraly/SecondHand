import { Component } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrl: './publish.component.scss',
})
export class PublishComponent {
  type: undefined | number;

  selectType(number: number) {
    this.type = number;
    console.log(this.type === number, this.type, number);
  }
}
