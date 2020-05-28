export class ImagePart {
  public imgSource: string;

  public enter(params: object) {
    if (!params) { return false; }
    this.imgSource = "./../../../../../content/images/legends/" + params['legend'].image;
  }
}
