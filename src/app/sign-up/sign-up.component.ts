import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUPComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  form = new FormGroup({ 
    email: new FormControl('', [Validators.required, Validators.email])
  })

  constructor() { }

  ngOnInit() {
    
  }

  toggle() {
    this.show = !this.show;

    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
