import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  panelOpenState = false;

  constructor(
    private router: Router,
  ) {

  }

  close(component: string) {
    if (component) {
      this.router.navigate([component]);
    }
    this.sidenav.close();
  }

}


