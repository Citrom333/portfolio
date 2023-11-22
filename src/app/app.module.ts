import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';
import { bootstrapApplication } from '@angular/platform-browser';
@NgModule({
    declarations: [

        // ... egyéb komponensek
    ],
    imports: [
        AppComponent,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        // ... egyéb modulok
    ],
    exports: [AppComponent],
    providers: [],
})
export class AppModule {

}