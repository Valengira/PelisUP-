import { initializeApp } from '@angular/fire/app';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
  providers: [AuthService]
})
export class IngresarComponent {


  loginForm: FormGroup = this.formBuilder.group({
     correo:['', [Validators.email, Validators.required]],
     contraseña: ['', [Validators.required]]
  })


  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService
  ){}


  async ingresar(){
    if (this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    else {
      const info= this._authService.login(this.loginForm.controls['correo'].value, this.loginForm.controls['contraseña'].value )
      localStorage.setItem('Usuario', JSON.stringify(info));
    }
  }


  async ingresarConGoogle (){
    const info= this._authService.loginWithGoogle();
    localStorage.setItem('Usuario', JSON.stringify(info));
  }
    campoEsValido (campo: string){
    return (
      this.loginForm.controls[campo].errors &&
      this.loginForm.controls[campo].touched
    );
  }
  async register(){
    if (this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    else {
      this._authService.register(this.loginForm.controls['correo'].value, this.loginForm.controls['contraseña'].value )
    }
  }

  IngresarUsuario (){
    let infoParaLogin ={
      email: this.loginForm.value.email,
      contraseña: this.loginForm.value.contraseña
    }
    this._authService.login(infoParaLogin.email, infoParaLogin.contraseña).then ((Response) => {
      console.log("RESPUESTA", Response);
      alert("USUARIO CORRECTO")
    }).catch(Error) ; {
      console.log("ERROR", Error );
      window.alert("USUARIO INCORRECTO")
    }
  }
}

