import { ItemService } from './../service/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private ItemService: ItemService,
  ) { }

  // 商品リスト
  itemList: Item[] = [];

  // 画面初期表示イベント
  ngOnInit(): void {
    this.ItemService.getItems().subscribe(
      result => this.setItems(result),
      error => alert('通信エラー'+error)
    );
  }

  setItems(result: Item[]): void {
    if(result.error) {
      alert('Web APIエラー' + result.message);
    }

    this.itemList = result.data;

  }
}
