import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.css"]
})
export class NewsEditorComponent implements OnInit {
  @Output()
  onAdd = new EventEmitter<string>();

  newTitle: string;
  newContent: string;

  constructor(private newsService: NewsService) {
    this.newTitle = "Title";
    this.newContent = "Sample";
  }

  ngOnInit() {}

  //

  addNewItem() {
    if (this.newTitle && this.newContent) {
      this.newsService.addItem(this.newTitle, this.newContent);
      this.onAdd.emit();
      this.newTitle = "";
      this.newContent = "";
    }
  }
}
