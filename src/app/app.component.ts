import { Component, OnInit, Renderer2 } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Victor Bonanho';
  loader= true;

  ngOnInit(): void {
      setTimeout(() => {
        this.loader = false;
      }, 1500);
  }
}

