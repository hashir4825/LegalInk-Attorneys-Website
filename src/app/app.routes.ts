import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Team } from './components/team/team';
import { MemberProfile } from './components/member-profile/member-profile';
import { PartnerProfile } from './components/partner-profile/partner-profile';
import { PracticeAreas } from './components/practice-areas/practice-areas';
import { PracticeAreaDetail } from './components/practice-area-detail/practice-area-detail';

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
    path: '**',
    redirectTo: ''
  }
];