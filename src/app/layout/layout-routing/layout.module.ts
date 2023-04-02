import { StatisticsComponent } from './../statistics/statistics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommenderComponent } from '../recommender/recommender.component';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LibraryComponent } from '../library/library.component';
import { MaterialModule } from 'src/app/shared/material-module/material.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, RecommenderComponent, LibraryComponent, StatisticsComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    SharedModule
  ],
})
export class LayoutModule {}
