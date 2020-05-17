import { valueConverter } from "aurelia";

@valueConverter("heightF")
export class XYZ {
  public fromView(val) {
    console.log("from");
  }

  public toview(value: any): string {
    console.log("formatting...");

    return value + "m";
  }
}
