import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import {
  INSIGHTS,
  Insight
} from '../../data/insights';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './insights.html',
  styleUrl: './insights.css'
})

export class Insights {

  insights: Insight[] = INSIGHTS;

}