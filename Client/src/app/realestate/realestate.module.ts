import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForsaleComponent } from './pages/forsale/forsale.component';
import { RentComponent } from './pages/rent/rent.component';
import { PublishComponent } from './pages/publish/publish.component';
import { SearchRealestateComponent } from './components/search-realestate/search-realestate.component';
import { RealestateCardComponent } from './components/realestate-card/realestate-card.component';
import { RealestateDetailComponent } from './pages/realestate-detail/realestate-detail.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { SharedModule } from '../shared/shared.module';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';

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
  ],
  imports: [CommonModule, SharedModule],
})
export class RealestateModule {}
