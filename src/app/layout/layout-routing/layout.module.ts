import { StatisticsComponent } from './../statistics/statistics.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommenderComponent } from '../recommender/recommender.component';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LibraryComponent } from '../library/library.component';
import { MaterialModule } from 'src/app/shared/material-module/material.module';
import { SharedModule } from './../../shared/shared.module';
import { AuthenticationModule } from 'src/app/authentication/module/authentication/authentication.module';
import { SelectMoodComponent } from '../select-mood/select-mood.component';
import { DialogInformTitleComponent } from '../select-mood/dialog-inform-title/dialog-inform-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogPlaylistComponent } from '../recommender/dialog-playlist/dialog-playlist.component';

@NgModule({
  declarations: [
    LayoutComponent,
    RecommenderComponent,
    LibraryComponent,
    StatisticsComponent,
    SelectMoodComponent,
    DialogInformTitleComponent,
    DialogPlaylistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    AuthenticationModule,
    MaterialModule,
    SharedModule,
  ],
})
export class LayoutModule {}
