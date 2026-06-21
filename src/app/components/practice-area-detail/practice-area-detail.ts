import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import {
  PRACTICE_AREAS,
  PracticeSubCategory
} from '../../data/practice-areas';

@Component({
  selector: 'app-practice-area-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './practice-area-detail.html',
  styleUrl: './practice-area-detail.css'
})
export class PracticeAreaDetail implements OnInit {

  /* ==========================================
     CURRENT PRACTICE AREA
  ========================================== */

  practice?: PracticeSubCategory;

  constructor(
    private route: ActivatedRoute
  ) {}

  /* ==========================================
     INITIALIZATION
  ========================================== */

  ngOnInit(): void {

    // Reload content whenever route parameters change
    this.route.paramMap.subscribe(() => {

      this.loadPracticeArea();

    });

  }

  /* ==========================================
     LOAD PRACTICE AREA
  ========================================== */

  private loadPracticeArea(): void {

    // Get category and sub-category from URL
    const categorySlug =
      this.route.snapshot.paramMap.get('category');

    const subCategorySlug =
      this.route.snapshot.paramMap.get('subcategory');

    // Find selected category
    const category = PRACTICE_AREAS.find(
      category => category.slug === categorySlug
    );

    // Find selected practice area
    this.practice =
      category?.children.find(
        child => child.slug === subCategorySlug
      );

    // Scroll to top after navigation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }

}