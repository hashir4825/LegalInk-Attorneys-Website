import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Team } from './components/team/team';
import { MemberProfile } from './components/member-profile/member-profile';
import { PartnerProfile } from './components/partner-profile/partner-profile';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'team',
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
    path: '**',
    redirectTo: ''
  }
];