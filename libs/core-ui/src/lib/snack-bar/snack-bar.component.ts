import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../_services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'hcl-ers-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(
    private alertService: AlertService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => {
      if (message && message.text) {
        this.message = message;
        this.snackBar.open(message.text, undefined, {
          duration: 1000
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
