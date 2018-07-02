import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ListInfluencerComponent} from './list-influencer/list-influencer.component';
import {AddInfluencerComponent} from './add-influencer/add-influencer.component';
import {DetailInfluencerComponent} from './detail-influencer/detail-influencer.component';
import {EditInfluencerComponent} from './edit-influencer/edit-influencer.component';

const routes: Routes = [
  {path : '', component : ListInfluencerComponent},
  { path: 'add', component: AddInfluencerComponent },
  { path: 'detail/:id', component: DetailInfluencerComponent },
  { path: 'edit/:id', component: EditInfluencerComponent }
];

export const routing = RouterModule.forRoot(routes);