import { Component, OnInit } from '@angular/core';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faChessKnight } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faGem = faGem;
  faChessKnight = faChessKnight;
  faLaptopCode = faLaptopCode;
  faHandshakeSimple = faHandshakeSimple;
  faArrowRight = faArrowRight;
  faPeopleGroup = faPeopleGroup;


  constructor() {
    setTimeout(() => {

    }, 300);
   }

  ngOnInit(): void {}

id:string = "strategy";
tabChange(ids: string) {
  this.id = ids;
  console.log(this.id);
}



}
