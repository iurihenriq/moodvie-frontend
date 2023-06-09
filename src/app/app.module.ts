import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/es-US';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {SharedModule} from './shared/shared.module';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LayoutModule} from './layout/layout-routing/layout.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationInterceptor} from './authentication/interceptors/authentication.interceptor';
import {AuthenticationModule} from "./authentication/module/authentication/authentication.module";
import {LoginPageComponent} from "./authentication/components/login-page/login-page.component";

registerLocaleData(localePt);
registerLocaleData(localeEn);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'pt-BR',
    }),
    SharedModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
    {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
