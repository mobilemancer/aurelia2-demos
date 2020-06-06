export class ImagePart {
  public imgSource: string;

  public enter(params: object): boolean {
    if (!params) {
      return false;
    }
    this.imgSource = "./../../../../../content/images/legends/" + params["legend"].image;
    return true;
  }
}
