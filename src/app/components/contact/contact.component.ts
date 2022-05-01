import { Component, OnInit } from '@angular/core';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faCircleRight = faCircleRight;
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;
  faSquareEnvelope = faSquareEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
