import { Component, Injectable, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidator, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors?: any;
  banner = '';

  userlist: any = {
    Sean: "Huang"
  }

  constructor(private fb: FormBuilder, private validation: ValidationService) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    }, {})
  }

  ngOnInit(): void {
    this.errors = {...this.loginForm.get('username')?.errors, ...this.loginForm.get('password')?.errors};
  }

  onSubmit(){
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;
    if(this.errors.required){
      console.log(this.errors);
      this.banner = 'username or password is needed';
      this.errors = {};
    }else{
      this.validation.validation(username, password).subscribe(check => {
        console.log(check);
        
        if (check){
          this.banner = 'login successful'
        }else{
          this.banner = 'login failed'
        }
      })
    }
  }

}

// @Injectable(
//   {providedIn: 'root'}
// )
// export class CustomAsyncValidator implements AsyncValidator{
//   constructor(private validator: ValidationService){}
//   // validate = (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
//   //   let username = control.get('username')?.value;
//   //   let password = control.get('password')?.value;
//   //   // return this.validator.validation(username, password);

//   // }

// }
