import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    MatSlideToggleModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
