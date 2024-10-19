import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForsaleComponent } from './pages/forsale/forsale.component';
import { RentComponent } from './pages/rent/rent.component';
import { PublishComponent } from './pages/publish/publish.component';
import { SearchRealestateComponent } from './components/estate-list/search-realestate/search-realestate.component';
import { RealestateCardComponent } from './components/estate-list/realestate-card/realestate-card.component';
import { RealestateDetailComponent } from './pages/realestate-detail/realestate-detail.component';
import { AutocompleteComponent } from './components/estate-list/autocomplete/autocomplete.component';
import { RangeSliderComponent } from './components/estate-list/range-slider/range-slider.component';
import { SharedModule } from '../shared/shared.module';
import { MultiSelectComponent } from './components/estate-list/multi-select/multi-select.component';
import { RoomSelectionComponent } from './components/estate-list/room-selection/room-selection.component';
import { MoreFiltersComponent } from './components/estate-list/more-filters/more-filters.component';
import { SanitizeHtmlPipePipe } from './pips/sanitize-html-pipe.pipe';
import { RangeSliderFloorComponent } from './components/estate-list/range-slider-floor/range-slider-floor.component';
import { RangeSliderSizeComponent } from './components/estate-list/range-slider-size/range-slider-size.component';
import { OutSideClickDirective } from './directives/out-side-click.directive';
import { PaginatorComponent } from './components/estate-list/paginator/paginator.component';
import { PublishTypeComponent } from './components/publish/publish-type/publish-type.component';
import { NavbarComponent } from './components/publish/navbar/navbar.component';
import { FormAddComponent } from './pages/publish/form-add/form-add.component';

@NgModule({
  declarations: [
    ForsaleComponent,
    RentComponent,
    PublishComponent,
    SearchRealestateComponent,
    RealestateCardComponent,
    RealestateDetailComponent,
    AutocompleteComponent,
    RangeSliderComponent,
    MultiSelectComponent,
    RoomSelectionComponent,
    MoreFiltersComponent,
    SanitizeHtmlPipePipe,
    RangeSliderFloorComponent,
    RangeSliderSizeComponent,
    OutSideClickDirective,
    PaginatorComponent,
    PublishTypeComponent,
    NavbarComponent,
    FormAddComponent,
  ],
  imports: [CommonModule, SharedModule],
})
export class RealestateModule {}
