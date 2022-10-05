import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { TemplatesListComponent } from './layouts/templates-list/templates-list.component';
import { AnimationCameraComponent } from './layouts/animation-camera/animation-camera.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewImageComponent } from './layouts/preview-image/preview-image.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TemplatesListComponent,
    AnimationCameraComponent,
    PreviewImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
