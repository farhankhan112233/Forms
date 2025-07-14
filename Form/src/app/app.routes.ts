import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProfileEditor } from './profile-editor/profile-editor';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'Contact', component: Contact },
  { path: 'about', component: About },
  { path: 'Privacy-Policy', component: PrivacyPolicy },
  { path: 'signup', component: ProfileEditor },
];
