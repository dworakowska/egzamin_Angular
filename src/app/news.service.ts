import { Injectable, EventEmitter, Output } from "@angular/core";
import { NewsData } from "./news-data";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  @Output() onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData("Pierwszy post na moim blogu", "Nie ma treści."),
    new NewsData("Drugi post", "Dzisiaj świeci słońce."),
    new NewsData("Trzeci post", "Jest niedziela.")
  ];

  getNewsList() {
    return this.news.slice();
  }

  //

  removeItem(i: number) {
    this.news.splice(i, 1);
    this.onChange.emit();
  }

  addItem(title: string, content: string) {
    this.news.push(new NewsData(title, content));
    this.onChange.emit();
  }

  updateItem(atIndex: number, value: number) {
    this.news[atIndex].value = value;
    this.news.sort((a, b) => b.value - a.value);
    this.onChange.emit();
  }
}
