import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondadminsectionComponent } from './secondadminsection.component';
import { PracticepageComponent } from '../practicepage/practicepage.component';

const routes: Routes = [{ path: '', component: SecondadminsectionComponent },

  {path:'practicepage', component:PracticepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondadminsectionRoutingModule { }
