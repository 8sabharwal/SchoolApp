import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`)
  }
  public generateToken(loginData: any ) {


    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //login user: set token in localStorage
  public loginUser(token: string){
    localStorage.setItem('token',token);
    return true;
  }

  // islogin: user is logged in or not

  public isLoggedIn(){
    var tokenStr = localStorage.getItem('token');
    if(tokenStr==null || tokenStr==''|| tokenStr==undefined){
      return false;
    }
    else{
      return true;
    }
  }

  //logout : remove token from local storage
  public logout(){
    localStorage.removeItem('token');
    return true;
  }

  //get token from local storage
  public getToken(){
    return localStorage.getItem('token')
  }

  //setuserDetails
  public setUser(user: any){
    localStorage.setItem('user',JSON.stringify(user));}


    //getUserDetails

    public getUser(){
      let userStr = localStorage.getItem('user');
      if(userStr!=''){
        return JSON.parse(userStr!);
      }else{
        this.logout();
         return null; 
      }
    }

    //get user RouterModule

    public getUserRole(){
      let user=this.getUser();
      return  user.authorities[0].authority;
    }

}









