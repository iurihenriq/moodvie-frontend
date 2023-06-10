import {RouterModule} from '@angular/router';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {MaterialModule} from './material-module/material.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ProfileCircleComponent} from './components/profile-circle/profile-circle.component';
import {createTranslateLoader} from "../app.module";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    ProfileCircleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'pt-BR',
      extend: true,
    }),
  ],
  exports: [ProfileCircleComponent, TranslateModule],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
