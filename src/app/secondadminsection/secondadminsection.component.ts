import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondadminsection',
  templateUrl: './secondadminsection.component.html',
  styleUrls: ['./secondadminsection.component.scss']
})
export class SecondadminsectionComponent implements OnInit {

  active:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  togglesidebar(){
    this.active = !this.active;
  }

}
