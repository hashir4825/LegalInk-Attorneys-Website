import {
  Component,
  HostListener
} from '@angular/core';

import {
  Router,
  RouterLink,
  NavigationEnd
} from '@angular/router';

import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  visible = true;

  mobileMenuOpen = false;

  constructor(private router: Router) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.mobileMenuOpen = false;

        // wait until navigation finishes rendering
        setTimeout(() => {
          this.updateNavbar();
        });

      });

  }

  toggleMenu() {

    this.mobileMenuOpen = !this.mobileMenuOpen;

  }

  @HostListener('window:scroll')
  onScroll() {

    this.updateNavbar();

  }

  private updateNavbar() {

    if (this.router.url === '/') {

      // Hide navbar while intro is visible
      this.visible = window.scrollY > window.innerHeight - 80;

    } else {

      // Always show navbar on other pages
      this.visible = true;

    }

  }

}