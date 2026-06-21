import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { INSIGHTS } from '../../data/insights';
import { Insight } from '../../data/insights';

/* ==========================================
   COMPONENT
========================================== */

@Component({
  selector: 'app-insight-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './insight-detail.html',
  styleUrl: './insight-detail.css'
})

export class InsightDetail {

  /* ==========================================
     CURRENT INSIGHT
  ========================================== */

  insight?: Insight;

  constructor(private route: ActivatedRoute) {

    const slug = this.route.snapshot.paramMap.get('slug');

    this.insight = INSIGHTS.find(
      article => article.slug === slug
    );

  }

}