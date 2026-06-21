import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  PRACTICE_AREAS,
  PracticeCategory
} from '../../data/practice-areas';

@Component({
  selector: 'app-practice-areas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './practice-areas.html',
  styleUrl: './practice-areas.css'
})
export class PracticeAreas {

  categories: PracticeCategory[] = PRACTICE_AREAS;

}