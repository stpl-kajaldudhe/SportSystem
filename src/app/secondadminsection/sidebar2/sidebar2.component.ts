import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.scss']
})
export class Sidebar2Component implements OnInit {
  active:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  togglesidebar(){
    this.active = !this.active;
  }

}
