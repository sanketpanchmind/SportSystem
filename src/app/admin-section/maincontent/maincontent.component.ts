import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {
  isActive:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){

  }

}
