import { Component, OnInit, HostListener, Inject, Renderer2 } from '@angular/core';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { windowToggle } from 'rxjs';

@Component({
  selector: 'app-upbar',
  templateUrl: './upbar.component.html',
  styleUrls: ['./upbar.component.css']
})
export class UpbarComponent implements OnInit {
  faCircleChevronLeft = faCircleChevronLeft;
  faCircleChevronRight = faCircleChevronRight;
  faCircleHalfStroke = faCircleHalfStroke;

  //Switch the default theme here
  theme: Theme = 'light-theme';


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2) {}


//Dark light mode logic
  ngOnInit(): void {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(this.theme, this.theme === 'light-theme' ? (this.theme = 'dark-theme') : (this.theme = 'light-theme'));
  }

  initializeTheme = (): void =>
  this.renderer.addClass(this.document.body, this.theme);
//End Logic

/*On Scroll Efect
  header_variable=false;
  @HostListener("document:scroll")
  scrollfuction() {
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      this.header_variable=true;
    } else {
      this.header_variable=false;
    }
  }
*/
}

export type Theme = 'light-theme' | 'dark-theme';
