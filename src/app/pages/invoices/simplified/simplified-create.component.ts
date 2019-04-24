import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'app-invoice-simplified-create',
  styleUrls: ['./simplified.compoment.scss'],
  templateUrl: './simplified-create.component.html',
})
export class SimplifiedCreateComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      code: {
        title: 'Code',
        type: 'string',
      },
      quantity: {
        title: 'Quantity',
        type: 'number',
        filter: false
      },
      price: {
        title: 'Price',
        type: 'number',
        filter: false
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      type: {
        title: 'Type',
        type: 'string',
      },
      iva: {
        title: 'Iva',
        type: 'number',
      },
      total: {
        title: 'Total',
        type: 'number',
        filter: false
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
