import { NgModule } from '@angular/core';

import { SimplifiedComponent } from './simplified.component';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { SimplifiedRoutingModule } from './simplified.routing.module';
import { InvoiceModule } from '../invoice.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { SimplifiedCreateComponent } from './simplified-create.component';

@NgModule({
  imports: [
    ThemeModule,
    SimplifiedRoutingModule,
    InvoiceModule
  ],
  declarations: [
    SimplifiedCreateComponent,
    SimplifiedComponent,
  ],
  providers: [
    SmartTableService
  ],
})
export class SimplifiedModule { }
