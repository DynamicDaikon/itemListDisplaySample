import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'http://localhost:8080/api/items';
  CALLBACK = 'JSONP_CALLBACK';

  constructor(
    private httpClient: HttpClient,
    private httpClientJsonpModule: HttpClientJsonpModule
  ) { }

  getItems(): Observable<Item[]> {

  }
}
