import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private fb:FormBuilder){}
    ngOnInit():void{
         this.login=this.fb.group({
            Email:['',[Validators.required,Validators.email]],
            Password:['',[Validators.required,Validators.minLength(6)]]
         })
    }
    login:FormGroup|any=''
    OnSubmit(){
       if(this.login.valid){
        console.log("Form Submitted",this.login.value)
       }
       else{
        console.log("Form was invalid");
        
       }
    }
    hidepassword=true;
    togglePassword(){
      this.hidepassword=!this.hidepassword
    }
    getErrorMessage(controlName:string):string{
        const control=this.login.get(controlName)
        if(control?.hasError('required')){
          return 'it must have a value'
        }
        if(control?.hasError('email')){
          return 'it has a valid email'
        }
        if (control?.hasError('minlength')) {
          return `Minimum length is ${control.errors?.minlength.requiredLength}`;
        }
        return '';
    }
}
