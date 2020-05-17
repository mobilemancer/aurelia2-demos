import { valueConverter } from "aurelia";

@valueConverter("heightFormater")
export class HeightFormaterValueConverter {
  public toview(value: number): string {
    console.log("formatting...");

    return value + "m";
  }
}
