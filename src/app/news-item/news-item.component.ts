import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import { NewsData } from "../news-data";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.css"]
})
export class NewsItemComponent {
  @Input()
  public news: NewsData;

  @Input()
  public index: number;

  @Output()
  public onRemove = new EventEmitter();

  imageUrl = "https://i.picsum.photos/id/2/400/300.jpg";

  constructor(private newsService: NewsService) {}

  //

  ngOnDestroy() {
    console.log("Został usunięty");
  }

  remove() {
    this.newsService.removeItem(this.index);
    this.onRemove.emit();
  }

  //3)pozycjonowanie jak na wykopie

  add() {
    this.newsService.updateItem(this.index, this.news.value + 1);
  }

  minus() {
    this.newsService.updateItem(this.index, this.news.value - 1);
  }
}
