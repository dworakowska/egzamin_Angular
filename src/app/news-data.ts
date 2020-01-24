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

//imageUrl
//?
//Czy tutaj tworzymy klase NewsData ktora importujemy potem we wszystkie inne miejsca??
