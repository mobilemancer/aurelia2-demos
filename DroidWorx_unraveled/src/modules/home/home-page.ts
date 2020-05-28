export class HomePage {
  public imgSource = "";

  private visitors: number = 487984567;
  private bb8Media = "./../../../content/images/legends/BB-8.png";
  private bb9eMedia = "./../../../content/images/legends/BB-9E.png";

  constructor() {
    this.imgSource = this.getImageSource(this.visitors);
  }

  private getImageSource(visitorCounter): string {
    return visitorCounter % 2 === 0 ? this.bb8Media : this.bb9eMedia;
  }
}
