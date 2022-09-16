import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i),
    ]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  })
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    alert(JSON.stringify(this.loginForm.value))
  }

  get email() {
    return this.loginForm.get('email')!
  }
}
