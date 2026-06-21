import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Team } from './components/team/team';
import { MemberProfile } from './components/member-profile/member-profile';
import { PartnerProfile } from './components/partner-profile/partner-profile';
import { PracticeAreas } from './components/practice-areas/practice-areas';
import { PracticeAreaDetail } from './components/practice-area-detail/practice-area-detail';
import { Careers } from './components/careers/careers';
import { InsightDetail } from './components/insight-detail/insight-detail';
import { Insights } from './components/insights/insights';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'lawyers',
    component: Team
  },

  {
    path: 'team/:id',
    component: MemberProfile
  },
  {
  path: 'partners/:id',
  component: PartnerProfile
},
{
    path: 'practice-areas',
    component: PracticeAreas
},

{
    path: 'practice-areas/:category/:subcategory',
    component: PracticeAreaDetail
},
{
    path:'insights',
    component: Insights
},

{
    path:'insights/:slug',
    component: InsightDetail
},

{
    path:'careers',
    component: Careers
},
  {
    path: '**',
    redirectTo: ''
  }
];