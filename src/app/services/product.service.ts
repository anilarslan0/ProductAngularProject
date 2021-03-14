import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl="https://localhost:44399/api/products/getall"

  constructor(private httpClient:HttpClient) { }



  getProducts():Observable<ListResponseModel<Product>>{
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)
}

}


