import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path:'',redirectTo:'admin-section',pathMatch:'full'},

  { path: 'admin-section', loadChildren: () => import('./admin-section/admin-section.module').then(m => m.AdminSectionModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
