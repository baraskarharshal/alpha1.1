import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alpha-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();
  siteTitle = "Alpha";

  constructor() { }

  ngOnInit() {
  }

  openSidebar(){
    this.toggleSidebar.emit(null);
  }

}
