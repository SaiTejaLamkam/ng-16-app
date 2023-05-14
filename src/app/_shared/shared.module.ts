import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material.module';
import { BottomNotificationComponent } from './components/bottom-notification/bottom-notification.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BottomNotificationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MaterialModule
  ]
})
export class SharedModule { }
