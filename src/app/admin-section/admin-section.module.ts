import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSectionRoutingModule } from './admin-section-routing.module';
import { AdminSectionComponent } from './admin-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AdminSectionComponent,
    SidebarComponent,
    MaincontentComponent,
    HeaderComponent,
    DashboardComponent,
    // router
  ],
  imports: [
    CommonModule,
    AdminSectionRoutingModule
  ]
})
export class AdminSectionModule { }
