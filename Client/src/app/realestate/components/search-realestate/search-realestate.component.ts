import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MoreFiltersComponent } from '../more-filters/more-filters.component';
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
  showMoreFilters = false

  constructor(private dialog: MatDialog) {}

  setCarName($event: any) {
    this.car = $event.name;
  }
  openDialog(e :Event){
    // e.stopPropagation()
    this.dialog.open(MoreFiltersComponent)
  }


  clickInDialog(e: Event) {
    e.stopPropagation();
  }
}
