import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from '../core';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  user: User = {} as User;
  settingsForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;
  isUpdateError: boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.settingsForm = this.fb.group({
      UserName: '',
      FullName: '',
      Email: '',
      Password: ''
    });

  }

  ngOnInit() {
    Object.assign(this.user, this.userService.getCurrentUser());
    this.settingsForm.patchValue(this.user);
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateUser(this.settingsForm.value);

    this.userService
      .update(this.user)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.router.navigateByUrl('/'),
            this.toastr.success('User settings updated successfully');
        }
        else
          this.toastr.error(data.Errors[0]);
          this.isSubmitting = false;
      });
  }

  updateUser(values: Object) {
    Object.assign(this.user, values);
  }

}
