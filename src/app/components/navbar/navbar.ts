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

import {
  PRACTICE_AREAS,
  PracticeCategory
} from '../../data/practice-areas';

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

  /* ==========================================
     PRACTICE AREAS (READ ONLY)
  ========================================== */

  readonly practiceAreas = PRACTICE_AREAS;

  megaMenuOpen = false;

  activeCategory: PracticeCategory = PRACTICE_AREAS[0];

  /* ==========================================
     NAVBAR VISIBILITY
  ========================================== */

  visible = true;

  /* ==========================================
     MOBILE MENU
  ========================================== */

  mobileMenuOpen = false;

  constructor(private router: Router) {

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {

        // Close all menus on navigation
        this.mobileMenuOpen = false;
        this.megaMenuOpen = false;

        setTimeout(() => {
          this.updateNavbar();
        });

      });

    this.updateNavbar();
  }

  /* ==========================================
     TOGGLE MOBILE MENU
  ========================================== */

  toggleMenu(): void {

    this.mobileMenuOpen = !this.mobileMenuOpen;

    // ensure mega menu closes
    this.megaMenuOpen = false;
  }

  /* ==========================================
     SCROLL HANDLER
  ========================================== */

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateNavbar();
  }

  /* ==========================================
     ESC KEY CLOSE ALL MENUS
  ========================================== */

  @HostListener('document:keydown.escape')
  closeMenus(): void {

    this.megaMenuOpen = false;
    this.mobileMenuOpen = false;

  }

  /* ==========================================
     NAVBAR VISIBILITY LOGIC
  ========================================== */

  private updateNavbar(): void {

    const isHome =
      this.router.url === '/';

    if (isHome) {

      this.visible =
        window.scrollY > window.innerHeight - 80;

    } else {

      this.visible = true;
    }
  }

  /* ==========================================
     MEGA MENU CONTROL
  ========================================== */

  openMegaMenu(): void {

    this.mobileMenuOpen = false;
    this.megaMenuOpen = true;

  }

  closeMegaMenu(): void {

    this.megaMenuOpen = false;

  }

  setActiveCategory(category: PracticeCategory): void {

    this.activeCategory = category;

  }

  closeMenu(): void {

    this.megaMenuOpen = false;

  }
}