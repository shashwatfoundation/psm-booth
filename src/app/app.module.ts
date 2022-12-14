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
import { environment } from 'environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';

import { QRCodeModule } from 'angularx-qrcode';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ServiceWorkerModule } from '@angular/service-worker';

import {NgxImageCompressService} from "ngx-image-compress";
import { NiyamSelectionComponent } from './layouts/niyam-selection/niyam-selection.component';
import { NiyamsPreviewComponent } from './layouts/niyams-preview/niyams-preview.component';
import { NiyamDetailComponent } from './layouts/niyam-selection/niyam-detail/niyam-detail.component';
import { PrMapComponent } from './layouts/pr-map/pr-map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TemplatesListComponent,
    AnimationCameraComponent,
    PreviewImageComponent,
    NiyamSelectionComponent,
    NiyamsPreviewComponent,
    NiyamDetailComponent,
    PrMapComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    QRCodeModule,
    NgCircleProgressModule.forRoot({}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
