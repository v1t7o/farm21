import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ManagementServiceService } from '../core/management-service.service';
import { loginDto } from '../model/loginDto';
import {finalize, Observable} from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email!: string;
  public password!: string;
  public user!: loginDto;
  public token!: string;
  public done!:boolean;
  @Output() logged: EventEmitter<boolean> = new EventEmitter()

  constructor(public managementService: ManagementServiceService) { }

  ngOnInit(): void {
  }

  public login(){
    this.user = {
      email: this.email,
      password: this.password
    }
    this.managementService.loginReq(this.user).pipe(finalize(()=> {

      console.log('done')
      this.done = true;
    })
    )
    .subscribe((res)=> {
      console.log(res)
    this.token = res.token;
    localStorage.setItem('token', this.token);
    this.logged.emit(this.done);
  })
  }
}
