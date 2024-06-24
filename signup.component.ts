import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
    constructor(private fb:FormBuilder){}
    ngOnInit():void{
        this.signup=this.fb.group({
           Fname:['',[Validators.required]],
           Lname:['',[Validators.required]],
           Email:['',[Validators.required,Validators.email]],
           Phone:['',[Validators.required]],
           Password:['',[Validators.required,Validators.minLength(6)]],
           
        })
    }
    hidepassword=true;

    signup:FormGroup|any=''
    onSubmit(){
       if(this.signup.valid){
          console.log("Form submitted",this.signup.value);
       }else{
         console.log("Form was invalid");
         
       }
    }
    togglePassword(){
       this.hidepassword=!this.hidepassword
    }
    getErrorMessage(controlName: string): string {
      const control = this.signup.get(controlName);
      if (control?.hasError('required')) {
        return 'You must enter a value';
      }
      if (control?.hasError('email')) {
        return 'Not a valid email';
      }
      if (control?.hasError('minlength')) {
        return `Minimum length is ${control.errors?.minlength.requiredLength}`;
      }
      
      return '';
    }
}
