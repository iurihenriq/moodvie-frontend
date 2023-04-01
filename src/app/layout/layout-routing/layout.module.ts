import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommenderComponent } from '../recommender/recommender.component';
import { LayoutComponent } from '../layout/layout.component';
import { RouterModule } from '@angular/router'; // importar RouterModule aqui
import { LayoutRoutingModule } from './layout-routing.module';
import { LibraryComponent } from '../library/library.component';

@NgModule({
  declarations: [LayoutComponent, RecommenderComponent, LibraryComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    RouterModule, // adicionar RouterModule aos imports
  ],
})
export class LayoutModule {}
