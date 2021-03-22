import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MLApiService {
  configUrl = "https://api.mercadolibre.com/"
  constructor(private http: HttpClient) { }
  getItems(item: string, offset:number) {
    return this.http.get(`${this.configUrl}sites/MCO/search?q=${item}&offset=${offset}`).pipe(map((data: any) => {
      return data;
    }));
  }
  getItemById(id: string){
    return this.http.get(`${this.configUrl}items?ids=${id}`).pipe(map((data: any) => {
      return data;
    }));
  }
  getSeller(idSeller: string){
    return this.http.get(`${this.configUrl}users/${idSeller}`).pipe(map((data: any) => {
      return data;
    }));
  }
}
