import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { environment } from 'src/environments/environment';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomNotificationComponent } from '../_shared/components/bottom-notification/bottom-notification.component';

@Injectable({ providedIn: 'root' })
export class CommonService {
    constructor(
        private _bottomSheet: MatBottomSheet
    ) { }

    showNotification(message:any): void {
        this._bottomSheet.open(BottomNotificationComponent,{
            data: {...message},
            disableClose: true
          });
    }
}