import { Component, OnInit, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Victor Bonanho';
  loader= true;
  location?: Location;

  ngOnInit(): void {
      setTimeout(() => {
        this.loader = false;
      }, 2500);

      if (environment.production) {
        if (location.protocol === 'http:') {
          window.location.href = location.href.replace('http', 'https');
        }
      }
  }
}

