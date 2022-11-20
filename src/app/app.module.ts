import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardComponent } from './card/card.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ImagePanelComponent } from './image-panel/image-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Injectable({
  providedIn: 'root',
})
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CardComponent,
    TestimonialComponent,
    ImagePanelComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
