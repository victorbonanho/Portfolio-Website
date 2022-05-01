import { Component, OnInit } from '@angular/core';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobileComponent implements OnInit {
  faHouseChimneyUser = faHouseChimneyUser;
  faBuffer = faBuffer;
  faComment = faComment;
  faFile = faFile;


  constructor() { }

  ngOnInit(): void {
  }

}
