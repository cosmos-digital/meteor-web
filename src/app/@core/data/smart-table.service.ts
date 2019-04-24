import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

    data = [{
        code: 'KJ-256',
        quantity: 2.574,
        price: 0.25,
        description: '@mdo',
        type: 'kg',
        iva: '23%'
    },
    {
        code: '9985',
        quantity: 2.574,
        price: 0.25,
        description: '@mdo',
        type: 'kg',
        iva: '23%'
    },
    {
        code: 'KIJD852',
        quantity: 2.574,
        price: 0.25,
        description: '@mdo',
        type: 'kg',
        iva: '23%'
    },
    {
        code: '009-OP',
        quantity: 2.574,
        price: 0.25,
        description: '@mdo',
        type: 'kg',
        iva: '23%'
    },
    {
        code: '555574',
        quantity: 2.574,
        price: 0.25,
        description: '@mdo',
        type: 'kg',
        iva: '23%'
    }
    ];

    getData() {
        return this.data;
    }
}