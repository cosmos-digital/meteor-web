import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { InvoiceComponent } from './invoice.component';
import { InvoiceRoutingModule } from './invoice.routing.module';
import { InvoiceCreateComponent } from './create/invoice-create.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


const components = [
    InvoiceComponent,
    InvoiceCreateComponent
];

@NgModule({
    imports: [
        ThemeModule,
        Ng2SmartTableModule,
        InvoiceRoutingModule,
    ],
    exports: [
        InvoiceCreateComponent
    ],
    declarations: [
        ...components,
    ],
})
export class InvoiceModule { }