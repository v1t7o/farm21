import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginDto, token } from '../model/loginDto';
import { product } from '../model/productDto';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {
  private readonly API_BASE_URL = 'https://assessment.farm21.com/'
  private readonly POST_LOGIN_REQ ='api/login'
  private readonly GET_PROFILE_REQ = 'api/profile'
  private readonly GET_PRODUCT_LIST = 'api/products'

  constructor(private http: HttpClient) { }

  public loginReq(user:loginDto): Observable<token>{
    return this.http.post<token>(`${this.API_BASE_URL}${this.POST_LOGIN_REQ}`, user)
  }

  public getLogedUser(): Observable<loginDto>{
    return this.http.get<loginDto>(`${this.API_BASE_URL}${this.GET_PROFILE_REQ}`)
  }
  public updateUserDetails(user: loginDto){
    return this.http.put(`${this.API_BASE_URL}${this.GET_PROFILE_REQ}`,user)
  }
  public productList(): Observable<product[]>{
    return this.http.get<product[]>(`${this.API_BASE_URL}${this.GET_PRODUCT_LIST}`)
  }
}
