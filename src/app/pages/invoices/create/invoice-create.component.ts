import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoiceCreateComponent {

  constructor(private route: Router) {
    console.log(this.route.url);
  }

}
