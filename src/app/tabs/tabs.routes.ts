import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then( m => m.HomePage)
      },
      {
        path: 'orders',
        loadComponent: () => import('../orders/orders.page').then( m => m.OrdersPage)
      },
      {
        path: 'accounts',
        loadComponent: () => import('../accounts/accounts.page').then( m => m.AccountsPage)
      },
      {
        path: 'wallet',
        loadComponent: () => import('../wallet/wallet.page').then( m => m.WalletPage)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
