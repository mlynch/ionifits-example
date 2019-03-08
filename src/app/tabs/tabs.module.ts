import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { PeoplePageModule } from '../people/people.module';
import { MessagesPageModule } from '../messages/messages.module';
import { ExpensesPageModule } from '../expenses/expenses.module';
import { TimeOffPageModule } from '../time-off/time-off.module';
import { SettingsPageModule } from '../settings/settings.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    PeoplePageModule,
    MessagesPageModule,
    ExpensesPageModule,
    TimeOffPageModule,
    SettingsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

