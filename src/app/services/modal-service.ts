import { ModalProgressComponent } from '../components/modal-progress/modal-progress.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

constructor(private dialog: MatDialog) { }

progress(): MatDialogRef<ModalProgressComponent> {
  return this.dialog.open(ModalProgressComponent);
}

}
