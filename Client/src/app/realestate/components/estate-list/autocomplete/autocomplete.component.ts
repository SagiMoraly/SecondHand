import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Renderer2,
} from '@angular/core';
import { of, fromEvent, Observable } from 'rxjs';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @Output() setsearchOptionNameEvent = new EventEmitter<string>();

  searchOptions: any = [];
  showSearches: boolean = false;
  isSearching: boolean = false;
  filteredSearchOtions: any = [];

  constructor() {
    this.searchOptions = [
      'Audi',
      'BMW',
      'Bugatti',
      'Ferrari',
      'Ford',
      'Lamborghini',
      'Mercedes Benz',
      'Porsche',
      'Rolls-Royce',
      'Volkswagen',
    ];
    this.filteredSearchOtions = this.searchOptions;
  }

  ngOnInit() {}

  searchForPlaces(event: Event) {
    this.filtersearchOptions((event.target as HTMLInputElement).value);
  }

  filtersearchOptions(name: string) {
    this.filteredSearchOtions = this.searchOptions.filter((val: string) =>
      val.toLowerCase().includes(name.toLowerCase())
    );
  }

  selectOption(option: string) {
    this.searchInput.nativeElement.value = option;
    this.setsearchOptionNameEvent.emit(option);
  }

  showOptions() {
    this.showSearches = true;
    this.filtersearchOptions(this.searchInput.nativeElement.value);
  }
}