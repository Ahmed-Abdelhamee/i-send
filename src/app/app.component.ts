import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i-send';
  viewHeader: boolean = true;
  constructor(private router:Router, private routerActivated:ActivatedRoute){
    router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        if (ev.url.includes("admin")) {
          this.viewHeader = false
        } else {
          this.viewHeader = true
        }
      }
    })
  }
}
