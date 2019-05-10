import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RumorListComponent } from './rumor-list/rumor-list.component';
import { RumorDetailComponent } from './rumor-detail/rumor-detail.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  	{ 
  		path: 'rumors', 
  		component: RumorListComponent
  	},
    { 
      path: 'rumors/:id',      
      component: RumorDetailComponent },
  	{
  		path: 'home',
  		component: HomeComponent
  	},
    { 
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }
