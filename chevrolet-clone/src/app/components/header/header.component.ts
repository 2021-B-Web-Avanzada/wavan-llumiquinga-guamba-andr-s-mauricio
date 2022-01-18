import { Component, OnInit } from '@angular/core';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faAngleDown = faAngleDown
  faSearch = faSearch
  
  constructor() { }

  ngOnInit(): void {
  }

}
