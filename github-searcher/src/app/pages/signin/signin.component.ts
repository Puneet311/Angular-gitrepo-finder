import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/sevices/auth.service';
import { GithubService } from 'src/app/sevices/github.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private auth: AuthService,
    public githubService:GithubService
  ) {}

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value;

    this.auth
      .signIn(email, password)
      .then((res) => {
        this.router.navigateByUrl('/');
        this.toastr.success('SignIn Success');
      })
      .catch((err) => {
        console.log(err.message);
        this.toastr.error('sign in failed');
      });
  }

}
