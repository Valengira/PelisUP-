import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async login (email: string, contraseña: string){
    try{
      return await this.afauth.signInWithEmailAndPassword(email, contraseña);
    }
    catch(err){
     console.log('Error en login', err);
     return null;
    }
  }

  async loginWithGoogle (){
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    catch(err){
      console.log('Error en login con google ', err);
      return null;
    }

  }

  async register (email: string, contraseña: string){
     try {
      return this.afauth.createUserWithEmailAndPassword(email, contraseña);
     }
     catch(err){
      console.log('Error en registro ', err);
      return null;
    }}
}
