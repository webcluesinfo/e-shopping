import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './model/iProduct.type';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  // getproducts(){
  //   let url = "https://www.mocky.io/v2/5eda4003330000740079ea60";
  //   return this.http.get(url);
  // }

  getproductsList():Observable<IProduct[]>{
    let url = "https://www.mocky.io/v2/5eda4003330000740079ea60";
    return this.http.get<IProduct[]>(url);
  }
}
