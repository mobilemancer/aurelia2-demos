import { bindable } from "aurelia";

export class ColorDisplay {
  @bindable public colors: string[];
  public computedColors: { text: string; style: string }[] = [];

  public afterBind() {
    this.colors.forEach((colorDescription) => {
      const colors = colorDescription.split("&");
      colorDescription = colorDescription.replace("&", " & ");
      let style = "";
      colors.forEach((color) => {
        const index = colors.findIndex((s) => s === color);
        color = this.hexConvert(color);
        style =
          "background: radial-gradient(circle at 15px 15px," +
          `${this.modifyColor(color, 40)} 0, ${color} 25%, #333333); margin-left:${index * -25}px`;
        this.computedColors.push({ text: colorDescription, style: style });
      });
    });
  }

  private hexConvert(color: string): string {
    color = color.trim();
    if (color === "white") return "#ffffff";
    if (color === "black") return "#000000";
    if (color === "red") return "#ff0000";
    if (color === "green") return "#00ff00";
    if (color === "blue") return "#0000ff";
    if (color === "yellow") return "#ffff00";
    if (color === "bronze") return "#cd7f32";
    if (color === "silver") return "#c0c0c0";
    if (color === "gold") return "#ffd700";
    return color;
  }

  private modifyColor(color: string, amount: number): string {
    color = color.slice(1);
    const num = parseInt(color, 16);
    let red = (num >> 16) + amount;
    if (red > 255) red = 255;
    else if (red < 0) red = 0;

    let blue = ((num >> 8) & 0x00ff) + amount;
    if (blue > 255) blue = 255;
    else if (blue < 0) blue = 0;

    let green = (num & 0x0000ff) + amount;
    if (green > 255) green = 255;
    else if (green < 0) green = 0;

    return "#" + (green | (blue << 8) | (red << 16)).toString(16);
  }
}
