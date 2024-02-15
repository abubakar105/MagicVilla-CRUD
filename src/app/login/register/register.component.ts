import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  valid = false;
  isError=false;
  isSuccess=false;
  user={
    name:'',
    userName:'',
    password:'',
    role:''
  }

  constructor(private loginAuth:LoginService,private router: Router){}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl('', [
        Validators.required,
        // this.roleValidator.bind(this) // Custom validator
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
    this.user.name=this.registerForm.controls.name.value;
    this.user.userName=this.registerForm.controls.email.value;
    this.user.password=this.registerForm.controls.password.value;
    this.user.role=this.registerForm.controls.role.value;

    console.log("User",this.user)
    this.loginAuth.createUser(this.user).subscribe({
      next:(res)=>{
        console.log("create response",res)
        this.isSuccess=true;
        setTimeout(()=>{
    this.router.navigate(['/login']);
          
        },2000)
      },
      error:(err)=>{
        console.log("Errorr ",err)
        this.isError=true;
        setTimeout(()=>{
          this.closeMsg();
        },5000)
      }
    })
  }
  closeMsg(){
    this.isError=false;
  }
}
