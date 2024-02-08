import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  regisForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder){}

  get email(){
    return this.regisForm.controls['email']
  }

  get password(){
    return this.regisForm.controls['password']
  }
}
