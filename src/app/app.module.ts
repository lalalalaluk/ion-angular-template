import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { AppRoutingModule } from './app.routing.model';

import { BasicWorldComponent } from './basic/basic-world/basic-world.component';
import { BasicSpriteComponent } from './basic/basic-sprite/basic-sprite.component';
import { BasicFixedSizeComponent } from './basic/basic-fixed-size/basic-fixed-size.component';
import { AlphaAdjustComponent } from './example/alpha-adjust/alpha-adjust.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicWorldComponent,
    BasicSpriteComponent,
    BasicFixedSizeComponent,
    AlphaAdjustComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatExpansionModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
