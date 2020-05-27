export class HomePage {
  private visitors: number = 487984568;
  private bb8Media = "./../../../content/images/legends/BB-8.png";
  private bb9eMedia = "./../../../content/images/legends/BB-9E.png";

  public imgSource = "";
  constructor() {
    if (this.visitors % 2 === 0) {
      this.imgSource = this.bb8Media;
    } else {
      this.imgSource = this.bb9eMedia;
    }
  }
}
