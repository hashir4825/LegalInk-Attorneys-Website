import {
  Component,
  HostListener
} from '@angular/core';

import {
  Router,
  RouterLink,
  NavigationEnd
} from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  visible = true;

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.updateNavbar();

      });

  }

  @HostListener('window:scroll')
  onScroll() {

    this.updateNavbar();

  }

  private updateNavbar() {

    if (this.router.url === '/') {

      this.visible = window.scrollY > window.innerHeight - 80;

    } else {

      this.visible = true;

    }

  }

}