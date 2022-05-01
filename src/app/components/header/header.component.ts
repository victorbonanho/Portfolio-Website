import { Component, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBriefcase = faBriefcase;
  faHouseChimneyUser = faHouseChimneyUser;
  faBuffer = faBuffer;
  faComment = faComment;
  faNewspaper = faNewspaper;
  faFile = faFile;
  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faEnvelope = faEnvelope;
  faSquareEnvelope = faSquareEnvelope;
  faGithubSquare = faGithubSquare;
  faLinkedin = faLinkedin;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

/*
  //TODO
  public goHome() {
    this.router.navigateByUrl('/')
    this.router.isActive
  }
*/
}

