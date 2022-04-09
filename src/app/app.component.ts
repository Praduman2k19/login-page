import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userError:any
  hour:number=0;
  loginForm:FormGroup=new FormGroup({})
  constructor(private formBuilder:FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }
  createForm()
  {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  login(data:any)
  {
    this.userError=undefined
    console.log(data);
    var time = new Date();
    var wish=''
    this.hour=+time. toLocaleString('en-US', { hour: 'numeric', hour12: false })
    if(this.hour>=12&&this.hour<16)
    wish="Good afternoon"
    else if(this.hour>=16&&this.hour<21)
    wish='Good evening'
    else if(this.hour<24&&this.hour>=21)
    wish='Good night'
    else
    wish='Good morning'

    if(data.email=='praduman2k19@gmail.com' && data.password=='12345678')
    {
      window.alert("Hello "+data.email+" "+wish)
    }
    else if(data.email!='praduman2k19@gmail.com')
    this.userError='Your email is wrong.'
    else if(data.password!='12345678')
    this.userError='Your password is wrong.'
    else
    this.userError='Your Email and password are wrong.'

    this.deleteMessage()
  }


  deleteMessage()
  {
    setTimeout(() =>
    {
      this.userError=undefined
    },2000)
  }
}
