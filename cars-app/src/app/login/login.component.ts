import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService) { 

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [ Validators.required, Validators.minLength(4)]),
    });

  } 

  ngOnInit(): void {
  }


  onSubmit(){
     console.log(this.loginForm);
    if(this.loginForm.valid) {
      const user = new User(this.loginForm.value.email, this.loginForm.value.password);
      this.userService.login(user)
    }
    
    
  }

}
