import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-publish-type',
  templateUrl: './publish-type.component.html',
  styleUrl: './publish-type.component.scss',
})
export class PublishTypeComponent {
  @Output() pickTypeEmitter = new EventEmitter<number>();

  pickType(type: number) {
    this.pickTypeEmitter.emit(type);
  }
}
