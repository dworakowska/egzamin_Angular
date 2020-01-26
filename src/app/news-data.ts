export class NewsData {
  public title: string;
  public content: string;
  public imageUrl: string;
  public value: number = 0;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
