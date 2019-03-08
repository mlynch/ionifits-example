import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { PeoplePage } from '../people/people.page';
import { MessagesPage } from '../messages/messages.page';
import { ExpensesPage } from '../expenses/expenses.page';
import { TimeOffPage } from '../time-off/time-off.page';
import { SettingsPage } from '../settings/settings.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/app/tabs/(people:people)',
        pathMatch: 'full',
      },
      {
        path: 'people',
        outlet: 'people',
        component: PeoplePage
      },
      {
        path: 'expenses',
        outlet: 'expenses',
        component: ExpensesPage
      },
      {
        path: 'messages',
        outlet: 'messages',
        component: MessagesPage
      },
      {
        path: 'time-off',
        outlet: 'time-off',
        component: TimeOffPage
      },
      {
        path: 'settings',
        outlet: 'settings',
        component: SettingsPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/(people:people)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

