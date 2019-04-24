import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-simplified',
  templateUrl: './simplified.component.html',
})
export class SimplifiedComponent {

  constructor(private route: Router) {
    console.log(this.route.getCurrentNavigation());
  }
}
