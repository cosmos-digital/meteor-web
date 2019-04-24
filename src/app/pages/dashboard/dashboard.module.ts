import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'angular2-chartjs';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
    LeafletModule,
  ],
  declarations: [
    DashboardComponent,

  ],
  providers: [
  ],
})

export class DashboardModule { }
