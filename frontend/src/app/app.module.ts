import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatIconModule, MatCardModule, MatInputModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
// import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListInfluencerComponent } from './list-influencer/list-influencer.component';
import { HeaderComponent } from './header/header.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { AddInfluencerComponent } from './add-influencer/add-influencer.component';
import { EditInfluencerComponent } from './edit-influencer/edit-influencer.component';
import { DetailInfluencerComponent } from './detail-influencer/detail-influencer.component';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { MediaCardComponent } from './media-card/media-card.component';
import { LogoComponent } from './logo/logo.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { DetailButtonComponent } from './detail-button/detail-button.component';
import { MainMenuButtonComponent } from './main-menu-button/main-menu-button.component';

import {InfluencerService} from './services/influencer.service';

@NgModule({
  declarations: [
    AppComponent,
    ListInfluencerComponent,
    HeaderComponent,
    InfluencerComponent,
    AddInfluencerComponent,
    EditInfluencerComponent,
    DetailInfluencerComponent,
    CustomDialogComponent,
    MediaCardComponent,
    LogoComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DetailButtonComponent,
    MainMenuButtonComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [InfluencerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
