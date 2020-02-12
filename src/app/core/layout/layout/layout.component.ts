import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'alpha-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('sidebar', {static: true}) sidebar: ElementRef;
  @ViewChild('main', {static: true}) main: ElementRef;
  isSidebarOpen = false;


  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(){
    this.isSidebarOpen = !this.isSidebarOpen;
    if(this.isSidebarOpen){
      this.sidebar.nativeElement.style.width = "250px";
      this.main.nativeElement.style.marginLeft = "250px";
    } else {
      this.sidebar.nativeElement.style.width = "0";
      this.main.nativeElement.style.marginLeft = "0";
    }
  }

}
