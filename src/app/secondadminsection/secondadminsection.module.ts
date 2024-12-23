import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondadminsectionRoutingModule } from './secondadminsection-routing.module';
import { SecondadminsectionComponent } from './secondadminsection.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { Header2Component } from './header2/header2.component';
import { Maincontent2Component } from './maincontent2/maincontent2.component';


@NgModule({
  declarations: [
    SecondadminsectionComponent,
    Sidebar2Component,
    Header2Component,
    Maincontent2Component
  ],
  imports: [
    CommonModule,
    SecondadminsectionRoutingModule
  ]
})
export class SecondadminsectionModule { }
