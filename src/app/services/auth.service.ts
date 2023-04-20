import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth
  ) { }

  async login (email: string, contraseña: string){
    try{
      return this.afauth.signInWithEmailAndPassword(email, contraseña);
    }
    catch(error: any){
     console.log('Eror en login', error);
     if (error.error.message === 'EMAIL_NOT_FOUND'){
      this.register(email, contraseña);
     }
     return null;
    }
  }

  async loginWithGoogle (){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch(error){
      console.log('Eror en login con google ', error);
      return null;
    }

  }

  async register (email: string, contraseña: string){
     try {
      return this.afauth.createUserWithEmailAndPassword(email, contraseña)
     }
     catch(error){
      console.log('Eror con registro ', error);
     }
     return null;
  }
}
