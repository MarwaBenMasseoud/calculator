import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Combination} from "../model/Combination";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {
  }

  public login(amount: any, shopId: number): Observable<Combination> {
    return this.httpClient.get<Combination>(this.API_URL + 'shop/' + shopId + '/search-combination', {params: amount});
  }
}
