import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { RecommenderComponent } from '../recommender/recommender.component';
import { LibraryComponent } from '../library/library.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { SelectMoodComponent } from '../select-mood/select-mood.component';
import { AuthGuard } from 'src/app/authentication/guards/auth.guard';
import { MoodGuard } from 'src/app/authentication/guards/mood.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'recommender', pathMatch: 'full' },
      { path: 'recommender', component: RecommenderComponent, canActivate: [MoodGuard] },
      { path: 'library', component: LibraryComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'select-mood', component: SelectMoodComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
