import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommenderComponent } from '../recommender/recommender.component';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LibraryComponent } from '../library/library.component';
import { MaterialModule } from 'src/app/shared/material-module/material.module';

@NgModule({
  declarations: [LayoutComponent, RecommenderComponent, LibraryComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
})
export class LayoutModule {}
