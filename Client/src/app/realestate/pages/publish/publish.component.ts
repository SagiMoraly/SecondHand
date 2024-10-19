import { Component } from '@angular/core';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrl: './publish.component.scss',
})
export class PublishComponent {
  stage = 0;

  nextStage() {
    this.stage++;
  }
}
