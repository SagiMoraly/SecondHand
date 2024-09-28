import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-realestate',
  templateUrl: './search-realestate.component.html',
  styleUrl: './search-realestate.component.scss',
})
export class SearchRealestateComponent {
  car: string = '';
  showSaleRent = false;
  showProperty = false;
  showPrice = false;
  showRooms = false;

  setCarName($event: any) {
    this.car = $event.name;
  }

  clickInDialog(e: Event) {
    e.stopPropagation();
  }
}
