import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    email: '',
    password: '',
  };

  credentials={
    username:'',
    password:'',
  }

  constructor(private login:LoginService,private router:Router) { }

  ngOnInit(): void {



    
  }

  formSubmit(){
    //console.log('form is submitted');
    if((this.loginData.email!='' && this.loginData.password!='')&&(this.loginData.email!=null&&this.loginData.password!=null)){

    }else{
      console.log('Fields are empty')
    }
   this.login.generateToken(this.loginData).subscribe(
    (data:any)=>{
    console.log('success');
    console.log(data);

    //login...
    this.login.loginUser(data.token);
    this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.login.setUser(user);
        console.log(user);

        //redirect ...ADMIN :admin-dashboard
        //redirect .../NORMAL :normal-dashboard
        if(this.login.getUserRole()=='ADMIN'){
         this.router.navigate(['admin'])
        } else if(this.login.getUserRole()=='student'){
          //normal user dashboard
          this.router.navigate(['user-dashboard'])

        }else{
          this.login.logout();
        }
      }
    )
   },
   (error)=>{
    console.log('Error !');
    console.log(error);
   }
   )
  }
}
