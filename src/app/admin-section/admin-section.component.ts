import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.scss']
})
export class AdminSectionComponent implements OnInit {

  isActive: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggle(){
    this.isActive = !this.isActive;
  }
}
