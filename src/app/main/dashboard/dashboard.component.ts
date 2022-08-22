import { Component, Input, OnInit } from '@angular/core';
import { ManagementServiceService } from '../core/management-service.service';
import { loginDto } from '../model/loginDto';
import { product } from '../model/productDto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userName!: string;
  public password!:string;
  public confirmPass!: string;
  public email!: string;
  public logged = false
  public user!: loginDto;
  public productList: product[] = [];

  constructor(private managementService: ManagementServiceService) { }

  ngOnInit(): void {
    //this.takeProfile()

  }

  public listOfProduct(){
    this.managementService.productList().subscribe((res)=> this.productList = res)
  }

  public takeProfile(){
    this.logged=true;
    this.managementService.getLogedUser().subscribe((res)=> {
      if(res){
        this.user = res
        this.userName = this.user.name!;
        this.email = this.user.email;
        this.password = this.user.password
      }
      this.listOfProduct()
    })
  }

  public updateUser(){
    let userToUpdate = {
      name: this.userName,
      email: this.email,
      password: this.password,
      confirmPass:this.confirmPass
    } as loginDto;
  this.managementService.updateUserDetails(userToUpdate).subscribe(res =>console.log(res))
  }

  public get valid():boolean{
    if(this.userName && this.password){
      if(this.password.length>8 && this.confirmPass === this.password)
      return true;
    }
    return false;
  }
}
