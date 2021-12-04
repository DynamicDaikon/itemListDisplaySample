import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from '../Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemsUrl = 'http://localhost:8080/api/items';


  constructor(
    private httpClient: HttpClient,
    private httpHeaders: HttpHeaders,
  ) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.itemsUrl)
      .map((response)) => {
        let content;
        let obj = response.json();
        content = {
          error: null,
          data: obj
        };
        console.dir(content);
        return content;
      }
  }

}
