import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar: MatSnackBar) { }


  sucesso(msg: string, duration = 5000): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    })
  }

  atencao(msg: string, duration = 5000): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['atencion-snackbar']
    })
  }

  info(msg: string, duration = 5000): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['info-snackbar']
    })
  }

  erro(msg: string, duration = 5000): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    })
  }

}
