import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { Errors, UserService } from '../core';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = { errors: {} };
  isSubmitting = false;
  authForm: FormGroup;
  isLoginError : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private tokenService: TokenService
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'UserName': ['', Validators.required],
      'Password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('Email', new FormControl());
        this.authForm.addControl('FullName', new FormControl());
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = { errors: {} };

    const credentials = this.authForm.value;
    if (this.authType === 'register') {
      this.userService
        .registerUser(credentials)
        .subscribe((data: any) => {
          if (data.Succeeded == true) {
            this.router.navigateByUrl('/login'),
              this.toastr.success('User registration successful');
          }
          else
            this.toastr.error(data.Errors[0]);
        });
    }
    else{
      this.userService.userAuthentication(credentials.UserName,credentials.Password).subscribe((data : any)=>{
      this.tokenService.saveToken(data.access_token);
      console.log("Token:" + this.tokenService.getToken());
      //this.userService.getUserClaims();
      this.router.navigateByUrl('/');
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
    }
  }
}
