import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Invoices',
    icon: 'nb-compose',
    children: [
      {
        title: 'Simplified',
        link: '/pages/simplified',
      },
    ],
  },
];
