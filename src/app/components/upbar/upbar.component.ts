import { Component, OnInit, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
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
  faSun = faSun;
  faMoon = faMoon;


  //Switch the default theme here
  theme: Theme = 'light-theme';

  @ViewChild('sunAnimate') sunAnimate!: UpbarComponent;
  @ViewChild('moonAnimate') moonAnimate!: UpbarComponent;


//   iconAnimate = document.querySelector(".container").addEventListener("click", () => {
//     document.querySelector(".sun-logo").classList.toggle("animate-sun");
//     document.querySelector(".moon-logo").classList.toggle("animate-moon");
//     document.querySelector("body").classList.toggle("dark");
// })


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2) {}


//Dark light mode logic
  ngOnInit(): void {
    this.initializeTheme();
  }
  status: boolean = false;
  switchTheme() {
    this.document.body.classList.replace(this.theme, this.theme === 'light-theme' ? (this.theme = 'dark-theme') : (this.theme = 'light-theme'));
    this.status = !this.status;
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
