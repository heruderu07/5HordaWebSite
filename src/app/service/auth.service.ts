import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  error: any;

  constructor(public auth: AngularFireAuth ) { }

  async emailSignin(email: string, password: string){
    try{
      const credential= await this.auth.signInWithEmailAndPassword(email, password);
      this.user = credential.user;
    } catch (error){
      this.error = ("Email ou senha incorretos");
    }
  }



   /* async googleSignin(){
     try{
       const provider = new firebase.auth.GoogleAuthProvider();
       const credential = await this.auth.signInWithPopup(provider);
       this.user = credential.user;

     } catch (error){
       this.error = error;
     }
   } */


   async googleSignin(){
    return  this.auth.signInWithPopup(new GoogleAuthProvider).then(res => {

      localStorage.setItem('token',JSON.stringify(res.user?.uid));
      this.user = res.user


  }, err => {
    alert(err.message);
  })
}

   async signOut(){
     await this.auth.signOut();
     this.user=null;
   }
}
