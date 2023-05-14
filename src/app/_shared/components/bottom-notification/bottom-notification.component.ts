import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-bottom-notification',
  templateUrl: './bottom-notification.component.html',
  styleUrls: ['./bottom-notification.component.scss']
})
export class BottomNotificationComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomNotificationComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
    ) {

  }
  OnInit() {
  }

  closeSheet(event:any):void{
      this._bottomSheetRef.dismiss();
  }
}
