import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {
  public buttonactive: boolean = true;
  public loading: boolean;
  public show: boolean = false;
  public buttonName: any = 'Show';

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    if (this.buttonactive) {
      this.buttonactive = false;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.buttonactive = true;
      }, 2000);
    }
  }

  toggle() {
    this.show = !this.show;

    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
