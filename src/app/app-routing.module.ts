import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RumorListComponent } from './rumor-list/rumor-list.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  	{ 
  		path: 'rumors', 
  		component: RumorListComponent
  	},
  	{
  		path: 'home',
  		component: HomeComponent
  	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }
