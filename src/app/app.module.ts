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
import { DeviceCardComponent } from './routes/devices/card/device-card.component';
import { DevicesComponent } from './routes/devices/devices.component';
import { DeviceDialogComponent } from './routes/devices/dialog/device-dialog.component';
import { DeviceFiltersPanelComponent } from './routes/devices/filters-panel/device-filters-panel.component';
import { ForumFiltersPanelComponent } from './routes/forum/filters-panel/forum-filters-panel.component';
import { ForumComponent } from './routes/forum/forum.component';
import { ForumThreadDialogComponent } from './routes/forum/thread-dialog/forum-thread-dialog.component';
import { ForumThreadFormComponent } from './routes/forum/thread-form/forum-thread-form.component';
import { ForumThreadListComponent } from './routes/forum/thread-list/forum-thread-list.component';
import { ForumThreadReplyFormComponent } from './routes/forum/thread-reply-form/forum-thread-reply-form.component';
import { ForumThreadComponent } from './routes/forum/thread/forum-thread.component';
import { LandingComponent } from './routes/landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';

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
    ForumThreadFormComponent,
    ForumThreadReplyFormComponent,
    ForumThreadDialogComponent
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
