import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav/header/header.component';
import { NavComponent } from './nav/nav.component';
import { DeviceCardComponent } from './devices/card/device-card.component';
import { DevicesComponent } from './devices/devices.component';
import { DeviceFiltersPanelComponent } from './devices/filters-panel/device-filters-panel.component';
import { LandingComponent } from './landing/landing.component';
import { ForumFiltersPanelComponent } from './forum/filters-panel/forum-filters-panel.component';
import { ForumComponent } from './forum/forum.component';
import { ForumThreadListComponent } from './forum/thread-list/forum-thread-list.component';
import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DeviceDialogComponent } from './devices/dialog/device-dialog.component';
import { ForumThreadDialogComponent } from './forum/thread-dialog/forum-thread-dialog.component';
import { ForumThreadComponent } from './forum/thread/forum-thread.component';
import { ForumThreadReplyFormComponent } from './forum/thread-reply-form/forum-thread-reply-form.component';
import { ForumThreadFormComponent } from './forum/thread-form/forum-thread-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataModule } from '../data/internal-data.module';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonResumeCardComponent } from './lessons/resume-card/lesson-resume-card.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    ForumComponent,
    DevicesComponent,
    ForumThreadListComponent,
    DeviceCardComponent,
    DeviceFiltersPanelComponent,
    NavHeaderComponent,
    ForumFiltersPanelComponent,
    DeviceDialogComponent,
    ForumThreadDialogComponent,
    ForumThreadComponent,
    ForumThreadReplyFormComponent,
    ForumThreadFormComponent,
    LessonsComponent,
    LessonResumeCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataModule
  ],
  entryComponents: [
    DeviceDialogComponent,
    ForumThreadDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
