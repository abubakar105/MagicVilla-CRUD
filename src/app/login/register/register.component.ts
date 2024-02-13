import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
 

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/),
      ]),
      role: new FormControl('', [
        Validators.required,
        this.roleValidator.bind(this) // Custom validator
      ]),
    });
    // this.registerForm = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [
    //     (c: AbstractControl) => Validators.required(c),
    //     Validators.pattern(
    //       /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    //     ),
    //   ]),
    //   repeatPassword: new FormControl('', [
    //     (c: AbstractControl) => Validators.required(c),
    //     Validators.pattern(
    //       /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
    //     ),
    //   ]),
    // });
  }
  roleValidator(role:string){
    if(role.toLocaleLowerCase()!=="admin" || role.toLocaleLowerCase()!=="user"){
      return false;
    }
    return true;
  }
  onSubmit(){
    console.log(this.registerForm)
  }
}
