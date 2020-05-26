export class LengthFormaterValueConverter {
  public toView(value: number): string {
    return value === 0 ? "unknown" : value + "m";
  }
}
