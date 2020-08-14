import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataModule } from 'src/data/services/local-memory/local-memory-data.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DeviceCardComponent } from './routes/devices-catalog/card/device-card.component';
import { DevicesComponent } from './routes/devices-catalog/devices.component';
import { DeviceDialogComponent } from './routes/devices-catalog/dialog/device-dialog.component';
import { DeviceFiltersPanelComponent } from './routes/devices-catalog/filters-panel/device-filters-panel.component';
import { LandingComponent } from './routes/landing/landing.component';
import { ForumFiltersPanelComponent } from './routes/qa-forum/filters-panel/forum-filters-panel.component';
import { ForumComponent } from './routes/qa-forum/forum.component';
import { ForumNewThreadFormComponent } from './routes/qa-forum/new-thread-form/forum-new-thread-form.component';
import { ForumThreadDialogComponent } from './routes/qa-forum/thread-dialog/forum-thread-dialog.component';
import { ForumThreadListComponent } from './routes/qa-forum/thread-list/forum-thread-list.component';
import { ForumThreadReplyFormComponent } from './routes/qa-forum/thread-reply-form/forum-thread-reply-form.component';
import { ForumThreadComponent } from './routes/qa-forum/thread/forum-thread.component';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { OnlineCoursesComponent } from './routes/online-courses/online-courses.component';
import { OnlineCourseCardComponent } from './routes/online-courses/card/online-course-card.component';
import { OnlineCourseDialogComponent } from './routes/online-courses/dialog/online-course-dialog.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    LandingComponent,

    DevicesComponent,
    DeviceCardComponent,
    DeviceFiltersPanelComponent,
    DeviceDialogComponent,
    ForumComponent,
    ForumThreadComponent,
    ForumThreadListComponent,
    ForumFiltersPanelComponent,
    ForumNewThreadFormComponent,
    ForumThreadReplyFormComponent,
    ForumThreadDialogComponent,
    OnlineCoursesComponent,
    OnlineCourseCardComponent,
    OnlineCourseDialogComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
