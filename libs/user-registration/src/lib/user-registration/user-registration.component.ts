import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollTopService } from '@hcl-ers/core-ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'hcl-ers-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  @Input() user: any;
  @Output() OnComplete = new EventEmitter();
  constructor(
    private _formBuilder: FormBuilder,
    private _scrollTopService: ScrollTopService
  ) {}

  ngOnInit() {
    this._scrollTopService.setScrollTop();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: [
        this.user && this.user.name ? this.user.name : '',
        Validators.required
      ]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [
        this.user && this.user.address ? this.user.address : '',
        Validators.required
      ]
    });
  }

  public onCheckOut() {
    this.OnComplete.emit({
      name: this.firstFormGroup.value.firstCtrl,
      address: this.secondFormGroup.value.secondCtrl
    });
    //    this.router.navigate(['check-out']);
  }
}
