import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticepageComponent } from './practicepage/practicepage.component';

const routes: Routes = [ {path:'',redirectTo:'admin-section',pathMatch:'full'},

  { path: 'admin-section', loadChildren: () => import('./admin-section/admin-section.module').then(m => m.AdminSectionModule) },


  { path: 'secondadminsectionn', loadChildren: () => import('./secondadminsection/secondadminsection.module').then(m => m.SecondadminsectionModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
